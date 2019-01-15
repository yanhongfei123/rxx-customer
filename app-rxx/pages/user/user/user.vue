<template>
	<view class="content">
		<view class="top-wrap">
			<view @tap="upload">
				<image style="width: 60px;height: 60px;" class="logo" :src="logoSrc" mode="widthFix"></image>
				<view class="info">点击修改头像</view>
			</view>
		</view>
		<view class="b-line"></view>
		<view class="uni-list">
			<view @tap="goDetail('user/userInfo/userInfo')" class="uni-list-cell">
				<image style="width: 36px;height: 36px;" class="icon" mode="widthFix" src="/static/img/info.png" />
				<view class="input-row  space-between">
					<text class="title">个人信息</text>
					<view class="icon-right"></view>
				</view>
			</view>
			<!-- #ifdef APP-PLUS -->
			<view @tap="showMask(true)" class="uni-list-cell">
				<image style="width: 36px;height: 36px;" class="icon" mode="widthFix" src="/static/img/friend.png" />
				<view class="input-row  space-between">
					<text class="title">好友</text>
					<view class="icon-right"></view>
				</view>
			</view>
			<!-- #endif -->


			<!-- #ifdef MP-WEIXIN -->
			<view class="uni-list-cell">
				<image style="width: 36px;height: 36px;" class="icon" mode="widthFix" src="/static/img/friend.png" />
				<view class="input-row  space-between">
					<text class="title">好友</text>
					<view class="icon-right"></view>
					<button class="share-btn" open-type="share"></button>
				</view>
			</view>
			<!-- #endif -->


			<view @tap="goDetail('user/suggestion/suggestion')" class="uni-list-cell">
				<image style="width: 36px;height: 36px;" class="icon" mode="widthFix" src="/static/img/comment.png" />
				<view class="input-row  space-between">
					<text class="title">意见反馈</text>
					<view class="icon-right"></view>
				</view>
			</view>
			<view @tap="goDetail('user/about-us/about-us')" class="uni-list-cell">
				<image style="width: 36px;height: 36px;" class="icon" mode="widthFix" src="/static/img/about.png" />
				<view class="input-row  space-between">
					<text class="title">关于融小小</text>
					<view class="icon-right"></view>
				</view>
			</view>
			<view @tap="goDetail('user/loginout/loginout')" class="uni-list-cell">
				<image style="width: 36px;height: 36px;" class="icon" mode="widthFix" src="/static/img/set.png" />
				<view class="input-row  space-between">
					<text class="title">设置</text>
					<view class="icon-right"></view>
				</view>
			</view>
		</view>

		<view v-show="isShowMask" @tap="showMask(false)" class="share-content-mask">
			<view class="share-content">
				<view class="share-des">分享至</view>
				<view class="share-list">
					<view @tap="shareWeiXin('WXSceneSession')" class="share-item">
						<image src="/static/img/img/wx.png" mode="widthFix"></image>
						<view class="share-type">微信</view>
					</view>
					<view @tap="shareWeiXin('WXSenceTimeline')" class="share-item">
						<image src="/static/img/img/pyq.png" mode="widthFix"></image>
						<view class="share-type">朋友圈</view>
					</view>
					<view @tap="shareQQ" class="share-item">
						<image src="/static/img/img/qq.png" mode="widthFix"></image>
						<view class="share-type">QQ</view>
					</view>
					<!-- <view @tap="shareQQ2" class="share-item">
						<image src="/static/img/img/qq.png" mode="widthFix"></image>
						<view class="share-type">QQ</view>
					</view> -->
				</view>
				<button @tap="showMask(false)" class="hideMask" type="primary">取消</button>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from "vuex";
	import {
		API_DOMAIN
	} from '../../../utils/config.js';
	export default {
		computed: {
			...mapState(["token"]),	
		},
		data() {
			return {
				shareParams: {
					provider: "weixin",
					type: 0,
					href: "https://www.baidu.com/",
					title: "融小小分享",
					summary: "融小小分享内容",
					imageUrl: "/static/img/app-logo.png",
				},
				isShowMask: false,
				logoSrc: '../../../static/img/logo.png' // /static/img/info.png  
			}
		},
		onShareAppMessage() {
			return {
				title: this.title,
				path: '/pages/home/home',
				imageUrl: this.imageUrl
			}
		},		
		methods: {
			showMask(flag) {
				this.isShowMask = flag;
			},
			goDetail(path) {
				uni.navigateTo({
					url: `/pages/${path}`
				})
			},
			shareWeiXin(scene) {
				var params = this.shareParams;
				uni.share({
					scene,
					...params,
					success: function(res) {
						//plus.nativeUI.toast('分享成功');
					},
					fail: function(err) {
						plus.nativeUI.toast('分享失败');
					}
				});
			},
			shareQQ() {
				var params = this.shareParams;
				uni.share({
					...params,
					provider: 'qq',
					success: function(res) {
						//plus.nativeUI.toast('分享成功');
					},
					fail: function(err) {
						plus.nativeUI.toast('分享失败');
					}
				});
			},
			shareQQ2() {
				var shareObj = null;
				plus.share.getServices(
					//获取分享服务成功
					function(services) {
						for (var i in services) {
							//判断微信分享服务
							if (services[i].id == 'qq') {
								shareObj = services[i];
							}
						}
						if (shareObj == null) {
							plus.nativeUI.toast('获取分享服务失败');
							return;
						}else{
							plus.nativeUI.toast(JSON.stringify(services));
						}

						//分享核心代码
						shareObj.send({
								content: "我是QQ分享",
								thumbs: ['../../static/img/blogo.png'],
								href: 'https://www.baidu.com/',
								title: 'test'
							},
							function() {
								plus.nativeUI.alert("分享成功！");
							},
							function(e) {
								plus.nativeUI.alert("分享失败：" + e.message);
							}
						);
					},
					//获取分享服务失败
					function(e) {
						plus.nativeUI.alert(e.message);
					}
				);

			},
			updateUserinfo(){
				var params = {
					AVATAR: this.logoSrc
				};
				this.API.updateUserinfo(params).then(res => {
					this.Util.Toast.success("头像上传成功");				
				}).catch(res => {
					
				})
			},
			upload() {
				uni.chooseImage({
					count: 1,
					success: (chooseImageRes) => {
						this.Util.Toast.showLoading("上传中...")
						const tempFilePaths = chooseImageRes.tempFilePaths;
						const uploadTask = uni.uploadFile({
							url: `${API_DOMAIN}/uploadfile`,
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								'token': uni.getStorageSync('token')
							},
							success: (uploadFileRes) => {
								this.logoSrc = JSON.parse(uploadFileRes.data).data;
								uni.setStorageSync('avatar', this.logoSrc);
								this.updateUserinfo();
								
							},
							fail: () => {
								this.Util.Toast.hideLoading();
								this.Util.Toast.toast("上传失败");
								console.log('上传失败')
							}
						});

						uploadTask.onProgressUpdate((res) => {
							if (res.progress == 100) {
								this.Util.Toast.hideLoading();
								this.Util.Toast.toast("上传成功");
							}
						});
					}
				})
			}
		},
		onLoad() {
			
		},
		onShow() {
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
				}, 2000	)	
				return
			}
			var avatar = uni.getStorageSync('avatar');
			if(avatar){
				this.logoSrc = avatar;
			}
		}

	}
