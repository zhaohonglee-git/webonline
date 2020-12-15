import React from 'react'
import Rainbow from '../hoc/Rainbow'

const Home = () => {
  return (
    <div>
      <div className='container'>
        <h3 className='center'>Home页面</h3>
        <p>欢迎来到webonline</p>
      </div>
    </div>
  )
}

export default Rainbow(Home)
