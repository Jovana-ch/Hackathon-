import React, { Component } from 'react';

export default class NotFound extends Component {
  constructor(props) {
    super(props);
  };

  render() {

    return (
      <div className="container">
        <div className="row" style={{ marginTop: 15 }}>
          <h5 className="title col">
            Página no disponible.
          </h5>
        </div>
      </div>
    );
  };
};
