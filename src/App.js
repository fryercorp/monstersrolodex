import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import andrew from './images/andrew.jpg';
import sarah from './images/sarah.jpg';
import obie from './images/obie.jpg';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(users => this.setState({ monsters: users }));

    this.setState({
      monsters: [
        {
          id: 1,
          name: 'Andrew the awesome',
          email: 'andrew@andrew.com',
          image: andrew
        },
        {
          id: 2,
          name: 'Sarah the sultry',
          email: 'sarah@sarah.com',
          image: sarah
        },
        {
          id: 3,
          name: 'Obie the magnificent',
          email: 'obie@obie.com',
          image: obie
        },
      ]
    })
  }

  handleChange = (e) => {
    this.setState ({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
