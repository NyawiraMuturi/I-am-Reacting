import React from 'react'

const UserCard = () => {
  return (
    <div className='card'>
      <div className="content">
        <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="secondary">Add Friend</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </div>
    </div>
  )
}

export default UserCard
