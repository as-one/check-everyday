<template>
  <div class="container content">
    <h2>Basics</h2>

    <div class="row">
      <div class="col-sm-12 col-md-4">
        <h3>Components</h3>

        <h4>Props</h4>
        <pre class="pre">
&lt;Welcome name="Julie" />
&lt;Welcome {...props} />
        </pre>

        <h4>Component as Function</h4>
        <pre class="pre">
function Welcome(props) {
  return (
    &lt;h1>Hello, {props.name}&lt;/h1>
  );
}
        </pre>

        <h4>Component as Class</h4>
        <pre class="pre">
class Welcome extends React.Component {
  render() {
    return &lt;h1>Hello, {this.props.name}&lt;/h1>;
  }
}
         </pre>

         <h4>Component as Class with TypeScript</h4>
         <pre class="pre">
type Props = { name: string };
type State = { count: number };
class Welcome extends React.Component&lt;Props, State> {
  public state: State = { count: 0 }
  render() {
    return &lt;h1>Hello, {this.props.name}&lt;/h1>;
  }
}
         </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h3>Sharing State</h3>
        <h4>Top Down</h4>
        <h5>Grandpa to Dad (props)</h5>
        <pre class="pre">
// Grandpa.jsx

import Dad from './Dad.jsx';

const Grandpa = () => {
  return (
    &lt;Dad data={ {test: 123}} />
  );
};

export default Grandpa;

=============

// Dad.jsx

const Dad = (props) => {
  console.log(props.data); // {test: 123}
};

export default Dad;
            </pre>

        <h5>Grandpa to Kid (Context API)</h5>
        <pre>
// Grandpa.jsx

import Dad from './Dad.jsx';
export const DataContext = React.createContext();

const Grandpa = () => {
  const data = {test: 123};
  return (
    &lt;DataContext.Provider value={data}>
      &lt;Dad />
    &lt;/DataContext.Provider>
  );
};

export default Grandpa;

=============

// Dad.jsx

import Kid from './Kid.jsx';

const Dad = () => {
  return &lt;Kid />;
};

export default Dad;

=============

// Kid.jsx

import React, { useContext } from 'react';
import { DataContext } from './Grandpa';

const Kid = () => {
  const data = useContext(DataContext);
  return (
    &lt;div>
      The data received is: {data.test}
      // {test: 123}
    &lt;/div>
  );
};

export default Kid;
            </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h3>Sharing State</h3>
        <h4>Bottom Up</h4>
        <h5>Dad to Grandpa (callback props)</h5>
        <pre class="pre">
// Grandpa.jsx

import Dad from './Dad.jsx';

const Grandpa = () => {
  const handleData = (data) => {
    console.log(data);
  }
  return (
    &lt;Dad grandpaHandleData={handleData} />
  );
};

export default Grandpa;

=============

const Dad = ({ grandpaHandleData }) => {
  const handleClick = () => {
    const data = "Hello from child";
    grandpaHandleData(data);
  }
  return (
    &lt;button onClick={handleClick}>Send data to parent&lt;/button>
  );
};

export default Dad;
            </pre>

        <h5>Kid to Grandpa (Context API)</h5>
        <pre>
// Grandpa.jsx

import React, { Component } from "react";
import Dad from './Dad.jsx';

export const  MyContext = React.createContext();

class Grandpa extends Component {
  state = {
    data: { message: "Hello from Grandpa" }
  };
  handleData = (newData) => {
    this.setState({ data: newData });
    console.log(newData.message);
  };
  render() {
    return (
      &lt;MyContext.Provider
          value={ {
            handleData: this.handleData
          }}
      >
        &lt;Dad />
        &lt;p>{this.state.data.message}&lt;/p>
      &lt;/MyContext.Provider>
    );
  }
}

export default Grandpa;

=============
// Dad.js

import React, { Component } from "react";
import Kid from "./Kid";

