<template>
	<view class="content">
		<view class="pad30">
			<view class="title">请选择充值金额</view>
			<view class="uni-list">
				<view @tap="selectRechargeAmount(item, index)" :class="[item == '其他金额'?'colo_A4A3AC':'', chargeAmountIndex==index?'selected':'']" class="uni-list-cell" v-for="(item,index) in rechargeAmountList"
				:key="index">
					{{item}}
				</view>
			</view>
		</view>
		<view class="line"></view>
		<view class="pad30">
			<view class="pay-title">请选择支付方式</view>
			<view class="recharge-list">
				<view @tap="chooseChargeType(0)" :class="[chargeTypeIndex==0?'choosed':'']" class="recharge-item" >
					<view class="recharge-type">
						<image class="vm weixin-icon" src="../../static/img/img/weixin.png" mode="widthFix"></image>
						<view class="recharge-weixin vm">微信支付</view>
					</view>
					<view class="select-btn"></view>
				</view>
				<view @tap="chooseChargeType(1)" :class="[chargeTypeIndex==1?'choosed':'']"  class="recharge-item" >
					<view class="recharge-type">
						<image class="vm zfb-icon" src="../../static/img/img/zfb.png" mode="widthFix"></image>
						<view class="recharge-zfb vm">支付宝支付</view>
					</view>
					<view class="select-btn">
						<image src="../../static/img/img/" mode=""></image>
					</view>
				</view>
			</view>	
		</view>
		<button @tap="recharge" type="primary" id="primary" hover-class="other-button-hover">立即充值</button>	
	</view>
</template>
<script>
	import uniInput from '../../components/uni-input.vue'
	export default {
		components: {
			uniInput
		},
		data() {
			return {
				chargeTypeIndex: 0,
				chargeAmountIndex: 0,
				rechargeAmountList: ['30元', '50元', '100元', '200元', '5000元', '其他金额']
			}
		},
		computed: {

		},
		methods: {
			selectRechargeAmount(value, index) {
                if(value !== '其他金额'){
					this.chargeAmountIndex = index;
				}else{
					this.chargeAmountIndex = -1;
				}  
			},
			chooseChargeType(type){
				this.chargeTypeIndex = type;
			},
			recharge(){
				
			}

		},
		onLoad() {

		}
	}
</script>

<style lang="scss">
	button[type=primary]{
		width: 690upx;
		margin: 0 auto;
		height: 88upx;
		line-height:88upx;
		text-align: center;
		background-color: #FF9833;
	}
	
	button[disabled][type=primary]{
		background-color: #BBB;
	}
	#primary{
		margin-top: 150upx;
		color: #fff;
		font-size: 34upx;
	}
	
	.content {
		height: 100%;
		font-size: 30upx;
		color: #565656;
		padding-top: 30upx;
		.pad30{
			padding: 0 30upx ;
		}
		.title {
			margin: 35upx 0 50upx;		
		}
		.uni-list {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			align-content: flex-start;
			padding-bottom: 45upx;
		}
		.uni-list-cell {
			width: 210upx;
			height: 110upx;
			margin-bottom: 40upx;
			color: #FF9833;			
			font-size: 40upx;
			text-align: center;
			line-height: 110upx;
			border-radius: 10upx;
			border: 2upx solid #FF9833;
			&.colo_A4A3AC {
				color: #A4A3AC;
				border-color: #A4A3AC;
			}
			&.selected{
				background:#FF9833 ;
				color: #fff;;
			}
		}
		
		.line{
			height: 20upx;
			background: #F5F5F5;
		}
		.pay-title{
			margin: 35upx 0 10upx;
		}
		.recharge-list{
			//padding-right: 28upx;					
		}
		.recharge-item{
			position: relative;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100upx;
			line-height: 100upx;	
			padding-right: 26upx;
			//overflow: hidden;
			&::after{
				content: '';
				position: absolute;
				width: 750upx;
				height: 2upx;
				left: 0;
				bottom: 0;
				background: #E6E6E6;
			}		
			.recharge-type{
				font-size: 34upx;
				.vm{
					display: inline-block;
					vertical-align: middle;
				}
				image{
					margin-right: 38upx;
				}
				.weixin-icon{
					width: 55upx;
					height: 47upx;
				}
				.zfb-icon{
					width: 53upx;
					height: 53upx;
				}
				.recharge-weixin{
					
				}
				.recharge-zfb{
					
				}
			}						
			.select-btn{
				width: 34upx;
				height: 34upx;
				border: 2upx solid #FF9833;
				border-radius: 4upx;
			}					
		}
		.choosed{
			.select-btn{
				background: #FF9833;
			}
		}	

	}
</style>
