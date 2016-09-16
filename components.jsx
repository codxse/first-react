import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    let langs = ["Clojure", "ClojureSript", "JavaScript", "Python"];
    return(
      <div>
        <h1>{"Introduction to ReactJS".toUpperCase()}</h1>
        <p className="main">Here are some awesome langs:</p>
        {langs.map(lang => <li>{lang}</li>)}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('main'));
