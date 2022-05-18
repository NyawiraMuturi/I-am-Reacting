import React from 'react'
import profile1 from '/home/nyawira/Documents/Personal projects/ReactPractice/practice/src/img/babe.jpeg'

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
