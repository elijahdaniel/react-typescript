import React, { Component } from 'react';

const initialState = {
  name: 'Elijah',
  message: 'HOC',
};

type State = Readonly<typeof initialState>;

const messageHoc = (WrappedComponent: any) => {
  class HOC extends Component<{}, State> {
    // - readOnly: items that can only be read once created
    readonly state: State = initialState;

    render() {
      return <WrappedComponent name={this.state.name} message={this.state.message} />;
    }
  }

  return HOC;
};

export default messageHoc;
