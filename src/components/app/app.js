import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ToDoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../add-item";

import "./app.css";

class App extends Component {
  maxId = 100;

  createTodoItem(label) {
    return { label, important: false, done: false, id: this.maxId++ };
  }

  state = {
    todoData: [
      this.createTodoItem("drink vodka"),
      this.createTodoItem("make app"),
      this.createTodoItem("eat")
    ],
    searchStr: "",
    filter: ""
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);

      const newArray = [...before, ...after];

      return {
        todoData: newArray
      };
    });
  };

  addItem = text => {
    this.setState(({ todoData }) => {
      const newItem = this.createTodoItem(text);
      const newArray = [...todoData, newItem];

      return {
        todoData: newArray
      };
    });
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex(el => el.id === id);

    const newItem = { ...arr[idx], [propName]: !arr[idx][propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      };
    });
  };

  onSearchChange = searchStr => {
    this.setState({ searchStr });
  };

  onFilterChange = filter => {
    this.setState({ filter });
  };

  search = (items, searchStr) => {
    if (searchStr.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.label.toLowerCase().indexOf(searchStr.toLowerCase()) > -1;
    });
  };

  filter = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(item => !item.done);
      case "done":
        return items.filter(item => item.done);
      default:
        return items;
    }
  };

  render() {
    const { todoData, searchStr, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, searchStr), filter);

    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div>
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel
            searchItem={this.searchItem}
            onSearchChange={this.onSearchChange}
          />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <ToDoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItem todos={todoData} onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
