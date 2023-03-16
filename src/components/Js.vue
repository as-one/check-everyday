<template>
  <div class="container content">
    <h2>Basics</h2>

    <div class="row">
      <div class="col-sm-12">
        <h3>Fundamentals</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <h4>Developer Console</h4>
            <pre class="pre">
Command + Option + I
console.log();
debugger;
alert();
            </pre>

            <h4>Variables</h4>
            <pre class="pre">
const
let   // block scope
var   // function scope
            </pre>

            <h4>Data Types</h4>
            <pre class="pre">
string    // "" '' ``
number
boolean   // true || false
array     // []
object    // {}
            </pre>

            <h4>Type Conversions</h4>
            <pre class="pre">
Number()    // to number
String()    // to string
Boolean()   // to boolean
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Comparisons</h4>
            <pre class="pre">
==
&lt;=
&gt;=
!=    // different
&amp;&amp;    // and
||    // or
            </pre>

            <h4>Conditional</h4>
            <pre class="pre">
if () {
} else if () {
} else {
}

let name = conditional ? true : false;
            </pre>

            <h4>Logical Operators</h4>
            <pre class="pre">
+
-
*	// multiplication
/	// division
++	// +1
--	// -1
            </pre>

            <h4>Functions</h4>
            <pre class="pre">
function name() {}
let name = function() {}
let name = () =&gt; {}       // arrow function
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Loop</h4>
            <pre class="pre">
switch {
  case 1:
    break;
  case 2:
    break;
  default:
    break;
}

const length = 20;
for (let i = 0; i &lt; length; i++) {
}
            </pre>

            <h4>Loop Arrays</h4>
            <pre>
[1,2,3].forEach((el, i) =&gt; {
  console.log(el, i);
});

[1,2,3].map(el => {})        // new map
[1,2,3].reduce((prev,next) => prev+next, 10) // 16
[1,2,3].find(el => el > 1)   // 2
[1,2,3].filter(el => el > 1) // [2, 3]
[1,2,3].every(el => el > 1)  // false
[1,2,3].some(el => el > 1)   // true
[1,2,3].indexOf(1)           // 0
            </pre>
            <a target="_blank" href="https://www.w3schools.com/js/js_array_iteration.asp">W3Schools' JS Array Iteration</a>

            <h4>Loop Objects</h4>
            <pre>
const obj = {a: 1, b: 2, c: 3};
for (let o in obj) {
    const key = o; // a, b, c
    const value = obj[o]; // 1, 2, 3
}
            </pre>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-4">
        <h3>Code Quality</h3>
        <div class="row">
          <div class="col-sm-12">
            <h4>Coding Style</h4>
            <a class="link" target="_blank" href="https://javascript.info/coding-style">JS Info's Coding Style</a>
            <a class="link" target="_blank" href="https://eslint.org/">ESLint</a>
            <a class="link" target="_blank" href="https://prettier.io/">Prettier</a>

            <h4>Comments</h4>
            <pre class="pre">
// Single line

/*
Block
*/
            </pre>

            <h3>Classes</h3>
            <pre class="pre">
class Example {
  // 1. let const
  // 2. functions
  // 3. render() || init()
}
            </pre>

            <h3>Modules</h3>
            <pre class="pre">
// index.js
import Logo from './logo.js';

// logo.js
export default Logo;
            </pre>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-4">
        <h3>Data Types</h3>
        <div class="row">
          <div class="col-sm-12">
            <h4>Array</h4>
            <pre class="pre">
let newArray = ["one", "two"];
            </pre>

            <h4>Objects</h4>
            <div class="row">
              <div class="col-sm-12">
                <h4></h4>
                <pre class="pre">
let newObject = {
  key: "value",
  key2: "value2"
};
            </pre>
              </div>
            </div>

            <h4>JSON</h4>
            <pre class="pre">
{
  "key": "value",
  "key2": "value2"
}
            </pre>

            <h4>Date</h4>
            <pre class="pre">
let date = new Date();
            </pre>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-4">


        <h3>Promises</h3>
        <div class="row">
          <div class="col-sm-12">

            <h4>then</h4>
            <pre class="pre">
function runPromise(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('runPromise');
    }, 1000);
  })
}
runPromise().then(console.log);
            </pre>

            <h4>async/await</h4>
            <pre class="pre">
async function runNewPromise() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('runNewPromise');
    }, 2000);
})

  let response = await promise;
  console.log(response);
}
runNewPromise();

// shortest Promise ever
await (new Promise((res) => res("ok"))) // ok
            </pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Browser</h2>

    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <h3>Parent &amp; Children</h3>
        <div class="row">
          <div class="col-sm-12">
            <pre class="pre">
let parent = document.querySelector('.parent'),       // get parent
els = document.querySelectorAll('.parent .el'),       // get all children
el = document.querySelector('.parent .el'),           // get one child
newEl = document.createElement('div');                // create element
            </pre>
          </div>
        </div>

        <h3>Events</h3>
        <div class="row">
          <div class="col-sm-12">
            <pre class="pre">
document.addEventListener('DOMContentLoaded', () =&gt; {});  // ready
el.addEventListener('click', () =&gt; {});                   // on
el.removeEventListener();                                    // off Check MDN
window.addEventListener("resize", () =&gt; {});              // on resize
            </pre>
          </div>
        </div>

        <h3>Elements</h3>
        <div class="row">
          <div class="col-sm-12">
            <h4>Create</h4>
            <pre class="pre">
