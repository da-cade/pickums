import React from 'react';
import './styles.css'
import { SearchPage } from './Pages/SearchPage.js'
import { Navbar } from './Components/Navbar.js'



class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar></Navbar>
        </header>
        <main>
          <SearchPage></SearchPage>
        </main>
      </div>
    );
  }
}

export default App;
