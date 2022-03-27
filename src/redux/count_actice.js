/**
 * 该文件专门为Count组件生成action对象
 */

 import {INCREMENT, DECREMENT} from './constant'
// 同步active，就是指active的值为Object类型的一般对象
export const createIncrementAction = data => ({type: INCREMENT, data})
export const createDecrementAction = data => ({type: DECREMENT, data})

// 异步active，就是指active的值为函数
export const createIncrementAsyncAction = (data, delay) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(createIncrementAction(data))
		}, delay)
	}
}