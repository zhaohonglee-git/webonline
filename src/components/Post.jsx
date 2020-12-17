import React, { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component {
  // state = {
  //   post: null
  // }

  // componentDidMount() {
  //   console.log(this.props)
  //   console.log(this.props.match.params.post_id, '路由请求返回三个对象，其中match对象中能够获得URL中的post_id数据')
  //   let id = this.props.match.params.post_id

  //   axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(res => {
  //     console.log(res, '显示特定id的博客数据对象')
  //     this.setState({
  //       post: res.data
  //     })
  //   })
  // }

  handleClick = () => {
    this.props.deletePost(this.props.post.id)
    // 删除博客后重新定向到Home页面
    this.props.history.push('./')
  }

  render() {
    console.log(this.props, '测试***')
    const post = this.props.post ? (
      <div className='post'>
        <h4 className='center'>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className='center'>
          <button className='btn red' onClick={this.handleClick}>删除博客</button>
        </div>
      </div>
    ) : (
        <div className='container'>博客正在加载...</div>
      )

    return (
      <div className='container'>
        <h4>{post}</h4>
      </div>
    )
  }
}

// 拿到对应id的数据
const mapStateToProps = (state, ownProps) => {
  // 对比请求的路由参数 post_id作为条件从store中筛选符合条件的数据
  let id = parseInt(ownProps.match.params.post_id)
  // console.log(id, '打印拿到的id')
  // console.log(state.posts, '打印测试所有的博客文章')
  return {
    // 这里太奇葩了，id其实本质是一个字符串，需要将字符串转换为int整型才能使用！！！
    post: state.posts.find(item => item.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
