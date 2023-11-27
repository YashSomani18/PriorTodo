import React from "react";
import "./Styling/Card.css";

const Card = ({ ticket }) => {
  const statusIcons = {
    "In progress": "◌",
    Backlog: "●",
    Todo: "○",
  };

  const statusIcon = statusIcons[ticket.status] || "";

  const tags = ticket.tag ? ticket.tag.join(", ") : "";

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header">
          <div className="header-left">
            <span className="status-icon">{statusIcon}</span>
            <span className="card-priority">{ticket.priority} Priority</span>
          </div>
          <div className="header-right">
            <span className="card-id">{ticket.id}</span>
          </div>
        </div>
        <div className="card-title">{ticket.title}</div>
        <div className="card-footer">
          <span className="card-status">{ticket.status}</span>
          {tags && <span className="card-tag">{tags}</span>}
        </div>
      </div>
    </div>
  );
};

export default Card;
