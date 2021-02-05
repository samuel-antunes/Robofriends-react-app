
import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            robots: robots,
            searchField: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
        console.log(event.target.value);
    }

    render(){
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return(
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBox searchChange={ this.onSearchChange }/>
                <CardList robots={filteredRobots}/>
            </div>
        );
        
    };
}


export default App;