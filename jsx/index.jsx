import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'React Biolerplate',
      description: 'Boilerplate for React with Babel support'
    };
  }

  render() {
    return (
      <Content state={this.state} />
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