class Dad extends Component {
  render() {
    return &lt;Kid />;
  }
}

export default Dad;

=============
// Kid.jsx

import React, { Component } from "react";
import { MyContext } from "./Grandpa";

class Kid extends Component {
  render() {
    return (
      &lt;MyContext.Consumer>
        {({ handleData }) => (
          &lt;button onClick={() => handleData({ message: "Hello from Kid" })}>
            Handle Data
        &lt;/button>
        )}
      &lt;/MyContext.Consumer>
    );
  }
}

export default Kid;
            </pre>
      </div>

    </div>

    <div class="row">
      <h3>Events Handlers</h3>
      <div class="col-sm-12 col-md-4">
        <h4>Method Handlers</h4>
        <h5>Function</h5>
        <pre class="pre">
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    &lt;form onSubmit={handleSubmit}>
      &lt;button type="submit">Submit&lt;/button>
    &lt;/form>
  );
}
            </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>Method Handlers</h4>

        <h5>Class</h5>
        <pre class="pre">
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      &lt;button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      &lt;/button>
    );
  }
}
            </pre>

        <h5>Class - Arrow Function</h5>
        <pre class="pre">
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      &lt;button onClick={() => this.handleClick()}>
        Click me
      &lt;/button>
    );
  }
}
            </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>Passing Arguments to Event Handlers</h4>
        <pre class="pre">
&lt;button onClick={(e) => this.deleteRow(id, e)}>Delete Row&lt;/button>
        </pre>
        <h5>Or</h5>
        <pre class="pre">
&lt;button onClick={this.deleteRow.bind(this, id)}>Delete Row&lt;/button>
        </pre>
      </div>

    </div>

    <div class="row">
      <h3>Conditional Rendering</h3>
      <div class="col-sm-12 col-md-4">
        <h4>Component as Function</h4>
        <pre class="pre">
function UserGreeting(props) {
  return &lt;h1>Welcome back!&lt;/h1>;
}

function GuestGreeting(props) {
  return &lt;h1>Please sign up.&lt;/h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return &lt;UserGreeting />;
  }
  return &lt;GuestGreeting />;
}

&lt;Greeting isLoggedIn={false} />
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>Component as Class</h4>
        <pre class="pre">
class LoginControl extends React.Component {
  render() {
    let button;

    if (this.props.isLoggedIn) {
      button = &lt;LogoutButton />;
    } else {
      button = &lt;LoginButton />;
    }

    return button;
  }
}

&lt;LoginControl isLoggedIn={false} />
            </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>JSX</h4>
        <pre class="pre">
return (
  &lt;>
    {count && &lt;h1>{count}&lt;/h1>}
  &lt;/>
);
        </pre>
        <h5>Or</h5>
        <pre class="pre">
return (
  &lt;>
    {unreadMessages.length > 0 &&
        &lt;span>{unreadMessages.length} unread messages.&lt;/span>
    }
  &lt;/>
);
        </pre>
        <h5>Or</h5>
        <pre class="pre">
return (
  &lt;>
    The user is {isLoggedIn ? 'currently' : 'not'} logged in.
  &lt;/>
);
        </pre>
        <h5>Or</h5>
        <pre class="pre">
return (
  &lt;>
    {isLoggedIn
      ? &lt;LogoutButton />
      : &lt;LoginButton />
    }
  &lt;/>
);
            </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>Guard clause for rendering</h4>
        <pre class="pre">
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    &lt;div>Warning!&lt;/div>
  );
}
            </pre>
      </div>
    </div>

    <div class="row">
      <h3>List Rendering</h3>
      <div class="col-sm-12 col-md-4">
        <h4>JS loop builds HTML</h4>
        <pre class="pre">
function List(props) {
  const listItems = props.people.map(person =>
      &lt;li key={person.id}>
        {person.name}
      &lt;/li>
  );
  return &lt;ul>{listItems}&lt;/ul>;
}
            </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>JS loop builds Component</h4>
        <pre class="pre">
