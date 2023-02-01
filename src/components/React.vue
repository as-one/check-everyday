<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2>Basics</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h3>Render Props</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <h4>Function and Class component</h4>
            <pre class="pre">
Doc.jsx
function Welcome(props) {
  return &lt;h1>Hello, {props.name}&lt;/h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = &lt;Welcome name="Julie" />;root.render(element);

OR

Doc.jsx
class Welcome extends React.Component {
  render() {
    return &lt;h1>Hello, {this.props.name}&lt;/h1>;
  }
}

=========================================
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    &lt;div className="card">
      &lt;Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    &lt;/div>
  );
}

OR

function Profile(props) {
  return (
    &lt;div className="card">
      &lt;Avatar {...props} />
    &lt;/div>
  );
}

=========================================
Avatar.js
import { getImageUrl } from './utils.js';

export default function Avatar({ person, size }) {
  return (
    &lt;img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

=========================================
App.js
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    &lt;div className="card">
      {children}
    &lt;/div>
  );
}

export default function Profile() {
  return (
    &lt;Card>
      &lt;Avatar
        size={100}
<!--        person={{-->
<!--        name: 'Katsuko Saruhashi',-->
<!--        imageId: 'YfeOqp2'-->
<!--        }}-->
        person={
        name: 'Katsuko Saruhashi',
        imageId: 'YfeOqp2'
        }
      />
    &lt;/Card>
  );
}
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Top Down</h4>
            <h4>Grandpa -> Dad - Uses Props</h4>
            <pre class="pre">
// Grandpa.jsx
import React from 'react';
import Dad from './Dad.jsx';

const Grandpa = () => {
  return (
<!--    &lt;Dad data={{ test: 123 }} this is right/>-->
    &lt;Dad data={ test: 123 } />
  );
};

export default Grandpa;

============================================
// Dad.js
import React from 'react';

const Dad = (props) => {
  console.log(props.data); // {test: 123}
};

export default Dad;
            </pre>

            <h4>Grandpa -> Kid - Uses Context API</h4>
            <pre>
// Grandpa.jsx
import React from 'react';
import Dad from './Dad.jsx';

export const DataContext = React.createContext();

const Grandpa = () => {
  const data = { test: 123 };
  return (
    &lt;DataContext.Provider value={data}>
      &lt;Dad />
    &lt;/DataContext.Provider>
  );
};

export default Grandpa;

============================================
// Dad.js
import React from 'react';
import { DataContext } from './Grandpa';
import Kid from './Kid.jsx';

const Dad = () => {
  return (
    &lt;Kid />
  );
};

export default Dad;

============================================
// Kid.jsx
import React, { useContext } from 'react';
import { DataContext } from './Grandpa';

const Kid = () => {
  const data = useContext(DataContext);
  return (
    &lt;div>
      The data received is: {data.test}
    &lt;/div>
  );
};

export default Kid;
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Bottom Up</h4>
            <h4>Dad -> Grandpa - Callback Props</h4>
            <pre class="pre">
// Grandpa.jsx
import React from 'react';
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

============================================
// Dad.js
import React from 'react';

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

            <h4>Kid -> Grandpa</h4>
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
<!--          value={{-->
<!--          handleData: this.handleData-->
<!--          }}-->
        value={
            handleData: this.handleData
        }
      >
        &lt;Dad />
        &lt;p>{this.state.data.message}&lt;/p>
      &lt;/MyContext.Provider>
    );
  }
}

export default Grandpa;

============================================
// Dad.js
import React, { Component } from "react";
import Kid from "./Kid";

class Dad extends Component {
  render() {
    return &lt;Kid />;
  }
}

export default Dad;

============================================
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
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <h3>Events Handlers</h3>
          <div class="col-sm-12 col-md-4">
            <h4>Method Handlers</h4>
            <pre class="pre">
&lt;button onClick={activateLasers}>
  Activate Lasers
&lt;/button>

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
            <h4>Method on the Class</h4>
            <pre class="pre">
Doc.jsx
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(&lt;Toggle />);
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Public Class Fields Syntax</h4>
            <pre class="pre">
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  handleClick = () => {
    console.log('this is:', this);
  };

  render() {
    return (
      &lt;button onClick={this.handleClick}>
        Click me
      &lt;/button>
    );
  }
}
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Arrow Function</h4>
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

&lt;button onClick={this.deleteRow.bind(this, id)}>Delete Row&lt;/button>

