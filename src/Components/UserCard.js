import React from 'react'
import {Card, Button} from 'react-bootstrap'
import prof1 from '/home/nyawira/Documents/Personal projects/ReactPractice/practice/src/img/babe.jpeg'
import {Add} from '@material-ui/icons'

const UserCard = (props) => {
  return (
    <div className='card'>
      <div className="content">
        <Card style={{ width: '25rem' }}>
            <Card.Body>
                <Card.Title>Albina Nyawira</Card.Title>
                <Card.Text>
                  {props.children}
                </Card.Text>
                <Button variant="primary"><Add/> Add Friend</Button> 
            </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default UserCard
