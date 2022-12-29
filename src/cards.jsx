import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
function cards({ data, setData }) {
  console.log(data);
  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:6969/posts/${id}`);
    setData((prev) => prev.filter((e) => id !== e._id));
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <h1>{data._id}</h1>
        <Card.Body style={{ display: "flex" }}>
          <img
            src={data.userImg}
            alt="404"
            style={{ width: "56px", height: "56px", borderRadius: "10px" }}
          />
          <p>{data.userName}</p>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{data.title}</ListGroup.Item>
          <ListGroup.Item>{data.description}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <img
            src={data.image}
            alt=""
            style={{ width: "15rem", height: "auto" }}
          />
        </Card.Body>
      </Card>
      <button onClick={() => handleDelete(data._id)}>🗑️</button>
    </div>
  );
}

export default cards;
