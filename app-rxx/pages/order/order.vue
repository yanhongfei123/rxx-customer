<template>
	<view class="content">
		<view class="uni-list">
			<view v-show="!orderList.length" class="no-data">暂无数据</view>
			<view class="uni-list-cell" v-for="(item,index) in orderList" :key="index">
				<view class="order-number">订单编号: {{item.order_num}}	</view>
				<view class="cell-mid">
					<view class="manager h-70">贷款经理: {{item.CUSTOMER.user.NAME}}	</view>
					<view class="apply-money h-70">贷款额度: {{item.amount}}	</view>
					<view class="apply-name h-70">产品名称: {{item.pruductname}}	</view>
					<view class="apply-type h-70">贷款类型: {{item.typename}}	</view>
					<view class="state" :class="[{ light: item.STATUS === 2 }]">{{state[item.STATUS - 1]}}</view>
				</view>
				<view class="go-detail" @tap="goOrderDetail(item.order_num, index)">查看详细</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from "vuex";
// 1，未接单，2，处理中，3，已放款，4，已拒绝，5，补充资料
	export default {
		computed: {
			...mapState(["token"])
		},
		data() {
			return {
				state:['未接单', '处理中', '已放款', '已拒绝', '补充资料'],
				orderList:[]
			}
		},
		methods: {
			goOrderDetail(orderNumber, index){
				uni.setStorageSync('orderItem', JSON.stringify(this.orderList[index]))
				uni.navigateTo({
					url: `/pages/order-detail/order-detail?orderNumber=${orderNumber}`,
				});
			
			}
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
				}, 2000)	
				return
			}
			this.API.getOrderbyCustoner().then(res=>{
			 	this.orderList = res.data;				 
			})
		}

	}
</script>

<style lang="scss">
	    .no-data{
				text-align: center;
				font-size: 30upx;
				margin-top: 100upx;
			}
	    page {
	       background: #F5F5F5;
				 margin-bottom: 100upx;
	    }
			.uni-list-cell{
				width: 690upx;
				margin: 28upx auto 0;
				background: #fff;
				box-sizing: border-box;
				font-size: 32upx;
				color: #1A1A1A;
				overflow: hidden;
			}
			.order-number{
				font-size: 30upx;
				height: 88upx;
				line-height: 88upx;
				padding-left: 34upx;
				border-bottom: 2upx solid #E6E6E6;
			}
			.cell-mid{
				position: relative;
				padding: 15upx 0;
				.state{
					position: absolute;
					top: 19upx;
					right: 0;
					width: 160upx;
					height: 60upx;
					line-height: 60upx;
					color: #fff;
					background: #BBB;
					text-align: center;
					border-top-left-radius:30px;
          border-bottom-left-radius:30px;

				}
				.light{
					background: #FF9833;
				}			
			}
			.h-70{
				height: 70upx;
				line-height: 70upx;
				padding-left: 34upx;
			}
			.go-detail{
				font-size: 34upx;
				color: #FF9833;
				height: 88upx;
				line-height: 88upx;
				border-top: 2upx solid #E6E6E6;
				text-align: center;
			}
			
			
	
</style>