document.createElement('div');                  // create
el.cloneNode(true|false);                       // clone
el.before(newEl);                               // prev sibling / before()
el.prepend(newEl);                              // first child / prepend()
el.append(newEl);                               // last child / append()
el.after(newEl);                                // next sibling / after()
el.replaceWith(newEl);                          // replace all
// el.insertAdjacentHTML('', newEl);            // Check MDN
            </pre>

            <h4>Retrieve</h4>
            <pre class="pre">
document.querySelector('.className');           // get element
document.querySelectorAll('.className');        // get elements
el.querySelectorAll('.className');              // get children by selector
el.closest('.className');                       // get closest parent by selector

el.parentElement;                               // get parent
el.children;                                    // get children
el.firstElementChild;                           // get first child
el.lastElementChild;                            // get last child
el.previousElementSibling;                      // get previous sibling
el.nextElementSibling;                          // get next sibling

el.forEach((item, index, array) =&gt; {});         // foreach (Array)
            </pre>

            <h4>Delete</h4>
            <pre class="pre">
el.remove();                                    // remove itself
el.innerHTML = '';                              // remove content
            </pre>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-6">
        <h3>Attributes</h3>
        <div class="row">
          <div class="col-sm-12">
            <h4>Class</h4>
            <pre class="pre">
el.className;                                   // get class name
el.classList.add('className');                  // add class
el.classList.remove('className');               // remove class
el.classList.toggle('className');               // toggle class
            </pre>

            <h4>Style</h4>
            <pre class="pre">
getComputedStyle(el)['width'];                  // get any style post-rendering

el.style.borderWidth = '10px';                  // set style
el.style.borderWidth;                           // get style

el.setAttribute('attr', 'value');               // set attributes
el.getAttribute('attr');                        // get attributes
el.removeAttribute('attr');                     // remove attributes
            </pre>

            <h4>Position, width, and height</h4>
            <pre class="pre">
el.getBoundingClientRect();                     // get all positions
el.offsetTop; el.offsetLeft;                    // get position top and left

el.style.width = '100px';                       // set width
el.clientWidth;                                 // get width

el.style.height = '100px';                      // set height
el.clientHeight;                                // get height

window.scrollX;                                 // pixels scrolled in X axis
window.scrollY;                                 // pixels scrolled in Y axis

document.body.clientWidth;                      // window width (for resizing)
document.body.clientHeight;                     // window height
            </pre>

            <h4>Content</h4>
            <pre class="pre">
el.outerHTML = '&lt;div&gt;&lt;/&lt;div&gt;';                  // set HTML
el.outerHTML;                                   // get HTML

el.innerHTML = 'Content';                       // set content of HTML
el.innerHTML;                                   // get content of HTML
            </pre>

            <h4>Returns boolean</h4>
            <pre class="pre">
el.classList.contains('className');             // has class
el.filter(() =&gt; {});                            // filter
el !== child &amp;&amp; el.contains(child);             // contains
!!newMe.querySelector('.className');            // contains selector
el === newEl;                                   // matches
            </pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Additional</h2>

    <div class="row">
      <div class="col-sm-12">
        <h3>General</h3>

        <div class="row">
          <div class="col-sm-12 col-lg-6">
            <h4>Nomenclature</h4>
            <pre class="pre">
DOM = Document Object Model
            </pre>
          </div>

          <div class="col-sm-12 col-lg-6">
            <h4>UI Events</h4>
            <pre class="pre">
Mouse: click, scroll, mouseenter, mouseleave
Keyboard: keydown, keyup
Form: focus, blur, change
            </pre>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <h3>Storing data</h3>
        <div class="row">
          <div class="col-sm-12">
            <h4>Cookie - Older approach</h4>
            <pre class="pre">
C: setCookie(key, value)
R: getCookie(key)
U: setCookie(key, value)
D: deleteCookie(key)
            </pre>
            <a target="_blank" href="https://javascript.info/cookie">JS Info Cookie's Functions</a>

            <h4>Local Storage - Newer approach</h4>
            <pre class="pre">
C: localStorage.setItem('key', 'value')
R: localStorage.getItem('key')
U: localStorage.setItem('key', 'value')
D: localStorage.removeItem('key')
            </pre>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-lg-6">
        <h3>Misc</h3>
        <div class="row">
          <div class="col-sm-12">
            <h4>Extra functions</h4>
            <pre class="pre">
let fetchData = fetch(url, options);            // Fetching
JSON.stringify({});                             // JSON to string
JSON.parse('string');                           // JSON string to object
el.slice(0, 5);                                 // slice
el.trim();                                      // trim
Object.values(els).indexOf(el);                 // index of
Array.isArray(el);                              // is array
Date.now();                                     // now
typeof el;                                      // type
Math.ceil(Math.random() * 10);                  // random between 0 and 10

el.style.display = 'block';                     // show tag
el.style.display = 'none';                      // hide tag
            </pre>
          </div>
        </div>
      </div>

      <h2>Fetching</h2>

      <div class="col-sm-12 col-lg-6">
        <h3>fetch()</h3>
        <pre class="pre">
const fetchCatData = async () => {
  const API_URL = 'https://localhost/';

  try {
    const response = await fetch(API_URL);
    const date = await response.json();
  } catch (error) {
    console.log(error);
  }
}

fetchCatData();
            </pre>
      </div>

      <div class="col-sm-12 col-lg-6">
        <h3>Axios RESTful</h3>
        <pre class="pre">
import axios from "axios";

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
  });
};
          </pre>
      </div>
    </div>
  </div>
</template>
