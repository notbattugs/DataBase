import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useRef } from "react";
import CustomInput from "./components/customInput";
const CreatePost = ({ data, setData }) => {
  const postData = useRef({});
  const options = [
    "userImage",
    "userName",
    "description",
    "privacy",
    "image",
    "id",
  ];
  const handleClickFetchRequest = async () => {
    const res = await axios.post(
      "http://localhost:6969/posts",
      postData.current
    );
    setData((prev) => [...prev, res.data.data]);
  };
  const handleUpdate = async () => {
    const res = await axios.put(
      `http://localhost:6969/posts/${postData.current.id}`,
      postData.current,
      window.location.reload()
    );
    setData((prev) =>
      prev.map((e) => {
        if (postData.current.id == e._id) {
          return postData;
        }
        return e;
      })
    );
  };
  return (
    <div>
      {options.map((option) => {
        return (
          <CustomInput
            title={option}
            onChange={(e) =>
              (postData.current = {
                ...postData.current,
                [option]: e.target.value,
              })
            }
          />
        );
      })}
      <button style={{ marginLeft: "20px" }} onClick={handleClickFetchRequest}>
        Post
      </button>
      <button
        onClick={() => {
          handleUpdate();
        }}
      >
        update
      </button>
    </div>
  );
};

export default CreatePost;