function ListItem(props) {
  return &lt;li>{props.name}&lt;/li>;
}

function List(props) {
  const listItems = props.people.map(person =>
    &lt;ListItem key={person.id} name={person.name} />
  );
  return &lt;ul>{listItems}&lt;/ul>;
}
            </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>JSX loop builds Component</h4>
        <pre class="pre">
function ListItem(props) {
  return &lt;li>{props.name}&lt;/li>;
}

function List() {
  return (
    &lt;ul>
      {people.map(person =>
        &lt;ListItem key={person.id} name={person.name} />
      )}
    &lt;/ul>
  );
}
            </pre>
      </div>
    </div>

    <div class="row">
      <h3>Hooks</h3>

      <div class="col-sm-12 col-md-4">
        <h4>useState()</h4>
        <h5>State</h5>
        <pre class="pre">
import { useState } from 'react';

function App() {
  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    &lt;>
      &lt;button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      &lt;/button>
      {showMore && &lt;p>Description&lt;/p>}
    &lt;/>
  );
}
        </pre>

        <h4>Multiple useState()</h4>
        <pre class="pre">
function MultipleStates() {
  const [a, setA] = useState(42);
  const [b, setB] = useState('ba');
  const [c, setC] = useState([{ id: 1 }]);
}
        </pre>

        <h4>Sharing State Between Components</h4>
        <pre class="pre">
import { useState } from 'react';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    &lt;Panel onShow={() => setActiveIndex(0)} />
  );
}

function Panel({ onShow }) {
    return (
      &lt;button onClick={onShow}>
        Show
      &lt;/button>
    );
}
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>useEffect()</h4>
        <h5>Lifecycle</h5>
        <pre class="pre">
import { useEffect } from 'react';

function VideoPlayer({ isPlaying }) {
  useEffect(() => {
    if (isPlaying) {
      console.log('Playing');
    } else {
      console.log('Paused');
    }
  }, [isPlaying]);

  return &lt;div>Video&lt;/div>;
}
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>useContext()</h4>
        <h5>Store</h5>
        <pre class="pre">
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

function Main() {
  const [theme, setTheme] = useState('light');

  return (
    &lt;ThemeContext.Provider value={theme}>
      &lt;input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={(e) => {
          setTheme(e.target.checked ? 'dark' : 'light')
        }}
      />
    &lt;/ThemeContext.Provider>
  )
}

function Panel() {
  const theme = useContext(ThemeContext);
  return (
    &lt;div className={`panel-${theme}`}>&lt;/div>
  )
}
        </pre>
      </div>
    </div>

    <div class="row">
      <h3>Routing</h3>
      <div class="col-sm-12 col-md-6">
        <h4>React Router</h4>
        <pre class="pre">
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function Nav() {
  return (
    &lt;nav>
      &lt;ul>
        &lt;Link to="/">
          &lt;li>Home&lt;/li>
        &lt;/Link>
        &lt;Link to="/about">
          &lt;li>About&lt;/li>
        &lt;/Link>
      &lt;/ul>
    &lt;/nav>
  );
}

function Home() {
  return (
    &lt;h1>Home&lt;/h1>
  );
}

function About() {
  return (
    &lt;h1>About&lt;/h1>
  );
}

function Http404() {
  return (
    &lt;h1>404&lt;/h1>
  );
}

function App() {
  return (
    &lt;BrowserRouter>
      &lt;div className="App">
        &lt;Nav />
        &lt;Switch>
          &lt;Route path="/" exact component={Home} />
          &lt;Route path="/about" component={About} />
          &lt;Route>
            &lt;Http404 />
          &lt;/Route>
        &lt;/Switch>
      &lt;/div>
    &lt;/BrowserRouter>
  );
}

export default App;
            </pre>
      </div>
    </div>
  </div>
</template>
