<template>
	<view>
		<view class="content" v-for="item in dataList" :key="item.id">
			<image class="logo" :src="item.img" mode="widthFix"></image>
			<view class="title">{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				dataList:[]
			}
		},
		onLoad() {
			uniCloud.callFunction({
				name:'myCloudFn1',
				data:{
					name:'李四',
					color:'red',
					nums:3
				}
			}).then(res=>{
				// console.log(res.result)
				this.dataList=res.result
			})
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		justify-content: center;
		margin-bottom: 20px;
		border-bottom: 1px solid red;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
	}

	

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
