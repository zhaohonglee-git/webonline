import React from 'react'

const Contact = (props) => {
  // console.log(props)
  setTimeout(() => {
    props.history.push('/about')
  }, 2000);

  return (
    <div>
      <div className='container'>
        <h3 className='center'>Contact页面</h3>
        <p>欢迎来到webonline</p>
        <p>实现定时2S后跳转到About页面功能</p>
      </div>
    </div>
  )
}

export default Contact
