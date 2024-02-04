import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card";
import "./index.css";
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </React.StrictMode>
);
