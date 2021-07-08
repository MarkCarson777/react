import './SeasonDisplay.css';
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// functional based component
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     success callback
//     (position) => console.log(position),
//     failure callback
//     (err) => console.log(err)
//   );
//   return <div>Latitude: </div>;
// };

// class based component
class App extends React.Component {
//   constructor(props) {
//     // constructor requires super
//     super(props);
// 
//     // this is the state object
//     // this is the only time we do direct assignment to this.state
//     this.state = { lat: null, errorMessage: '' };
//   }
  
  // alternative way to initialize state
  state = { lat: null, errorMessage: '' };
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // success callback
      position => this.setState({ lat: position.coords.latitude }),
      // failure callback
      err => this.setState({ errorMessage: err.message })
    );
  }

  // React says we are required to define render!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))