The above two lines are equivalent, and use arrow functions and Function.prototype.bind respectively.
            </pre>
          </div>

        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <h3>Conditional Rendering</h3>
          <div class="col-sm-12 col-md-4">
            <h4>if or The Conditional Operator</h4>
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

const root = ReactDOM.createRoot(document.getElementById('root'));
// Try changing to isLoggedIn={true}:
root.render(&lt;Greeting isLoggedIn={false} />);

This example renders a different greeting depending on the value of isLoggedIn prop.
        </pre>

            <h4>Conditionally returning</h4>
            <pre class="pre">
function Item({ name, isPacked }) {
  if (isPacked) {
    return &lt;li className="item">{name} ✔&lt;/li>;
  }
  return &lt;li className="item">{name}&lt;/li>;
}

export default function PackingList() {
  return (
    &lt;section>
      &lt;h1>Sally Ride's Packing List&lt;/h1>
      &lt;ul>
        &lt;Item
          isPacked={true}
          name="Space suit"
        />
        &lt;Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        &lt;Item
          isPacked={false}
          name="Photo of Tam"
        />
      &lt;/ul>
    &lt;/section>
  );
}
        </pre>

            <h4>Conditionally returning nothing with null</h4>
            <pre class="pre">
function Item({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return &lt;li className="item">{name}&lt;/li>;
}

export default function PackingList() {
  return (
    &lt;section>
      &lt;h1>Sally Ride's Packing List&lt;/h1>
      &lt;ul>
        &lt;Item
          isPacked={true}
          name="Space suit"
        />
        &lt;Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        &lt;Item
          isPacked={false}
          name="Photo of Tam"
        />
      &lt;/ul>
    &lt;/section>
  );
}
        </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Element Variables</h4>
            <pre class="pre">
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = &lt;LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = &lt;LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      &lt;div>
        &lt;Greeting isLoggedIn={isLoggedIn} />
        {button}
      &lt;/div>
    );
  }
}

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

function LoginButton(props) {
  return (
    &lt;button onClick={props.onClick}>
      Login
    &lt;/button>
  );
}

function LogoutButton(props) {
  return (
    &lt;button onClick={props.onClick}>
      Logout
    &lt;/button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(&lt;LoginControl />);
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Inline If Logical && Operator</h4>
            <pre class="pre">
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    &lt;div>
      &lt;h1>Hello!&lt;/h1>
      {unreadMessages.length > 0 &&
        &lt;h2>
          You have {unreadMessages.length} unread messages.
        &lt;/h2>
      }
    &lt;/div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(&lt;Mailbox unreadMessages={messages} />);

===============================
function Item({ name, isPacked }) {
  return (
    &lt;li className="item">
      {name} {isPacked && '✔'}
    &lt;/li>
  );
}

export default function PackingList() {
  return (
    &lt;section>
      &lt;h1>Sally Ride's Packing List&lt;/h1>
      &lt;ul>
        &lt;Item
          isPacked={true}
          name="Space suit"
        />
        &lt;Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        &lt;Item
          isPacked={false}
          name="Photo of Tam"
        />
      &lt;/ul>
    &lt;/section>
  );
}

            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Inline if-else with Conditional Operator</h4>
            <pre class="pre">
condition ? true : false

render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    &lt;div>
      The user is &lt;b>{isLoggedIn ? 'currently' : 'not'}&lt;/b> logged in.
    &lt;/div>
  );
}

OR

render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    &lt;div>
      {isLoggedIn
        ? &lt;LogoutButton onClick={this.handleLogoutClick} />
        : &lt;LoginButton onClick={this.handleLoginClick} />
      }
    &lt;/div>
    );
}
==============================================
return (
  &lt;li className="item">
    {isPacked ? name + ' ✔' : name}
  &lt;/li>
);

==============================================
function Item({ name, isPacked }) {
  return (
    &lt;li className="item">
      {isPacked ? (
        &lt;del>
          {name + ' ✔'}
        &lt;/del>
      ) : (
        name
      )}
    &lt;/li>
  );
}

export default function PackingList() {
  return (
    &lt;section>
    &lt;h1>Sally Ride's Packing List&lt;/h1>
    &lt;ul>
      &lt;Item
        isPacked={true}
        name="Space suit"
      />
      &lt;Item
        isPacked={true}
        name="Helmet with a golden leaf"
      />
      &lt;Item
        isPacked={false}
        name="Photo of Tam"
      />
    &lt;/ul>
    &lt;/section>
  );
}

