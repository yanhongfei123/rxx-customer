<template>
	<view class="content">
		<view class="no-data" v-show="!content">暂无数据</view>		
		<image :src="content" mode="widthFix"></image>
		<button @tap="goApply" type="primary">立即申请</button>
	</view>
</template>

<script>
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
				content: ''
			}
		},
		methods:{
			goApply(){
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
					url: '/pages/user/userInfo/userInfo'
				});
			}
		},
		onLoad(option) {
			const ID = option.ID;
			this.API.getDailiProductH5({
				ID
			}).then(res => {
				if(res.data){
					this.content = res.data.description ;
				}
			})
		}
	}
</script>

<style>
	button[type=primary]{
		width: 690upx;
		margin: 25upx auto;
		background-color: #F5F5F5;
		border: 2upx solid #FF9833;
		border-radius: 50upx;
		color: #FF9833;
	}
	.no-data {
		text-align: center;
		font-size: 30upx;
		margin-top: 150upx;
	}
	image{
		width: 100%;
		
	}
</style>
