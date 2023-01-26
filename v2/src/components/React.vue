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
&lt;template>
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
  </div>
</template>