==============================================
Render h1
render() {
  const count = 0;
  return (
    &lt;div>
      {count && &lt;h1>Messages: {count}&lt;/h1>}
    &lt;/div>
  );
}
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Preventing Component from Rendering</h4>
            <pre class="pre">
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    &lt;div className="warning">
      Warning!
    &lt;/div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      &lt;div>
        &lt;WarningBanner warn={this.state.showWarning} />
        &lt;button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        &lt;/button>
      &lt;/div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(&lt;Page />);
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Conditionally including JSX</h4>
            <pre class="pre">
if (isPacked) {
  return &lt;li className="item">{name} ✔&lt;/li>;
}
return &lt;li className="item">{name}&lt;/li>;

Both of the conditional branches return &lt;li className="item">...&lt;/li>:
            </pre>

            <h4>Conditionally assigning JSX to a variable</h4>
            <pre class="pre">
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = (
      &lt;del>
        {name + " ✔"}
      &lt;/del>
    );
  }
  return (
    &lt;li className="item">
      {itemContent}
    &lt;/li>
  );
}

export default function PackingList() {
  return (
    &lt;section>
      &lt;h1>Sally Ride's Packing List&lt;/h1>
      &lt;ul>
        &lt;Item
          isPacked={true}
          name="Space suit"
        />
        &lt;Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        &lt;Item
          isPacked={false}
          name="Photo of Tam"
        />
      &lt;/ul>
    &lt;/section>
  );
}
            </pre>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <h3>List Rendering</h3>
          <div class="col-sm-12 col-md-4">
            <h4>Rendering Multiple Components</h4>
            <pre class="pre">
export const people = [{
  id: 0, // Used in JSX as a key
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1, // Used in JSX as a key
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2, // Used in JSX as a key
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}];

export default function List() {
    const listItems = people.map(person =>
      &lt;li key={person.id}>
        &lt;img
            src={getImageUrl(person)}
            alt={person.name}
        />
        &lt;p>
          &lt;b>{person.name}&lt;/b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
        &lt;/p>
      &lt;/li>
  );
  return &lt;ul>{listItems}&lt;/ul>;
}
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Extracting Components With Keys</h4>
            <pre class="pre">
function ListItem(props) {
  // There is no need to specify the key here:
  return &lt;li>{props.value}&lt;/li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Key should be specified inside the array.
    &lt;ListItem key={number.toString()}
      value={number} />
  );
  return (
    &lt;ul>
      {listItems}
    &lt;/ul>
  );
}

const numbers = [1, 2, 3, 4, 5];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(&lt;NumberList numbers={numbers} />);
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Keys Must Only Be Unique Among Siblings</h4>
            <pre class="pre">
function Blog(props) {
  const sidebar = (
    &lt;ul>
      {props.posts.map((post) =>
        &lt;li key={post.id}>
          {post.title}
        &lt;/li>
      )}
    &lt;/ul>
  );
  const content = props.posts.map((post) =>
    &lt;div key={post.id}>
      &lt;h3>{post.title}&lt;/h3>
      &lt;p>{post.content}&lt;/p>
    &lt;/div>
  );
  return (
    &lt;div>
      {sidebar}
      &lt;hr />
      {content}
    &lt;/div>
  );
}

const content = posts.map((post) =>
  &lt;Post
    key={post.id}
    id={post.id}
    title={post.title} />
);

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(&lt;Blog posts={posts} />);
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Embedding map() in JSX</h4>
            <pre class="pre">
function ListItem(props) {
  return &lt;li>{props.value}&lt;/li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
    &lt;ul>
      {numbers.map((number) =>
        &lt;ListItem key={number.toString()}
                     value={number} />
      )}
    &lt;/ul>
  );
}

const numbers = [1, 2, 3, 4, 5];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(&lt;NumberList numbers={numbers} />);
            </pre>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <h3>Fetching</h3>
          <div class="col-sm-12 col-md-4">
            <h4>fetch()</h4>
            <pre class="pre">
const fetchCatData = async () => {
  const url = 'https://api.thecatapi.com/v1/breeds';
  try {
    const response = await fetch(url);
    const date = await response.json();
    console.log(1, date);
  } catch (error) {
    console.log(error);
  }
}
console.log(2);
fetchCatData();
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Axios RESTfull</h4>
            <pre class="pre">
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost/";

const getIndex = () => {
  return axios.get(API_URL + "contact", { headers: authHeader() });
};

const store = (values) => {
  const { username, email } = values;
  return axios.post(API_URL + "contact/", {
    name: username,
    email
  }, { headers: authHeader() });
};

const update = (values) => {
  const { id, username, email } = values;
  return axios.put(API_URL + "contact/" + id, {
    name: username,
    email
  }, { headers: authHeader() });
};

