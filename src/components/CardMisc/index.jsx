import React from 'react';
import { Card } from 'react-bootstrap';

const MiscCards = (props) => {
  return (
    <Card style={{ width: '50rem' }}>
      <Card.Title>{props.title}</Card.Title>
      <Card.Img src={props.img} />
      <Card.Body>
        
        <Card.Text>
          {props.content}
        </Card.Text>
      </Card.Body>
      <Card.Footer>{props.footer}</Card.Footer>
    </Card>
  );
};

export default MiscCards;