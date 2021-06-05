import React from 'react';
import CardList from './components/card-list/card-list.component';
import Search from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        <Search
          value={this.state.searchField}
          onChange={(e) => this.setState({ searchField: e.target.value })}
          placeholder='Search Monster'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
