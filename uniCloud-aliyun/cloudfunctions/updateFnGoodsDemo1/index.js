const db = uniCloud.database()
const dbCmd= db.command
exports.main = async (event, context) => {
const {
		id,
		goods_name
	} = event
	console.log('event : ', event)
	const res = await db.collection('goods').where({
		_id:dbCmd.nin([id])
	}).update({
		goods_name:'haha'+goods_name
	})
	

	//返回数据给客户端
	return {
		msg:'修改成功！',
		_id:id
	}
};