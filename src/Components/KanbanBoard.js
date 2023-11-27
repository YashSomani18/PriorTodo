import React, { useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { addTicket } from "../Utils/ticketSlice";
import { fetchTickets } from "../Utils/fetchTicket";
import {
  selectCurrentGrouping,
  selectCurrentSorting,
} from "../Utils/currentSlice";
import Column from "./Column";
import "./Styling/Kanbanboard.css";

const KanbanBoard = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.ticket.items);
  const users = useSelector((state) => state.user.items);
  const currentGrouping = useSelector(selectCurrentGrouping);
  const currentSorting = useSelector(selectCurrentSorting);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTickets();
        dispatch(addUser(data.users)); // Dispatch action to add users to the store
        dispatch(addTicket(data.tickets)); // Dispatch action to add tickets to the store
      } catch (error) {
        console.error("Failed to fetch from the API", error);
      }
    };

    if (tickets.length === 0) {
      loadData();
    }
  }, [dispatch, tickets.length]);

  const sortTickets = (tickets, sorting) => {
    switch (sorting) {
      case "priority":
        return tickets.slice().sort((a, b) => b.priority - a.priority);
      case "title":
        return tickets.slice().sort((a, b) => a.title.localeCompare(b.title));
      default:
        return tickets;
    }
  };

  const groupTickets = useCallback(
    (tickets, grouping) => {
      switch (grouping) {
        case "user":
          // Group by user and replace user IDs with names
          return tickets.reduce((acc, ticket) => {
            const user = users.find((user) => user.id === ticket.userId);
            const userName = user ? user.name : "Unassigned";
            const groupKey = userName;
            acc[groupKey] = acc[groupKey] || [];
            acc[groupKey].push({ ...ticket, userName });
            return acc;
          }, {});

        case "priority":
          // Group by priority and sort in descending order
          return tickets.reduce((acc, ticket) => {
            const groupKey = `priority-${ticket.priority}`;
            acc[groupKey] = acc[groupKey] || [];
            acc[groupKey].push(ticket);
            return acc;
          }, {});

        case "status":
        default:
          // Group by status
          return tickets.reduce((acc, ticket) => {
            acc[ticket.status] = acc[ticket.status] || [];
            acc[ticket.status].push(ticket);
            return acc;
          }, {});
      }
    },
    [users]
  );

  const groupedAndSortedTickets = useMemo(() => {
    const grouped = groupTickets(tickets, currentGrouping);
    const groupedAndSorted = {};
    Object.keys(grouped).forEach((group) => {
      groupedAndSorted[group] = sortTickets(grouped[group], currentSorting);
    });
    return groupedAndSorted;
  }, [tickets, currentGrouping, currentSorting, groupTickets]);

  const sortedGroupKeys = Object.keys(groupedAndSortedTickets).sort((a, b) => {
    const priorityA = parseInt(a.split("-")[1]);
    const priorityB = parseInt(b.split("-")[1]);
    return priorityB - priorityA;
  });

  console.log(sortedGroupKeys);

  return (
    <div className="kanban-board">
      {sortedGroupKeys.map((group) => (
        <Column
          key={group}
          status={group}
          tickets={groupedAndSortedTickets[group]}
          users={users}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
