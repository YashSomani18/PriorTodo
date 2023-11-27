import React from "react";
import Card from "./Card";
import "./Styling/Column.css";

const Column = ({ status, tickets }) => {
  // console.log(status, tickets);

  const headerTitle =
    status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <div className={`column column-${status.toLowerCase()}`}>
      <h2 className="column-header">
        <span className="header-title">{headerTitle}</span>
        <span className="header-actions">+ ...</span>
      </h2>
      <div className="column-cards">
        {tickets.map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Column;
