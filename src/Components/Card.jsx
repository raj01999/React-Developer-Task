import React from "react";
import me from "../assets/img/raj.jpg";

const Card = ({ name, email, title, status, load }) => {
  return (
    <div className={`card-raj`}>
      <img src={me} alt="me" />
      <div className={`detail-raj ${load ? "loading-skeleton" : ""}`}>
        <h2 className={load ? "load-raj" : ""}>{name}</h2>
        <p className={load ? "load-raj" : ""}>
          {email ? "Email : " : ""} {email}
        </p>
        <p className={load ? "load-raj" : ""}>
          {title ? "Title : " : ""} {title}
        </p>
        <p className={load ? "load-raj" : ""}>
          {status !== undefined ? "Status : " : ""}
          {status !== undefined ? (status ? "Completed" : "Pending") : ""}
        </p>
      </div>
    </div>
  );
};

export default Card;
