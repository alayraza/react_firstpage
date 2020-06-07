import React from 'react';
import './App.css';
import './Custom.css';

function Custom({calc}) {
  return (
    <div className="App">
        <header className="App-header">
            <p>
                Hello <strong>Alay!</strong>
            </p>
            <h1>This is Heading Element</h1>
            <h3>Below is Order List</h3>
            <ol>
                <li>Order List Item 1</li>
                <li>Order List Item 2</li>
                <li>Order List Item 3</li>
            </ol>
            <div className="customstyle">
                <h2>I call {calc} from JSX Object <br></br>with custom css</h2>
            </div>
        </header>
    </div>
  );
}

export default Custom;
