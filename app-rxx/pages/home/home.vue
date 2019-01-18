<template>
	<view class="home">
		<view class="tab-wrap">
			<view @click="changeTab(0)" class="item" :class="{active: oIndex===0}">信用贷款</view>
			<view @click="changeTab(1)" class="item" :class="{active: oIndex===1}">抵押贷款</view>
			<view @click="changeTab(2)" class="item" :class="{active: oIndex===2}">赎楼过桥</view>
		</view>

		<view class="map-content">
			<map class='map' :class="[showmap?'showmap':'']" id="myMap" :scale="18" :latitude="latitude" :longitude="longitude"
			 :markers="markers" show-location @markertap="bindmarkertap" @tap="bindtap" @controltap="toCenter">
				<cover-image @tap="toCenter" class="cover-img1" src="../../static/img/center.png"></cover-image>
				<cover-image @tap="appoint" class="cover-img" src="../../static/img/findjl.png"></cover-image>
			</map>
		</view>
		<view class="uni-list-dk">
			<view @tap="goApply(item.NAME)" class="uni-list-cell" v-for="(item,index) in dkList" :key="index">
				<view class="cell-l">
					<image mode="widthFix" :src="item.image" class="img-icon"></image>
					<view class="dk-wrap">
						<view class="top-wrap">
							<view class="title">{{item.NAME}}</view>
							<view class="des">{{item.description}}</view>
						</view>
						<view class="money">{{item.account_max? (item.account_min + '万-') +  (item.account_max + '万') : item.account_min + '万以上' }}</view>
					</view>
				</view>
				<view class="cell-r">
					<view class="apply">立即申请</view>
					<view class="icon-right"></view>
				</view>

				<view class="line"></view>
			</view>
		</view>
		<view class="b-line"></view>
		<view class="btm-content">
			<view class="pro-title">贷款产品</view>
			<view class="uni-list-pro">
				<view @tap="goProductShow(item.ID)" :class="[index%3==2?'r-cell':'']" class="uni-list-cell" v-for="(item,index) in productList"
				 :key="index">
					<image class="adver" :src="item.image" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const io = require('../../utils/socket.io.js');
	import {
		mapState,
		mapActions
	} from "vuex";
	export default {
		computed: {
			...mapState(["token"])
		},
		data() {
			return {			
				oIndex: 0,
				dkList: [],
				productList: [],
				ldata: false,
				showMap: false,
				latitude: 113.9304,
				longitude: 113.9304,
				width: 21,
				height: 29,
				iconPath: '/static/img/location.png',
				markers: [],				
				apply: {
					ORDER_PRODUCTTYPE: 1,
					Latitude: uni.getStorageSync('latitude'),
					Longitude: uni.getStorageSync('longitude')
				},
				//hasConnected: false,
			}
		},
		methods: {
			findmanger(){
				var longitude = this.longitude;
				var latitude = this.latitude;
				var busnessType = this.oIndex + 1;
				this.socket.emit('findmanger', { longitude, latitude, busnessType });
				clearInterval(this.timer);
				this.timer = null;
				this.timer = setInterval(()=>{
					this.socket.emit('findmanger', { longitude, latitude, busnessType });
				}, 5000);
			},
			initSocket() {
				 const that= this;
				 const socket = (this.socket = io(
				  'http://rancher.rongxiaoxiao.com/',
				));				
				 socket.on('connect', () => {
					 this.Util.Toast.toast('connect')
					this.changeTab(0);
					this.hasConnected = true;
// 					if(this.token){
// 						this.Util.Toast.toast('88888888888888')
// 						socket.emit('oauth', {
// 							token: this.token
// 						});						
// 					}
				});
				
				if(this.token){
					socket.emit('oauth', {
						token: this.token
					});						
				}
				
				socket.on('oauthresult', (data) => {
					this.Util.Toast.toast('token认证结果:' + JSON.stringify(data));
				});
							
				socket.on('orderchange',  (data) => {
					this.Util.Toast.toast('您的订单已被接单');
				})
				
				// 添加一个关闭连接的监听器
				socket.on('disconnect',  () => {
					this.Util.Toast.toast("socket与服务器断开连接");
				});
				 // 查询附近的信贷经理返回
				socket.on('positionresult',  (data) => {
					//console.log(JSON.stringify(data))
					if(data.length){
						that.markers = data.map((item,index)=>{
							return {
								id: item.userID,
								title: item.NAME,
								latitude: parseFloat(item.LATITUDE),
								longitude: parseFloat(item.LONGITUDE),
								width: 14,
								height: 22,
								iconPath: that.iconPath
						  }
						})
						
					}
						
				});
		
				socket.on('connect_error', d => {
				  this.Util.Toast.toast("connect_error");
				})			
			},
			appoint() {
				if (!this.token) {
					uni.showToast({
						title: '请先登录',
						icon: 'none',
						duration: 1500,
						mask: true
					});
					setTimeout(()=>{
						uni.redirectTo({
							url: '/pages/login/login'
						})
					}, 2000)	
					return
				}			
				if(this.markers.length == 0){
					this.Util.Toast.toast("附近没有信贷经理");
					return;
				}
								
				this.Util.Toast.showModal("确认预约", "附近有" + this.markers.length + "个信贷经理，是否预约", res => {
					if (res.confirm) {
						this.API.createOrder(this.apply).then(res => {
							this.Util.Toast.toast("预约成功");
// 							setTimeout(() => {
// 								uni.switchTab({
// 									url: '/pages/order/order'
// 								})
// 							}, 2000)
						});
					}
				});
			},
			goApply(title) {
				if (!this.token) {
					uni.showToast({
						title: '请先登录',
						icon: 'none',
						duration: 1500,
						mask: true
					});
					setTimeout(()=>{
						uni.redirectTo({
							url: '/pages/login/login'
						})
					}, 2000)	
					return
				}	
				uni.navigateTo({
					url: '/pages/user/userInfo/userInfo?title=' + title
				});
			},
			goProductShow(id) {
				uni.navigateTo({
					url: '/pages/product-show/product-show?ID=' + id
				});
			},
			changeTab(index) {
				this.oIndex = index;			
				this.findmanger();						
			},
			bindmarkertap() {
				console.log('marker被点击')
			},
			bindtap() {
				console.log('map被点击')
			},
			toCenter() {
				this.mapCtx.moveToLocation()
			},
			getLocation() {
				// 微信获得经纬度
				var that = this;
				uni.getLocation({
					type: 'gcj02',
					success: function(res) {
						var latitude = res.latitude;
						var longitude = res.longitude;
						uni.setStorageSync('latitude', latitude);
						uni.setStorageSync('longitude', longitude);

						that.latitude = latitude;
						that.longitude = longitude;	
						
						//that.Util.Toast.toast("定位成功")
						//that.initSocket();											
					    !that.hasConnected  && that.initSocket();								
					},
					fail: function(res) {
						that.Util.Toast.toast("获取定位失败");
						that.ldata = true;
					}
				})
			},
			
		},
		onLoad() {
					
		},
		onUnload() {
			clearInterval(this.timer);
			this.timer = null;
			//this.socket.disconnect();
		},
		onShow() {		
			this.mapCtx = uni.createMapContext('myMap');
			this.toCenter();
			this.getLocation();
			//plus.nativeUI.alert(plus.os.name.toLowerCase());					 						
			// 			plus.geolocation.getCurrentPosition(function(p){
			// 				plus.nativeUI.alert('Latitude:' + p.coords.latitude);
			// 				plus.nativeUI.alert('longitude:' + p.coords.longitude);							
			// 			}, function(e){			
			// 				plus.nativeUI.alert('经纬度获取shibai==' + e.messagee);
			// 			}, {
			// 				provider: plus.os.name.toLowerCase() == 'ios'?"system":"amap",
			// 				//geocode: true,
			// 				//timeout: 10000,
			// 				coordsType: plus.os.name.toLowerCase() == 'ios'?"wgs84":"gcj02"
			// 			});

			// 贷款类型
			this.API.getProductList({
				type: 2
			}).then(res => {
				this.dkList = res.data;
			});
			// 贷款产品
			this.API.getProductList({
				type: 3
			}).then(res => {
				this.productList = res.data;
			})
		}
	}
