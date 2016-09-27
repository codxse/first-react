import React from 'react';

const Content = (props) => (
  <div>
    <h1>{props.state.title}</h1>
    <p>{props.state.description}</p>
  </div>
);

export default Content;
