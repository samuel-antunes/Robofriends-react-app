import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            robots: [],
            searchField: ""
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render(){
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if(this.state.robots === 0){
            return <h1>Loading</h1>
        }else{
            return(
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={ this.onSearchChange }/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }      
    };
}


export default App;