const destroy = (values) => {
  const { id, email } = values;
  return axios({
    method: 'DELETE',
    url: API_URL + "contact/" + id,
    headers: authHeader(),
    data: { email }
  })
};

export default {
  getIndex,
  store,
  update,
  destroy
};
            </pre>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <h3>Routing</h3>
          <div class="col-sm-12 col-md-4">
            <h4>React Router</h4>
            <pre class="pre">
$ npm i react-router-dom

import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function Nav() {
  return (
    &lt;nav>
      &lt;h1>Logo&lt;/h1>
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
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <h3>Hooks</h3>
          <p>Hooks are functions that let you “hook into” React state and lifecycle features from function components.</p>

          <div class="col-sm-12 col-md-4">
            <h4>State A Component's Memory</h4>
            <p>We call it inside a function component to add some local state to it. React will preserve this state between re-renders.</p>
            <pre class="pre">
App.js
// 1. adding a state variable
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    &lt;>
      &lt;button onClick={handleNextClick}>
        Next
      &lt;/button>
      &lt;h2>
        &lt;i>{sculpture.name} &lt;/i>
        by {sculpture.artist}
      &lt;/h2>
      &lt;h3>
        ({index + 1} of {sculptureList.length})
      &lt;/h3>
      &lt;button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      &lt;/button>
      {showMore && &lt;p>{sculpture.description}&lt;/p>}
      &lt;img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    &lt;/>
  );
}

data.js
export const sculptureList = [{
  name: 'Homenaje a la Neurocirugía',
  artist: 'Marta Colvin Andrade',
  description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
  url: 'https://i.imgur.com/Mx7dA2Y.jpg',
  alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'
}, {
  name: 'Floralis Genérica',
  artist: 'Eduardo Catalano',
  description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
  url: 'https://i.imgur.com/ZF6s192m.jpg',
  alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
}];

===================================
import React, { useState } from 'react';
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    &lt;div>
      // reading state
      &lt;p>You clicked {count} times&lt;/p>
      // updating state
      &lt;button onClick={() => setCount(count + 1)}>
        Click me
      &lt;/button>
    &lt;/div>
  );
}

===================================
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}

=====================================
import { useState } from 'react';

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return &lt;h1>That's right!&lt;/h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    &lt;>
      &lt;h2>City quiz&lt;/h2>
      &lt;p>
        In which city is there a billboard that turns air into drinkable water?
      &lt;/p>
      &lt;form onSubmit={handleSubmit}>
        &lt;textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        &lt;br />
        &lt;button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        &lt;/button>
        {error !== null &&
          &lt;p className="Error">
            {error.message}
          &lt;/p>
        }
      &lt;/form>
    &lt;/>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

=========================================
import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    &lt;>
      &lt;h2>Let’s check you in&lt;/h2>
      &lt;label>
        First name:{' '}
        &lt;input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      &lt;/label>
      &lt;label>
        Last name:{' '}
        &lt;input
          value={lastName}
          onChange={handleLastNameChange}
        />
      &lt;/label>
      &lt;p>
        Your ticket will be issued to: &lt;b>{fullName}&lt;/b>
      &lt;/p>
    &lt;/>
  );
}

========================================
<h4>State is isolated and private</h4>

App.js
import Gallery from './Gallery.js';

export default function Page() {
  return (
    &lt;div className="Page">
      &lt;Gallery />
      &lt;Gallery />
    &lt;/div>
  );
}

Gallery.js
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    &lt;section>
      &lt;button onClick={handleNextClick}>
        Next
      &lt;/button>
      &lt;h2>
        &lt;i>{sculpture.name} &lt;/i>
        by {sculpture.artist}
      &lt;/h2>
      &lt;h3>
        ({index + 1} of {sculptureList.length})
      &lt;/h3>
      &lt;button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      &lt;/button>
      {showMore && &lt;p>{sculpture.description}&lt;/p>}
      &lt;img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    &lt;/section>
  );
}

data.js
export const sculptureList = [{
  name: 'Homenaje a la Neurocirugía',
  artist: 'Marta Colvin Andrade',
  description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
  url: 'https://i.imgur.com/Mx7dA2Y.jpg',
  alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'
}, {
  name: 'Floralis Genérica',
  artist: 'Eduardo Catalano',
  description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
  url: 'https://i.imgur.com/ZF6s192m.jpg',
  alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
}];

