import React from "react";
import ReactDOM from "react-dom";

// Widgets
import Clock from './widgets/clock';
import Weather from './widgets/weather';
import Tabs from './widgets/tabs';

const panes = [
  {title: "one", content : "I'm first" },
  {title: "two", content : "Second yo"},
  {title: "three", content: "Third pane here"}
];

function Root() {
  return (
    <div>
      <div>
        <h1>Clock</h1>
        <Clock />
      </div>
      <div>
        <h1>Weather</h1>
        <Weather />
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