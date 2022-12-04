import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useTitle, useToggle } from '../.';

const App = () => {
  // useTitle
  useTitle('Hooks for React!!')

  // useToggle
  const {state, toggleState} = useToggle(true);
  return (
    <div>
      State Value is: {state ? "true": "false"} <button onClick={() => toggleState()}>Toggle</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
