<template>
	<view class="content">
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="order-number">订单编号: {{orderNumber}} </view>
				<view class="cell-mid">
					<view class="apply-money h-70">贷款额度: {{orderDetail.amount ||  0}} </view>
					<view class="apply-name h-70">产品名称: {{orderDetail.pruductname}} </view>
					<view class="apply-type h-70">贷款类型: {{orderDetail.typename}} </view>
					<view class="apply-type h-70">贷款周期: {{orderDetail.cyclename ||  ''}} </view>
					<view class="state">{{state[orderDetail.STATUS - 1]}}</view>
				</view>
				<view v-if="orderDetail.STATUS !== 1" class="user-info">
					<view class="top-wrap">
						<view class="top-title">信贷经理信息</view>
					</view>
					<image class="head-logo" :src="logoSrc" mode="widthFix"></image>
					<view class="manager">贷款经理: {{orderDetail.CUSTOMER.user.NAME}}</view>
					<view class="manager-mobile">电话: {{orderDetail.CUSTOMER.user.PHONE}}</view>
					<view class="praise-wrap">
						<view @tap="lightStar(index)" class="star-cont" v-for="(item,index) in starList" :key="index">
							<image v-if="oIndex < index" class="star" src="../../static/img/def-star.png" mode="widthFix"></image>
							<image v-else class="star" src="../../static/img/light-star.png" mode="widthFix"></image>
						</view>

					</view>
					<view class="praise-me">请为我点个赞吧</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logoSrc: '../../static/img/logo.png',
				oIndex: -1,
				orderNumber: '2018101014210000',
				state: ['未接单', '处理中', '已放款', '已拒绝', '补充资料'],
				starList: [0, 1, 2, 3, 4],
				orderDetail: {},
			}
		},
		methods: {
			lightStar(index) {
				this.oIndex = index;
				this.API.orderScore({
					ID: this.orderDetail.ID,
					score: index + 1
				}).then(res => {
					this.Util.Toast.toast("点赞成功");
				})
			},

		},
		onLoad(option) {
			this.orderNumber = option.orderNumber;
			this.orderDetail = JSON.parse(uni.getStorageSync('orderItem'));
			var logoSrc = this.orderDetail.CUSTOMER.user.AVATAR;
			var score = this.orderDetail.score
			if (logoSrc) {
				this.logoSrc = logoSrc;
			}
			if (score) {
				this.oIndex = score - 1;
			}
		}
	}
</script>

<style lang="scss">
	page {
		margin-bottom: 100upx;
	}

	.uni-list-cell {
		width: 690upx;
		margin: 28upx auto 0;
		background: #fff;
		box-sizing: border-box;
		font-size: 32upx;
		color: #1A1A1A;
		overflow: hidden;
	}

	.order-number {
		font-size: 30upx;
		height: 88upx;
		line-height: 88upx;
		padding-left: 20upx;
		border-bottom: 2upx solid #E6E6E6;
	}

	.cell-mid {
		position: relative;
		padding: 15upx 0;

		.state {
			position: absolute;
			top: 19upx;
			right: 0;
			width: 136upx;
			height: 56upx;
			line-height: 56upx;
			color: #FF9833;
			text-align: center;
			border-radius: 30px;
			border: 2upx solid #FF9833;
		}
	}

	.h-70 {
		height: 70upx;
		line-height: 70upx;
		padding-left: 20upx;
	}

	.user-info {
		width: 690upx;
		margin: 54upx auto 0;
		text-align: center;

		.top-wrap {
			position: relative;
			height: 2upx;
			background: #DADFE2;

			.top-title {
				position: absolute;
				left: 50%;
				top: -18upx;
				height: 36upx;
				line-height: 36upx;
				padding: 0 20upx;
				background: #fff;
				font-size: 30upx;
				transform: translateX(-50%);
			}

		}

		.head-logo {
			border-radius: 100upx;
			margin: 60upx 0 30upx;
			width: 120upx;
			height: 120upx;
		}

		.manager {
			margin-bottom: 22upx;
		}

		.praise-wrap {
			display: flex;
			justify-content: center;
			margin: 60upx 0;

			.star-cont {
				margin: 0 22upx;
			}

			.star {
				width: 63upx;
				height: 61upx;
			}
		}
	}
</style>
