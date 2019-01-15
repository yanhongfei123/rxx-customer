<template>
	<view class="content">
		<view class="auto-wrap">
			<image src="../../static/img/app-logo.png" class="logo" />
			<view class="input-group">
				<view class="input-row border">
					<image class="icon-m icon" src="../../static/img/shouji.png" />
					<uni-input class="uni-input" maxlength="11" type="text" clearable focus v-model="account" placeholder="请输入手机号"></uni-input>
				</view>
				<view class="input-row">
					<image class="icon-p icon" src="../../static/img/suo.png" />
					<uni-input type="password" displayable v-model="password" placeholder="请输入密码"></uni-input>
				</view>
			</view>


			<view class="action-row">
				<navigator class="navigator f-pas" url="../pwd/pwd">忘记密码 ?</navigator>
				<navigator class="navigator register" url="../reg/reg">新用户注册</navigator>
			</view>

			<view class="btn-row login-wrap">
				<button type="primary" id="primary" :class="[!disabled?'primary':'']" :loading="loading" hover-class="other-button-hover"
				 :disabled="disabled" @tap="bindLogin">登录</button>
			</view>

			<view class="footer">
				<view class="footer-des">信贷经理请下载融小小经理端，此版本为贷款用户专用</view>
				<view class="down-load">立即下载</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	import uniInput from '../../components/uni-input.vue';

	//#ifdef APP-PLUS
	//import PLUS from  '../../utils/jpush.js'
	//#endif

	export default {
		components: {
			uniInput
		},
		data() {
			return {
				loading: false,
				account: '',
				password: '',
				positionTop: 0
			}
		},
		computed: {
			...mapState(['token']),
			disabled() {
				if (this.account && this.password) {
					return false
				}
				return true;
			}
		},
		methods: {
			...mapActions(['Login']),
			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
			},
			bindLogin() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if (this.account.length < 11) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号'
					});
					return;
				}
				/**
				 * 下面简单模拟下服务端的处理
				 * 检测用户账号密码是否在已注册的用户列表中
				 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
				 */
				const data = {
					phone: this.account,
					password: this.password,
					type: 1
				};
				// this.Login(data).then(res=>{
				//      uni.switchTab({
				//         url: '../home/home',
				//     });
				// }); window.plus.Push

				this.$store.dispatch('Login', data).then(res => {
					//#ifdef APP-PLUS
					if (plus.os.name == 'iOS') {					
						//PLUS.Push.setTagsWithAlias([], res.data.user.PHONE);
					}
					//#endif

					uni.setStorageSync('userInfo', JSON.stringify(res.data));
					uni.switchTab({
						url: '../home/home',
					});
				})
			},

		},
		onLoad() {
			this.initPosition();									
		}
	}
</script>

<style lang="scss">
	.content {
		height: 100%;
		background: #fff;
	}

	.auto-wrap {
		width: 600upx;
		margin: 0 auto;
	}

	.input-row {
		height: 116upx;
		display: flex;
		align-items: center;
		border-bottom: 2upx solid #e6e6e6;
	}

	.uni-input {
		padding-left: 36upx;
	}

	.logo {
		width: 134rpx;
		height: 134upx;
		margin: 134rpx auto;
		display: block;
	}

	.icon {
		width: 30rpx;
		height: 38upx;
		margin-right: 25upx;
	}

	.action-row {
		padding: 32upx 0;
		display: flex;
		justify-content: space-between;

		.f-pas {
			font-size: 30upx;
			color: #BBB;
		}

		.register {
			font-size: 30upx;
			color: #FF9833;
		}
	}

	.btn-row {
		margin: 80upx 0 135upx;
		border-radius: 100upx;
		over-flow: hidden;

		#primary {
			height: 88upx;
			line-height: 88upx;
			background: #BBB;
			border-radius: 100upx;
			font-size: 34upx;

			&.primary {
				background: #FF9833;
				color: #fff;
			}
		}


	}

	.footer {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.footer-des {
			width: 360upx;
			color: #BBB;
			font-size: 30upx;
		}

		.down-load {
			width: 134upx;
			height: 60upx;
			line-height: 60upx;
			font-size: 30upx;
			color: #FF9833;
			text-align: center;
			border: 2upx solid #FF9833;
			border-radius: 6upx;
		}
	}
</style>
