import React, { Component } from "react";

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: "all", label: "all" },
    { name: "active", label: "active" },
    { name: "done", label: "done" }
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const classNames = "btn btn-" + name;

      return (
        <button
          type="button"
          className={classNames}
          key={name}
          onClick={() => {
            onFilterChange(name);
          }}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
