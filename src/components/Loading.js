import React from "react";
import "./../loading.css";

export default function Loading() {
  return (
    <div className="loader" style={{ marginTop: window.innerHeight / 2 }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
