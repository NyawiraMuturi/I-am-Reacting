import React from 'react'

const Comments = (props) => {
    console.log(props)
  return (
    <div>
          <div className="container">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={props.pic} alt="prof pic" />
        </a>
      </div>
      <div className="content">
        <a href="/" className="author" >
          {props.name}
        </a>
        <span className="date" >
            Today at {props.date}
        </span>

        <div className="comment">
          {props.comment}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Comments
