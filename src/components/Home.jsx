import React, { Component } from 'react'
import Rainbow from '../hoc/Rainbow'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'

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
              <img src={Pokeball} alt="pokeball" />
              <Link to={'/' + item.id}>
                <span className='card-title red-text'>{item.title}</span>
              </Link>
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
        <div className='container home'>
          <h3 className='center'>Home页面</h3>
          {postList}
        </div>
      </div>
    )
  }
}

export default Rainbow(Home)
