import React, { Component } from 'react'
import axios from 'axios'

export default class Post extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    console.log(this.props)
    console.log(this.props.match.params.post_id, '路由请求返回三个对象，其中match对象中能够获得URL中的post_id数据')
    let id = this.props.match.params.post_id

    axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(res => {
      console.log(res, '显示特定id的博客数据对象')
      this.setState({
        post: res.data
      })
    })
  }

  render() {
    const post = this.state.post ? (
      <div className='post'>
        <h4 className='center'>{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
        <div className='container'>博客正在加载</div>
      )

    return (
      <div className='container'>
        <h4>{post}</h4>
      </div>
    )
  }
}
