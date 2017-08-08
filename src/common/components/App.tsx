import * as React from 'react';

export interface Props {
  children: JSX.Element;
}

export default ({children}: Props) => {
  return (
    <div id="container">
      {children}
    </div>
  );
}
