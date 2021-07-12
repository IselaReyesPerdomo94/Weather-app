import React from "react";

import Weather from "./Weather";
import css from "../styles/Page.css";

function Page() {
  return (
    <div className={css.container}>
      <h1> Weather </h1>
      <Weather />
    </div>
  );
}

export default Page;
