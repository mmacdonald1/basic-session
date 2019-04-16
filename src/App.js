import { h, Component } from 'preact';
import './App.css';
import Login from './Login'
import Router from 'preact-router';
import SketchFieldDemo from './SketchFieldDemo'

class App extends Component {
  render() {
    return (
      // <SketchFieldDemo />
      <Router>
        <Login path="/" />

      </Router>
    );
  }
}

export default App;
