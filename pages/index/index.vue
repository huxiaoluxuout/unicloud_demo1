<template>
	<view>
		<view class="content" v-for="item in dataList" :key="item.id">
			<image class="logo" :src="item.img" mode="widthFix"></image>
			<view class="title">{{item.title}}</view>
		</view>

		<button @click="getGoods">goods</button>
		<view style="border-bottom: 1px solid salmon;padding: 4px;" v-for="(item,index) in clouldFnDemo1List"
			:key="item._id" @click="updateGoods(item._id,item.goods_name)">
			{{item.goods_name}}
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				dataList: [],
				clouldFnDemo1List: []
			}
		},
		onLoad() {
			// this.getMyCloudFn1()
			this.getGoods()
		},
		methods: {
			onSubmit(e) {
				console.log(e.detail.value);

			},
			putshToCloud() {
				uniCloud.callFunction({
					name: 'clouldFnDemo1',
					data: {
						name: '',

					}
				}).then(res => {
					console.log('1111', res)
				})
			},


			getMyCloudFn1() {
				uniCloud.callFunction({
					name: 'myCloudFn1',
					data: {
						name: '李四',
						color: 'red',
						nums: 3
					}
				}).then(res => {
					// console.log(res.result)
					this.dataList = res.result
				})
			},
			getGoods() {
				uni.showLoading()
				uniCloud.callFunction({
					name: 'clouldFnDemo1',
					data: {
						limit: 5,
						keyword: '洗衣机'
					}
				}).then(res => {
					uni.hideLoading()
					this.clouldFnDemo1List = res.result.data
				})
			},
			updateGoods(id, goods_name) {
				uniCloud.callFunction({
					name: 'updateFnGoodsDemo1',
					data: {
						id,
						goods_name
					}
				}).then(res => {
					console.log(res)
				})
			}
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