import React from 'react';

// interfaces don't show in your compiled code

// ----- proper method -----
// - define props in the interface
// - pass them into the component
// interface Warrior { money?: number }

interface UserMessage {
  name: string;
  message: string;
}

const Message = (props: UserMessage): any => {
  return (
    <p>
      {props.name}, {props.message}
    </p>
  );
};

export default Message;
