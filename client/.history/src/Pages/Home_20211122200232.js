import React from "react";
const Home = ({ link, name }) => {
  return (
    <>
      {/* <h1>{props.name}</h1> */}
      {/* <h1>my nam -{props.name}</h1> */}
      <a href={link} target="_blank">
        {name}
      </a>
    </>
  );
};

export default Home;