</script>

<style lang="scss">
	.share-content-mask {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 10;
		background: rgba(0, 0, 0, 0.6);
	}

	.share-content {
		position: absolute;
		bottom: 0;
		width: 100%;
		background: #fff;
		padding: 50upx 0 75upx;
		text-align: center;

		.share-des {
			font-size: 30upx;
			color: #FF9833;
			margin-bottom: 72upx;
		}

		.share-list {
			display: flex;
			justify-content: center;

			.share-item {
				margin: 0 60upx;
			}

			image {
				width: 90upx;
				height: 90upx;
				margin-bottom: 22upx;
			}

			.share-type {
				font-size: 30upx;
				color: #1A1A1A;
			}
		}

		.hideMask {
			width: 690upx;
			margin: 75upx auto 0;
		}
	}


	.top-wrap {
		padding: 80upx 0;
		text-align: center;
	}

	.logo {
		width: 120upx !important;
		height: 120upx !important;
		margin: 0 0 35upx 0;
	}

	.info {
		font-size: 32upx;
		color: #1A1A1A;
	}

	.b-line {
		height: 20upx;
		background-color: #F5F5F5;
	}

	.uni-list {
		padding: 0 20rpx 0 50upx;
	}

	.uni-list-cell {
		display: flex;
		align-items: center;

		.input-row {
			position: relative;
			height: 100upx;
			flex: 1;
			margin: 0;

			.title {
				width: 200upx;
			}

			.share-btn {
				position: absolute;
				width: 100%;
				height: 100upx;
				left: 0;
				top: 0;
				opacity: 0;
				z-index: 1;
			}
		}

		.icon {
			width: 36upx !important;
			margin: 0 45upx 0 0;
		}


	}
</style>
