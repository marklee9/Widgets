import React from "react";


class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected : 0
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(e) {
    e.preventDefault();
    this.setState({selected: Number(e.target.getAttribute("index"))});
  }

  render() {
    let titles = this.props.panes.map((array, i) => {  
      if (i === this.state.selected) {
        return (
        <div onClick={this.handleTabClick} className="each-tabs selected" index={i} key={i}>{array["title"]}</div>
        );
      } 
      return (
        <div onClick={this.handleTabClick} className="each-tabs" index={i} key={i}>{array["title"]}</div>
      );
    });
    
    let content = this.props.panes[this.state.selected]["content"];

    return (
      <div className="tab-div">
        <div className="tabs">{titles}</div>
        <div className="contents">{content}</div>
      </div>
    );
  }
}

export default Tabs;