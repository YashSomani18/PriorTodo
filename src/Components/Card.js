import React from 'react';
import './Styling/Card.css'; 

const Card = ({ ticket }) => {
  const getPriorityColor = (priority) => {
    switch(priority) {
      case 0: return 'grey'; // No priority
      case 1: return 'green'; // Low
      case 2: return 'blue'; // Medium
      case 3: return 'orange'; // High
      case 4: return 'red'; // Urgent
      default: return 'grey';
    }
  };

  // Define the mapping of statuses to icons
  const statusIcons = {
    'In progress': '◌',
    'Backlog': '●',
    'Todo': '○',
  };

  // Get the corresponding icon for the status
  const statusIcon = statusIcons[ticket.status] || '';

  const tags = ticket.tag ? ticket.tag.join(', ') : '';
  
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header">
          <div className="header-left">
            <span className="status-icon">
              {statusIcon}
            </span>
            <span className={`card-priority ${getPriorityColor(ticket.priority)}`}>
              {ticket.priority} Priority
            </span>
          </div>
          <div className="header-right">
            <span className="card-id">{ticket.id}</span>
          </div>
        </div>
        <div className="card-title">{ticket.title}</div>
        <div className="card-footer">
          <span className="card-status">
            {ticket.status}
          </span>
          {tags && <span className="card-tag">{tags}</span>}
        </div>
      </div>
    </div>
  );
};

export default Card;
