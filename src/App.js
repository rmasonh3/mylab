import React from "react";
import './App.css';

function App() {
  const [toggle, setToggle] = React.useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  }
  // use useEffect hook to change title
  React.useEffect(() => {
      document.title = toggle ? "Welcome to Little Lemon" : "Usine the useEffect hook"
  });
  return (
      <div>
        <h1>USing the useEffect hook</h1>
        <button onClick={clickHandler}>
          Toggle Message
        </button>
        {toggle && <h2>Welcome to Little Lemon</h2>}
      </div>
  )
}

export default App;
