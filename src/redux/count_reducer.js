/* 
	该文件用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	reducer函数会接收到两个参数，分别为：之前的状态(preStete), 动作对象(action)
*/
const initState = 0
export default function countReducer(preState = initState, action) {
	const {type, data} = action
	switch (type) {
		case 'increment':
			return preState + data
			case 'decrement':
				return preState - data	
		default:
			return preState
	}
}