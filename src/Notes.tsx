import React from 'react';

function Notes() {
  // ----- basic types -----
  //   let firstValue: string = 'Manny';
  //   let firstValue: number = 22;
  //   let firstValue: boolean = false;
  //   let firstValue: number[] = [2, 4, 23];
  let firstValue: Array<string> = ['2', '4', 'jake'];

  // ----- tuple -----
  let aTuple: [string, number] = ['john', 123];

  // ----- enum -----
  // enum Codes {first, second} // initialize later
  enum Codes {
    first = 1,
    second = 2,
  }

  // ----- any -----
  let firstName: any = 'Elijah';

  // ----- void -----
  const warning = (): void => {
    console.log('Warning');
  };

  return (
    <div>
      <p>
        {/* The value {firstValue} is of {typeof firstValue} type! */}
        {/* The value {aTuple[0]} is of {typeof aTuple[0]} type! */}
        {/* The value {firstName} is of {typeof firstName} type! */}
      </p>
    </div>
  );
}

export default Notes;
