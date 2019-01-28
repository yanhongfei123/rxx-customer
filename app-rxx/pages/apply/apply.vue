<template>
	<view class="content">
		<view class="reg-label"></view>
		<view class="input-group">
			<view class="input-row  space-between">
				<text class="title">贷款产品</text>
				<input @input="bindInput" type="text" placeholder-class="placeholder" v-model="name" placeholder="请输入贷款产品" />
			</view>
			<view class="input-row  space-between">
				<text class="title">贷款额度</text>
				<input @input="bindInput" type="text" placeholder-class="placeholder" v-model="apply.amount" placeholder="请输入贷款额度" />
			</view>
			<view class="input-row  space-between">
				<text class="title">贷款类型</text>
				<picker class="picker-item" mode="selector" :range="productList" range-key="name" @change="productChange">
					<view>{{proType}}</view>
				</picker>
				<view class="icon"></view>
			</view>
			<view class="input-row  space-between">
				<text class="title">贷款周期</text>
				<picker class="picker-item" mode="selector" :range="productDate" range-key="name" @change="dateChange">
					<view>{{dateType}}</view>
				</picker>
				<view class="icon"></view>
			</view>

			<view class="input-row  space-between">
				<text class="title">贷款手续费</text>
				<view class="rate">1%</view>
			</view>

		</view>
		<view class="btn-row">
			<button type="primary" :disabled="!apply.amount" @tap="save">立即申请</button>
		</view>
	</view>
</template>

<script>
	import uniInput from '../../components/uni-input.vue';

	export default {
		components: {
			uniInput
		},
		data() {
			return {
				disabled: true,
				name: '云科贷',
				proType: '',
				dateType: '',
				apply: {
					amount: '',
					ORDER_PRODUCTTYPE: 1,
					cycleID: 1,
					Latitude: uni.getStorageSync('latitude'),
					Longitude: uni.getStorageSync('longitude')
				},
				productList: [],
				productDate: [],

			}
		},
		methods: {
			save() {
				if(!uni.getStorageSync('latitude') || !uni.getStorageSync('longitude')){
					this.Util.Toast.toast("申请失败，请重新申请");
				}
				this.API.createOrder(this.apply).then(res => {
					this.Util.Toast.toast("申请成功");
					setTimeout(() => {
						uni.switchTab({
							url: '/pages/order/order'
						})
					}, 2000)

				});
			},
			bindInput(value) {

			},
			productChange(evt) {
				var selectedItem = this.productList[evt.detail.value];
				this.proType = selectedItem['name']
				this.apply.ORDER_PRODUCTTYPE = selectedItem['productTypeid'];

			},
			dateChange(evt) {
				var selectedItem = this.productDate[evt.detail.value];
				this.apply.cycleID = selectedItem['ID'];
				this.dateType = selectedItem['name']
			},
		},
		onLoad() {
			this.API.getproductbytype({
				product: 2
			}).then(res => {
				this.productList = res.data;
				this.proType = this.productList[0].name;
			});
			this.API.getcycle().then(res => {
				this.productDate = res.data;
				this.dateType = this.productDate[0].name;
			});

		}

	}
</script>

<style lang="scss">
	.btn-row {
		width: 690upx;
		margin: 120upx auto;
	}

	.input-row {
		position: relative;
		text-align: right;
		input{
			text-align: right;
		}

		.title {
			width: 160upx;
			text-align: left;
		}

		.rate {
			color: #FF9833;
		}

		.icon {
			width: 0;
			height: 0;
			border: 18upx solid transparent;
			border-bottom: none;
			border-top-color: #BBB;
		}
	}

	.picker-item {
		width: 60%;
		text-align: right !important;
		font-size: 34upx !important;
		color: #454545;

		.picker-btn {
			height: 116upx;
			line-height: 116upx;
			padding-right: 30upx;
		}
	}
</style>
