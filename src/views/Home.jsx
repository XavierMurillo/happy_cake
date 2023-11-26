import React from "react";

export const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: "40px" }}>Bienvenido a</span>
      <span style={{ fontWeight: "bolder", fontSize: "40px" }}>
        {" "}
        Happy Cake
      </span>
      <p style={{ fontSize: "15px" }}>El lugar de los pasteles felices</p>
      <img src="src\assets\img\birthday_cake.png" style={{ width: "5%" }} />
    </div>
  );
};
