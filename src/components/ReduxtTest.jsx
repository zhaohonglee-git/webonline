import { createStore } from 'redux'

// 3.初始化state
const initState = {
  todos: [],
  posts: []
}

// 2.创建reducer函数
function myreducer(state = initState, action) {
  if (action.type == 'ADD_POST') {
    return {
      ...state,
      posts: [...state.posts, action.post]
    }
  }

  if (action.type == 'ADD_TODO') {
    return {
      ...state,
      todos: [...state.todos, action.todo]
    }
  }
}

// 1.创建store
const store = createStore(myreducer)

// 6.订阅store
store.subscribe(() => {
  console.log('state已更新')
  console.log(store.getState())
})

// 4、5 合并书写
store.dispatch({ type: 'ADD_TODO', todo: '打扫卫生' })
store.dispatch({ type: 'ADD_TODO', todo: '看书' })
store.dispatch({ type: 'ADD_POST', post: '我的第二篇博客' })