=========================================
<h4>Sharing State Between Components</h4>
import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    &lt;>
      &lt;h2>Almaty, Kazakhstan&lt;/h2>
      &lt;Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      &lt;/Panel>
      &lt;Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from &lt;span lang="kk-KZ">алма&lt;/span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild &lt;i lang="la">Malus sieversii&lt;/i> is considered a likely candidate for the ancestor of the modern domestic apple.
      &lt;/Panel>
    &lt;/>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
  }) {
    return (
      &lt;section className="panel">
        &lt;h3>{title}&lt;/h3>
        {isActive ? (
          &lt;p>{children}&lt;/p>
        ) : (
          &lt;button onClick={onShow}>
            Show
          &lt;/button>
        )}
      &lt;/section>
    );
}


=========================================
<h4>Preserving and Resetting State</h4>
import { useState } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    &lt;div>
      &lt;ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      &lt;Chat key={to.email} contact={to} />
    &lt;/div>
  )
}

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];

            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Effect</h4>
            <p>The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.</p>
            <pre class="pre">
Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect.

// 1. declare an Effect
import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  // 2. call at the top leve of your component
  useEffect(() => {
    if (isPlaying) {
      console.log('Calling video.play()');
      ref.current.play();
    } else {
      console.log('Calling video.pause()');
      ref.current.pause();
    }
    // 3. specify the Effect dependencies
  }, [isPlaying]);

  return &lt;video ref={ref} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');
  return (
    &lt;>
      &lt;input value={text} onChange={e => setText(e.target.value)} />
      &lt;button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      &lt;/button>
      &lt;VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    &lt;/>
  );
}

===================================
import React, { useState, useEffect } from 'react';
function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    &lt;div>
      &lt;p>You clicked {count} times&lt;/p>
      &lt;button onClick={() => setCount(count + 1)}>
        Click me
      &lt;/button>
    &lt;/div>
  );
}

===================================
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

===================================
function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  // ...
}

===================================
<h4>Add cleanup</h4>
chat.js
export function createConnection() {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('Connecting...');
    },
    disconnect() {
      console.log('Disconnected.');
    }
  };
}


App.js
import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, []);
  return &lt;h1>Welcome to the chat!&lt;/h1>;
}

            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Context</h4>
            <p>Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. When the nearest &lt;MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider.</p>
            <pre class="pre">
// 1. declare context
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('null');
// 4. specifying a fallback default value
const ThemeContext = createContext('light');

export default function MyApp() {
  // 2. use passing data deeply into the tree
  const [theme, setTheme] = useState('light');
  return (
    &lt;ThemeContext.Provider value={theme}>
      &lt;Form />
        // 3. updating a value via context
        &lt;label>
          &lt;input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light')
          }}
          />
          Use dark mode
      &lt;/label>
    &lt;/ThemeContext.Provider>
    &lt;Button onClick={() => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }}>
      Toggle theme
    &lt;/Button>
  )
}

function Form({ children }) {
  return (
    &lt;Panel title="Welcome">
      &lt;Button>Sign up&lt;/Button>
      &lt;Button>Log in&lt;/Button>
    &lt;/Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    &lt;section className={className}>
      &lt;h1>{title}&lt;/h1>
      {children}
    &lt;/section>
  )
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    &lt;button className={className} onClick={onClick}>
      {children}
    &lt;/button>
  );
}

===========================
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    &lt;ThemeContext.Provider value={themes.dark}>
      &lt;Toolbar />
    &lt;/ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    &lt;div>
      &lt;ThemedButton />
    &lt;/div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
<!--    &lt;button style={{ background: theme.background, color: theme.foreground }}>-->
    &lt;button style={ background: theme.background, color: theme.foreground }>
      I am styled by theme context!
    &lt;/button>
  );
}

===================================
<h4>Optimizing re-renders when passing objects and functions </h4>
<p>You can pass any values via context, including objects and functions.</p>

function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  function login(response) {
    storeCredentials(response.credentials);
    setCurrentUser(response.user);
  }

  return (
<!--    &lt;AuthContext.Provider value={{ currentUser, login }}>-->
    &lt;AuthContext.Provider value={ currentUser, login }>
      &lt;Page />
    &lt;/AuthContext.Provider>
  );
}

OR

import { useCallback, useMemo } from 'react';

function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  const login = useCallback((response) => {
    storeCredentials(response.credentials);
    setCurrentUser(response.user);
  }, []);

  const contextValue = useMemo(() => ({
    currentUser,
    login
  }), [currentUser, login]);

  return (
    &lt;AuthContext.Provider value={contextValue}>
      &lt;Page />
    &lt;/AuthContext.Provider>
  );
}

            </pre>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>
