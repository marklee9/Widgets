import React from "react";

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Date()
		};

		this.tick = this.tick.bind(this);
	}

  // The componentDidMount() method runs after the component output has been rendered to the DOM.
  //  This is a good place to set up a timer:
	componentDidMount() {
    this.state.timerId = setInterval(this.tick, 1000);
  }

  // 
  componentWillUnmount() {
    clearTimeout(this.state.timerId);
  }

	tick() {
		this.setState({ time: new Date() });
	}

	render() {
    let hour = this.state.time.getHours();
    let minute = this.state.time.getMinutes();
    let second = this.state.time.getSeconds();
    let date = this.state.time.toDateString();

    if (second < 10) second = "0" + second;

		return (
			<div className="clock-div">
        <div className="time">
          <div className="title">
            <span>Time:</span>
          </div>
          <div className="display">
            <span>{hour}:{minute}:{second} PDT</span>
          </div>
        </div>
        <div className="date">
          <div className="title">
            <span>Date:</span>
          </div>
          <div className="display">
            <span>{date}</span>
          </div>
        </div>
			</div>
		);
	}
}

export default Clock;