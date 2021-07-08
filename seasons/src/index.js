import React from 'react';
import ReactDOM from 'react-dom';

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
  constructor(props) {
    super(props);

    // this is the state object
    this.state = { lat: null };
  }

  // React says we are required to define render!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      // success callback
      (position) => console.log(position),
      // failure callback
      (err) => console.log(err)
    );

    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))