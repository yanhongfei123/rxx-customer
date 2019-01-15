<template>
	<view class="content">
		<view class="uni-list">
			<view class="uni-list-cell" v-for="(item,index) in orderList" :key="index">
				<view class="cell-top">
					<view class="user-name">周小姐</view>
					<view class="get-order">抢单</view>
				</view>
				<view class="cell-mid">
					<view class="amount">5万元</view>
					<view class="date">3个月</view>
					<view class="time">3小时前</view>
				</view>
				<view class="cell-btm">
					<view v-for="(value, key)  in  desList" :key="key" class="order-des">{{value}}</view>
				</view>
				<view class="box-shadow"></view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				orderList: [1, 2, 3, 4],
				desList: ['个人用户', '有银行流水', '个人用户', '有银行流水', '个人用户', '有银行流水', '个人用户', '有银行流水', '个人用户']
			}
		},
		computed: {

		},
		methods: {


		},
		onLoad() {

		}
	}
</script>
<style lang="scss">
	.content{
		margin-bottom: 100upx;
	}
	.uni-list-cell {
		position: relative;
		width: 690upx;
		margin: 40upx auto 0;
		border: 2upx solid #E6E6E6;
// 		.box-shadow{
// 			position: absolute;
// 			left: 0;
// 			bottom: -4upx;
// 			width: 98%;
// 			height: 1px;
// 			z-index: 10;
// 			box-shadow: 0 4upx 10upx  #BBB;
// 		}
		.cell-top {
			position: relative;
			padding-top: 26upx;
			display: flex;
			justify-content: space-between;
			.user-name {
				font-size: 36upx;
				color: #1F1F1F;
				padding-left: 40upx;
				height: 55upx;
				line-height: 55upx;
				border-left: 10upx solid #FF9833;
			}
			.get-order {
				width: 134upx;
				height: 60upx;
				line-height: 60upx;
				text-indent: 10upx;
				color: #fff;
				font-size: 34upx;
				background: #FF9833;
				text-align: center;
				border-top-left-radius: 30px;
				border-bottom-left-radius: 30px;
			}
		}

		.cell-mid {
			text-align: center;
			margin: 52upx 0 62upx;
			font-size: 40upx;
			color: #FF9833;
			display: flex;
			justify-content: center;
			.date{
				margin: 0 100upx;
			}
		}

		.cell-btm {
			width: 652upx;
			margin: 0 auto 20upx;
			font-size: 28upx;
			padding: 20upx;
			box-sizing: border-box;
			color: #A4A3AC;
			background: rgba(254, 249, 244, 1);
			overflow: hidden;
			.order-des{
				float: left;
				width: 25%;
				text-align: left;
				margin-bottom: 20upx;
			}

		}

	}
</style>
