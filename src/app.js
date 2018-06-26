import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './home';
import Basic from './components/basic';
import Texture from './components/texture';
import Light from './components/light';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/basic'>Basic</Link></li>
        <li><Link to='/texture'>Texture</Link></li>
        <li><Link to='/light'>Light</Link></li>
      </ul>
    </nav>
  </header>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/basic' component={Basic}/>
      <Route exact path='/texture' component={Texture}/>
      <Route exact path='/light' component={Light}/>
    </Switch>
  </main>
)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
