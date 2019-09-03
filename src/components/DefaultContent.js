import React from "react";
import { ReactComponent as DefaultImage } from "../assets/images/Preview.svg";

export default function DefaultContent() {
  return (
    <div>
      <h2>{new Date().toDateString()}</h2>
      <DefaultImage />
    </div>
  );
}
