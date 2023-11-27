import React, { useState } from "react";
import "./Styling/Navbar.css";
import { useDispatch } from "react-redux";
import { setGrouping, setSorting } from "../Utils/currentSlice";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const handleGroupingChange = (event) => {
    dispatch(setGrouping(event.target.value));
    setDropdownOpen(false);
  };

  const handleSortingChange = (event) => {
    dispatch(setSorting(event.target.value));
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navbar">
      <div className="display-dropdown">
        <button className="display-button" onClick={toggleDropdown}>
          Display ˅{" "}
        </button>
        <div
          className={
            dropdownOpen ? "dropdown-content show" : "dropdown-content"
          }
        >
          <div className="dropdown-group">
            <label htmlFor="grouping" className="dropdown-label">
              Grouping:
            </label>
            <select
              id="grouping"
              className="dropdown-select"
              onChange={handleGroupingChange}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="dropdown-group">
            <label htmlFor="ordering" className="dropdown-label">
              Ordering:
            </label>
            <select
              id="ordering"
              className="dropdown-select"
              onChange={handleSortingChange}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
