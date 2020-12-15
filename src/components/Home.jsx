import React, { Component } from 'react'
import Rainbow from '../hoc/Rainbow'
import axios from 'axios'



class Home extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      console.log(res)
      this.setState({
        posts: res.data.slice(0, 20)
      })
    })
  }

  render() {

    const { posts } = this.state
    const postList = posts.length > 0 ? (
      posts.map(item => {
        return (
          <div className='post card' key={item.id}>
            <div className='card-content'>
              <span className='card-title'>{item.title}</span>
              <p>{item.body}</p>
            </div>
          </div>
        )
      })
    ) : (
        <div className='center'>没有对应的博客文章进行展示</div>
      )

    return (
      <div>
        <div className='container'>
          <h3 className='center'>Home页面</h3>
          {postList}
        </div>
      </div>
    )
  }
}

export default Rainbow(Home)
