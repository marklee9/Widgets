import React from "react";

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    e.preventDefault();
    this.setState({search: e.target.value});
  }

  render() {
    let filtered = this.props.lists.filter((contact) => contact.title.includes(this.state.search));
    console.log(this.props.peter);
    return(
      <div>
        <div>
          {filtered.map((list) => <p>{list.title}</p>)}
        </div>
        <form>
          <input type="text" 
                 value={this.state.search} 
                 onChange={this.handleUserInput}>
          </input>
        </form>
      </div>
    );
  }

}

export default SearchBar;