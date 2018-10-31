import React from "react";
import ReactDOM from "react-dom";
import Clock from './widgets/clock';
import Weather from './widgets/weather';
import Tabs from './widgets/tabs';


function Root() {
  return (
    <div>
      <Clock />
      <Weather />
      <Tabs />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});