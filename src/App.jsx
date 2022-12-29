import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./cards.jsx";
import CreatePost from "./CreatePost";
function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:6969/posts");
    setData(res.data.data);
    console.log(res.data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      {data &&
        data.map((data) => {
          return <Cards data={data} setData={setData} />;
        })}
      <CreatePost setData={setData} />
    </div>
  );
}

export default App;