</script>

<style lang="scss">
	.map-content {
		position: relative;

	}

	.canvas {
		position: absolute;
		top: 300upx;
		left: 20upx;
		width: 120upx;
		height: 120upx;
		background-color: #fff;
	}

	.image-cnt {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.cover-image {
		width: 120upx;
		height: 120upx;
	}

	.map {
		position: relative;
		width: 100%;
		height: 600upx;
	}

	.tab-wrap {
		width: 750upx;
		display: flex;

		.item {
			flex: 1;
			height: 88upx;
			line-height: 88upx;
			font-size: 34upx;
			text-align: center;
			color: #454545;

			&.active {
				color: #FF9833;
				position: relative;

				&:after {
					content: '';
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					height: 8upx;
					background: #FF9833;

				}
			}
		}
	}

	.uni-list-dk {
		margin-bottom: 36upx;

		.uni-list-cell {
			position: relative;
			height: 180upx;
			padding: 0 40upx;
			overflow: hidden;
			align-items: center;
			display: flex;
			justify-content: space-between;

			.cell-l {
				align-items: center;
				display: flex;
				justify-content: space-between;
			}

			.img-icon {
				width: 74upx;
				height: 74upx;
				margin-right: 40upx;
			}

			.title,
			.des {
				display: inline-block;
				vertical-align: middle;

			}

			.title {
				font-size: 32upx;
				color: #1F1F1F
			}

			.des {
				font-size: 26upx;
				color: #6E6E6E;
				margin-left: 18upx;
			}

			.money {
				font-size: 32upx;
				color: #FF9833;
			}

			.cell-r {
				display: flex;
				align-items: center;
				font-size: 34upx;
				color: #C0BFC8;

				.apply {
					margin: 0 30upx 0 0;
				}
			}

			.line {
				position: absolute;
				bottom: 0;
				left: 154upx;
				width: 100%;
				height: 1upx;
				background: #e6e6e6;
			}

		}
	}

	.b-line {
		height: 20upx;
		background-color: #F5F5F5;
	}

	.btm-content {
		padding: 44upx 40upx;
	}

	.pro-title {
		font-size: 34upx;
		color: #1F1F1F;
		padding-bottom: 35upx;
	}

	.uni-list-pro {
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;

		.uni-list-cell {
			width: 208upx;
			height: 115upx;
			border: 2upx solid #C0BFC8;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 24upx;
			margin-right: 17upx;

			.adver {
				width: 208upx;
			}
		}

		.r-cell {
			margin-right: 0;
		}
	}

	.cover-img {
		position: absolute;
		width: 204upx;
		height: 84upx;
		right: 30upx;
		bottom: 30upx;

	}

	.cover-img1 {
		position: absolute;
		bottom: 14upx;
		left: 16upx;
		width: 120upx;
		height: 120upx;
	}
</style>
