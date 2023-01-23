<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2>Basics</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="row">
          <div class="col-sm-12">
            <h3>Types</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h4>unknown & any</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="pre">
              let varUnknown: unknown;
              let varAny: any;
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h4>string, boolean, number, array</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="pre">
              let varString: string = "Hello World";
              let varBoolean: boolean = true;
              let varNumber: number = 10;
              let varArray: string[] = ['one', 'two', 'three'];
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h4>object (+optional, function)</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="pre">
              let varObject: {
              one: string;
              two?: boolean; // optional
              callback(): void;
              } = {
              one: 'one',
              callback: () => { }
              };
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h4>object (+optional) + interface</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="pre">
              interface IVarObject {
              one: string;
              two?: boolean; // optional
              }

              let varObject: IVarObject = {
              one: 'one'
              };
            </div>
          </div>
        </div>
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
            <div class="pre">
              function consoleLogMessage(message: any): void {
              console.log(message);
              }

              consoleLogMessage('Message'); // Message
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h4>return not void</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="pre">
              function add(x: number, y: number): number {
              return x + y;
              }

              add(1, 2); // 3
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h4>param as object</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="pre">
              function addFromObject({ x, y }: { x: number; y: number }): number {
              return x + y;
              }

              addFromObject({ x: 1, y: 2 }); // 3
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h2>Advanced</h2>
      </div>
    </div>

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
        <div class="pre">
          let varNull: null = null;     // useless
          let varUndefined: undefined;  // useless
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h4>unknown & any</h4>
          </div>
        </div>
        <div class="pre">
          let varArray: unknown[] = ['one', true, 3];
          let varArray: any[] = ['one', true, 3];
        </div>
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
        <div class="pre">
          let varFunction: {} = () => { };
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h4>function with array param</h4>
          </div>
        </div>
        <div class="pre">
          let varFunctionArray = function (varArray: string[]) {
          return varArray;
          }

          varFunctionArray(['one', 'two', 'three']);
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h4>function with object param</h4>
          </div>
        </div>
        <div class="pre">
          let varFunctionObject = function (param1: string, param2: {}) { }

          varFunctionObject('one', { one: 'one', two: true, three: 3 });
        </div>
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
            <div class="pre">
              interface AClass {
              varOne: string;
              varTwo: boolean;
              varThree?: number;
              }

              class aClass implements AClass {
              varOne = 'one';
              varTwo = true;
              }
            </div>

            <div class="row">
              <div class="col-sm-12">
                <h4>extends and implements</h4>
              </div>
            </div>
            <div class="pre">
              interface OldClass {
              varZero: number;
              }

              interface NewClass extends OldClass {
              varOne: string;
              varTwo: boolean;
              varThree?: number;
              }

              class newClass implements NewClass {
              varZero = 0;
              varOne = 'one';
              varTwo = true;
              }
            </div>

            <div class="row">
              <div class="col-sm-12">
                <h4>hybrid</h4>
              </div>
            </div>
            <div class="pre">
              interface IHybridClass {
              varOne: string;
              varTwo: {
              twoOne: boolean;
              };
              varThree(varThreeOne: string, varThreeTwo: boolean): number;
              varFour({ varFourOne, varFourTwo }: { varFourOne: string, varFourTwo: boolean }): number;
              }

              class HybridClass implements IHybridClass {
              varOne = 'one';

              varTwo = {
              twoOne: true
              };

              varThree = (varThreeOne: string, varThreeTwo: boolean) => {
              return 3;
              };
              testingVarThree() {
              let three = this.varThree('one', true);
              }

              varFour = function ({
              varFourOne,
              varFourTwo
              }: { varFourOne: string, varFourTwo: boolean }) {
              console.log(varFourOne, varFourTwo);
              return 4;
              }
              testingVarFour() {
              let four = this.varFour({ varFourOne: 'four', varFourTwo: true });
              }
              }
            </div>
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
            <div class="pre">
              function identity&lt;T>(arg: T): T {
              return arg;
              }

              identity(10);
              identity&lt;number>(10);
              identity('ten');
              identity&lt;string>('ten');
            </div>

            <div class="row">
              <div class="col-sm-12">
                <h4>extends</h4>
              </div>
            </div>
            <div class="pre">
              interface ILoggingIdentity2 {
              length: number;
              }

              function loggingIdentity2&lt;T extends ILoggingIdentity2>(arg: T): T {
              console.log(arg.length);
              return arg;
              }

              loggingIdentity2({ length: 1 });
            </div>
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
            <div class="pre">
              // Later
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="row">
          <div class="col-sm-12">
            <h3>Literals and unions</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="pre">
              // Later
              Literal Types: ie. 'Value1' | 'Value2'
              Union Types:   ie. boolean | string
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="row">
      <div class="col-sm-12">
        <h2>Applied</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h3>React Component</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="pre">
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
        </div>
      </div>
    </div>
  </div>
</template>