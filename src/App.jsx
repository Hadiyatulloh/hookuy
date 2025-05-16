import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [inputText, setInputText] = useState('');

  function add() {
    setCount(count + 1);
  }

  function remove() {
    setCount(count - 1);
  }

  function hide() {
    setVisible(false);
  }

  function show() {
    setVisible(true);
  }

  return (
    <div>
      <header id="header">
        <h1 className="h1">Counter</h1>
        <div className="counter">
          <button onClick={remove}>-</button>
          <h1 className="variable">{count}</h1>
          <button onClick={add}>+</button>
        </div>
        <hr />
      </header>

      <section id="section">
        <h1>Hidden Component</h1>
        <button onClick={hide}>Hidden</button>
        <button id="left" onClick={show}>Show</button>

        {visible && (
          <>
            <p>Hello my name is marslikbola</p>
            <img src="marsliklar.png" alt="" />
          </>
        )}
      </section>

      <footer id="footer">
        <h1>Input joyi</h1>
        <input
          type="text"
          placeholder="Matn yozing..."
          onChange={(e) => setInputText(e.target.value)}
        />
        <h2>So'z:     {inputText}</h2>
      </footer>
    </div>
  );
}

export default App;
