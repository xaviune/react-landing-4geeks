import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
function post2(){
    return(
        <>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/500/325?grayscale" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
  
      </Card.Body>
      <ListGroup>
        <ListGroup.Item ><Button variant="primary">Go somewhere</Button></ListGroup.Item>
      </ListGroup>
    </Card>
        </>
    )
}
export default post2;
