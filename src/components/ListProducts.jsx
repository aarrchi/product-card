import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const ListProducts = ({ prodData}) => {
  //console.log(prodData);
  return (
    <Card style={{ width: "22rem", height: "580px" }} className='mb-5 ms-5'>
      <Card.Img src={prodData.thumbnail} className="h-75"></Card.Img>
      <Card.Body>
        <Card.Title>{prodData.title}</Card.Title>
        <Card.Text>
          {prodData.description.length > 30
            ? prodData.description.slice(0, 29) + "..."
            : prodData.description}
        </Card.Text>
        <Button variant="primary" >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ListProducts;
