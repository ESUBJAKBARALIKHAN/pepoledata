import React, { useState, useEffect } from "react";
import Apidata from "./ApiData";

const App = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    const firstData = [];
    for (let i = count; i < count + 3; i++) {
      firstData.push(Apidata[i]);
    }
    setData(firstData);
  }, [count]);
  return (
    <div>
      <div
        className="Container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
          backgroundColor: "aqua",
        }}
      >
        <div className="app" style={{ width: "20%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontWeight: "bold", color: "white" }}>PEOPLE DATA</p>
            <button
              style={{
                width: "90px",
                height: "20px",
                backgroundColor: "orange",
                borderRadius: "20px",
              }}
              onClick={() => {
                setCount(count + 3);
              }}
            >
              Next Person
            </button>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {data.map((item, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid black",
                    borderRadius: "20px",
                    margin:"0",padding:"0"
                  }}
                >
                  <p style={{ width: "40px"}}>
                    {index}
                  </p>
                  <div style={{flex:1,display:"flex",flexDirection:"column"}}>
                    <p style={{backgroundColor:"blue",margin:"0",padding:"0",overflow:"hidden",borderTopRightRadius:"10px"}}>Name: {item.name}</p>
                    <p style={{backgroundColor:"white",margin:"0",padding:"0", borderBottomRightRadius:"10px"}}>Location: {item.location}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
