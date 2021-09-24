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

// ----- HOCs -----
// - don't change the HOC once in use
// - <WrappedComponent injectedProp={injectedProp} {...passThroughProps} />
// - don't use HOCs inside of a render method (can impact performance)
// - HOCs are useful when an application grows

export default messageHoc;
