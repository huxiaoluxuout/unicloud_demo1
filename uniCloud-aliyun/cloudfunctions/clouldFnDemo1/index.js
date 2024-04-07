const db = uniCloud.database()
exports.main = async (event, context) => {
	let {
		keyword
	} = event
	let res = await db.collection('goods').limit(event.limit).field({
		goods_name: true,
		image: true
	}).where({
		goods_name: new RegExp(keyword,'ig')
	}).get()


	//返回数据给客户端
	return res
};