<template>
  <div class="container content">
    <h2>Basics</h2>

    <div class="row">
      <div class="col-sm-12 col-md-6">
        <h3>Types</h3>

        <h4>unknown & any</h4>
        <pre class="pre">
let varUnknown: unknown;
let varAny: any;
        </pre>

        <h4>string, boolean, number, array</h4>
        <pre class="pre">
let varString: string = "Hello World";
let varBoolean: boolean = true;
let varNumber: number = 10;
let varArray: string[] = ['one', 'two', 'three'];
        </pre>

        <h4>object</h4>
        <pre class="pre">
const object: {[key: string]: any} = {}
object.key = "value";
        </pre>

        <h4>object (+optional, function)</h4>
        <pre class="pre">
let varObject: {
  one: string;
  two?: boolean; // optional
  callback(): void;
} = {
  one: 'one',
  callback: () => { }
};
        </pre>

        <h4>object (+optional) + interface</h4>
        <pre class="pre">
interface IVarObject {
  one: string;
  two?: boolean; // optional
}

const varObject: IVarObject = {
  one: 'one'
};
        </pre>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="row">
          <div class="col-sm-12">
            <h3>Functions</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h4>return void</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <pre class="pre">
function consoleLogMessage(message: any): void {
  console.log(message);
}

consoleLogMessage('Message'); // Message
            </pre>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h4>return not void</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <pre class="pre">
function add(x: number, y: number): number {
  return x + y;
}

add(1, 2); // 3
            </pre>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h4>param as object</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <pre class="pre">
function addFromObject({ x, y }: { x: number; y: number }): number {
  return x + y;
}

addFromObject({ x: 1, y: 2 }); // 3
            </pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Advanced</h2>

    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="row">
          <div class="col-sm-12">
            <h3>Types</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h4>null & undefined</h4>
          </div>
        </div>
        <pre class="pre">
const varNull: null = null;     // useless
const varUndefined: undefined;  // useless
        </pre>

        <div class="row">
          <div class="col-sm-12">
            <h4>unknown & any</h4>
          </div>
        </div>
        <pre class="pre">
const varArray: unknown[] = ['one', true, 3];
const varArray: any[] = ['one', true, 3];
        </pre>
      </div>

      <div class="col-sm-12 col-md-6">
        <div class="row">
          <div class="col-sm-12">
            <h3>Functions</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h4>function is type object</h4>
          </div>
        </div>
        <pre class="pre">
const varFunction: {} = () => {};
        </pre>

        <div class="row">
          <div class="col-sm-12">
            <h4>function with array param</h4>
          </div>
        </div>
        <pre class="pre">
const varFunctionArray = function (varArray: string[]) {
  return varArray;
}

varFunctionArray(['one', 'two', 'three']);
        </pre>

        <div class="row">
          <div class="col-sm-12">
            <h4>function with object param</h4>
          </div>
        </div>
        <pre class="pre">
const varFunctionObject = function (param1: string, param2: {}) { }

varFunctionObject('one', { one: 'one', two: true, three: 3 });
        </pre>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="row">
          <div class="col-sm-12">
            <h3>Classes</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-12">
                <h4>with interface</h4>
              </div>
            </div>
            <pre class="pre">
interface AClass {
  one: string;
  two: boolean;
  three?: number;
}

class aClass implements AClass {
  public one: string = 'one';
  public two: boolean = true;
  private four: string = 'four';
}
            </pre>

            <div class="row">
              <div class="col-sm-12">
                <h4>extends and implements</h4>
              </div>
            </div>
            <pre class="pre">
interface IOldClass {
  zero: number;
}

interface INewClass extends IOldClass {
  one: string;
  two: boolean;
  three?: number;
}

class NewClass implements INewClass {
  zero: number = 0;
  one: string = 'one';
  two: boolean = true;
}
            </pre>

            <div class="row">
              <div class="col-sm-12">
                <h4>hybrid</h4>
              </div>
            </div>
            <pre class="pre">
interface IHybridClass {
  one: string;
  two: {
    twoOne: boolean;
  };
  three(threeOne: string, threeTwo: boolean): number;
  four({ fourOne, fourTwo }: { fourOne: string, fourTwo: boolean }): number;
}

class HybridClass implements IHybridClass {
  one = 'one';

  two = {
    twoOne: true
  };

  three = (threeOne: string, threeTwo: boolean) => {
    return 3;
  };

  testingThree() {
    let three = this.three('one', true);
  }

  four = function ({
    fourOne,
    fourTwo
  }: { fourOne: string, fourTwo: boolean }) {
    console.log(fourOne, fourTwo);
    return 4;
  }

  testingFour() {
    let four = this.four({ fourOne: 'four', fourTwo: true });
  }
}
            </pre>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="row">
          <div class="col-sm-12">
            <h3>Generics</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-12">
                <h4>simple</h4>
              </div>
            </div>
            <pre class="pre">
function identity&lt;T>(arg: T): T {
  return arg;
}

identity(10);
identity&lt;number>(10);
identity('ten');
identity&lt;string>('ten');
            </pre>

            <div class="row">
              <div class="col-sm-12">
                <h4>extends</h4>
              </div>
            </div>
            <pre class="pre">
interface ILoggingIdentity2 {
  length: number;
}

function loggingIdentity2&lt;T extends ILoggingIdentity2>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity2({ length: 1 });
            </pre>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="row">
          <div class="col-sm-12">
            <h3>Enums</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <pre class="pre">
enum TodoState {
  New = 1,
  Active,
  Complete,
  Deleted
}
            </pre>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="row">
          <div class="col-sm-12">
            <h3>Data Types</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <table>
              <tr>
                <td>Literal Union</td>
                <td>'one' | 'two'</td>
              </tr>
              <tr>
                <td>Type Union</td>
                <td>boolean | string</td>
              </tr>
              <tr>
                <td>any</td>
                <td>avoid it</td>
              </tr>
              <tr>
                <td>unknown</td>
                <td>avoid it</td>
              </tr>
              <tr>
                <td>never</td>
                <td>when a function returns an error</td>
              </tr>
              <tr>
                <td>Omit</td>
                <td>
                  <p>Opposite of Pick</p>
                  <pre class="pre">
interface Todo {
  one: string;
  two: string;
}

const todo: Omit&lt;Todo, "one"&gt; = {
  two: "Two"
}
                  </pre>
                </td>
              </tr>
              <tr>
                <td>Pick</td>
                <td>
                  <p>Opposite of Omit</p>
                  <pre class="pre">
interface Todo {
  one: string;
  two: string;
}

const todo: Omit&lt;Todo, "one"&gt; = {
  one: "One"
}
                  </pre>
                </td>
              </tr>
              <tr>
                <td>Partial</td>
                <td>
                  <p>All properties are optional</p>
                  <pre class="pre">
interface Todo {
  one: string;
  two: string;
}

const todo: Partial&lt;Todo&gt; = {}
                  </pre>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>



    <h2>Applied</h2>

    <div class="row">
      <div class="col-sm-12">
        <h3>React Component</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <pre class="pre">
interface IButton {
  text: string;
  color?: string;
  size?: number;
}

function Button({ text, color, size }: IButton) {
  // variables
  // logic
  // return &lt;button>{text}&lt;/button>;
}

export default Button;

&lt;Button text="Click Here" />
&lt;Button text="Click Here" color="purple" size={10} />
        </pre>
      </div>
    </div>
  </div>
</template>
