<template>
	<view class="content">
		<view class="reg-label"></view>
		<view class="input-group">
			<view class="input-row  space-between">
				<text class="title">姓名</text>
				<input @input="bindInput" type="text" placeholder-class="placeholder" v-model="user.NAME" placeholder="请输入姓名" />
			</view>
			<view class="input-row  space-between">
				<text class="title">手机号码</text>
				<input @input="bindInput" type="text" placeholder-class="placeholder" v-model="user.PHONE" placeholder="请输入手机号码" />
			</view>

			<view  class="input-row  space-between">
				<text class="title">身份证</text>
				<input @input="bindInput" type="text" placeholder-class="placeholder" v-model="user.ID_CARD_NO" placeholder="请输入身份证号码" />
			</view>

			<view v-show="!user.PHONE" class="input-row  space-between">
				<text class="title">密码</text>
				<input @input="bindInput" type="text" placeholder-class="placeholder" v-model="user.PASSWORD" placeholder="请输入密码" />
			</view>

			<!-- 			<view class="input-row  space-between">
				<text class="title">性别</text>
				<uni-input @input="bindInput" type="text" v-model="user.SEX" placeholder="请输入性别"></uni-input>
			</view> -->

			<view class="input-row  space-between">
				<text class="title">性别</text>
				<picker class="picker-item" mode="selector" :range="sexList" range-key="sex" @change="sexChange">
					<view class="picker-btn">{{ sexList[user.SEX].sex }}</view>
				</picker>
				<view class="icon-right"></view>
			</view>

			<view class="input-row  space-between">
				<text class="title">年龄</text>
				<input @input="bindInput" type="text" placeholder-class="placeholder" v-model="user.AGE" placeholder="请输入年龄" />
			</view>

			<view class="input-row  space-between">
				<text class="title">职业</text>
				<input @input="bindInput" type="text" placeholder-class="placeholder" v-model="user.Career" placeholder="请输入职业" />
			</view>

			<view class="input-row  space-between">
				<text class="title">联系地址</text>
				<input @input="bindInput" type="text" placeholder-class="placeholder" v-model="user.address" placeholder="请输入联系地址" />
			</view>

			<view class="input-row  space-between">
				<text class="title">户籍</text>
				<input @input="bindInput" type="text" placeholder-class="placeholder" v-model="user.census" placeholder="请输入户籍" />
			</view>

			<!-- 			<view @tap="upload" class="input-row  space-between">
				<text class="title">头像</text>
				<view class="choose-img">请选择图片</view>
				<view class="icon-right"></view>
			</view> -->

			<view class="input-row  space-between">
				<text class="title">社保</text>
				<input @input="bindInput" type="text" placeholder-class="placeholder" v-model="user.Social_security" placeholder="请输入社保" />
			</view>

			<view class="input-row  space-between">
				<text class="title">婚姻状况</text>
				<input @input="bindInput" type="text" placeholder-class="placeholder" v-model="user.hunyin" placeholder="请输入婚姻状况" />
			</view>

			<view class="input-row  space-between">
				<text class="title">房产信息</text>
				<uni-input @input="bindInput" type="text" v-model="user.Property" placeholder="请输入房产信息"></uni-input>
			</view>
			<view class="input-row  space-between">
				<text class="title">车辆信息</text>
				<input @input="bindInput" type="text" placeholder-class="placeholder" v-model="user.car" placeholder="请输入车辆信息" />
			</view>

			<view class="input-row  space-between">
				<text class="title">征信信息</text>
				<input @input="bindInput" type="text" placeholder-class="placeholder" v-model="user.Credit" placeholder="请输入征信信息" />
			</view>

			<view class="input-row  space-between">
				<text class="title">银行流水</text>
				<input @input="bindInput" type="text" placeholder-class="placeholder" v-model="user.bank_flow" placeholder="请输入银行流水" />
			</view>

			<view class="input-row  space-between">
				<text class="title">有无负债</text>
				<input @input="bindInput" type="text" placeholder-class="placeholder" v-model="user.owing" placeholder="请输入有无负债" />
			</view>
			<view class="input-row  space-between">
				<text class="title">月收入</text>
				<input @input="bindInput" type="text" placeholder-class="placeholder" v-model="user.income" placeholder="请输入月收入" />
			</view>


		</view>
		<view class="btn-row">
			<button type="primary"  @tap="save">保存</button>
		</view>



		<!-- 	<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" mode="selector"  :pickerValueDefault="[0]"
		@onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerSingleArray"></mpvue-picker> 
		 -->

	</view>
</template>

<script>
	import uniInput from '../../../components/uni-input.vue';
	//import mpvuePicker from '../../../components/mpvue-picker/mpvuePicker.vue';
	import {
		API_DOMAIN
	} from '../../../utils/config.js';
	import {
		mapState,
		mapActions
	} from "vuex";

	export default {
		components: {
			uniInput,
			//mpvuePicker
		},
		computed: {
			...mapState(["token"])
		},
		data() {
			return {
				disabled: true,
				user: {
					NAME: '',
					PHONE: '',
					PASSWORD: '',
					//AVATAR: '',
					SEX: 0,
					AGE: '',
					ID_CARD_NO: '',
					Career: '',
					address: '',
					census: '',
					Social_security: '',
					Property: '',
					hunyin: '',
					car: '',
					Credit: '',
					bank_flow: '',
					owing: '',
					income: ''
				},
				sexList: [{
					sex: '男'
				}, {
					sex: '女'
				}],


			}
		},
		methods: {
			save() {
				this.API.updateUserinfo(this.user).then(res => {
					this.Util.Toast.success("保存成功");
					uni.setStorageSync('userInfo', JSON.stringify(res.data));
					setTimeout(() => {
						//uni.navigateBack()
						uni.navigateTo({
							url: '/pages/apply/apply'
						});
					}, 500)
				})
			},
			sexChange(evt) {
				var id = parseInt(evt.detail.value);
				this.user.SEX = id;
			},
			changeDisabled(){
				var flag = true;
				var user = this.user;
				for (var key in user) {
					if (user[key] === '') {
						flag = false;
					}
				}
				this.disabled = flag ? false : true;
			},
			bindInput(value) {
				//this.changeDisabled()
			},
		},
		onShow() {
			// 登陆后个人信息存在本地的userInfo
			if (this.token) {
				var userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				var newUserInfo = {
					hunyin: '',
					owing: '',
					address: '',
					PASSWORD: '',
					...userInfo.customer,
					...userInfo.user,
				};
				var user = {};
				for (var key in this.user) {
					user[key] = newUserInfo[key] == 'null' ? '' : newUserInfo[key] ;
				}
				this.user = user;
				//this.changeDisabled()
			}

		}

	}
</script>

<style lang="scss">
	input{
		text-align: right;
	}
	.placeholder{
	    color:#BBB;	
		font-size: 32upx;
	}
	
	.choose-img {
		flex: 1;
		height: 100%;
		line-height: 116upx;
		font-size: 32upx;
		color: #BBB;

	}

	.reg-label {
		margin: 40upx 0 0 0;
	}

	.btn-row {
		width: 690upx;
		margin: 70upx auto;
	}

	.picker-item {
		width: 100%;
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
