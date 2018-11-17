import React from "react";
import ReactDOM from "react-dom";

// Widgets
import Clock from './widgets/clock';
import Tabs from './widgets/tabs';
import SearchBar from './widgets/searchbar';

const panes = [
  {title: "one", content : "I'm first" },
  {title: "two", content : "Second"},
  {title: "three", content: "Third pane here"}
];


const lists = [
  { title: "one", content: "1" },
  { title: "two", content: "2" },
  { title: "three", content: "3" },
  { title: "four", content: "4" },
  { title: "five", content: "5" },
  { title: "six", content: "6" }
];

const mark = [1,2,3];

function Root() {
  return (
    <div>
      <div>
        <h1>mark</h1>
        <Clock />
      </div>
      <div>
        <h1>Search Bar</h1>
        <SearchBar lists={lists} peter={mark} />
      </div>
      <div>
        <h1>Tabs</h1>
        <Tabs panes={panes}/>
      </div>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});