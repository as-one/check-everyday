<template>
  <section class="container content">
    <h2>Foundations</h2>

    <div class="row">
      <div class="col-sm-12 col-md-4">
        <h3>Naming Cases</h3>
        <table>
          <tr>
            <td>PascalCase</td>
          </tr>
          <tr>
            <td>camelCase</td>
          </tr>
          <tr>
            <td>kebab-case</td>
          </tr>
          <tr>
            <td>snake_case</td>
          </tr>
          <tr>
            <td>strHungarianNotation</td>
          </tr>
        </table>

        <h3>Special Operators</h3>
        <table>
          <tr>
            <td>**</td>
            <td>exponential</td>
          </tr>
          <tr>
            <td>%</td>
            <td>remainder</td>
          </tr>
          <tr>
            <td>??</td>
            <td>nullish coalescing</td>
          </tr>
          <tr>
            <td>?.</td>
            <td>optional chaining / null-safe</td>
          </tr>
        </table>

        <h3>Programming Lifecycle</h3>
        <table>
          <tr>
            <td>1</td>
            <td>Edit time</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Compile time</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Link time</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Distribution time</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Installation time</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Load time</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Runtime</td>
          </tr>
        </table>
        <ul>
          <li>Compiled code: on Runtime, runs on Compiler.</li>
          <li>Script code: on Runtime, runs on Interpreter.</li>
        </ul>
      </div>

      <div class="col-sm-12 col-md-8">
        <h3>Binary / Decimal / Hex</h3>
        <table>
          <tr>
            <td>1 byte = 8 bits</td>
          </tr>
          <tr>
            <td>4 bits = 1 nibble</td>
          </tr>
        </table>

        <table>
          <tr>
            <td></td>
            <td>Digits</td>
            <td>Unique values</td>
            <td>1 byte's first value</td>
            <td>1 byte's last value</td>
          </tr>
          <tr>
            <td>Binary</td>
            <td>01</td>
            <td>2 ** 8 = 256</td>
            <td>0</td>
            <td>1111 1111</td>
          </tr>
          <tr>
            <td>Decimal</td>
            <td>0123456789</td>
            <td>10 ** 8</td>
            <td>0</td>
            <td>255</td>
          </tr>
          <tr>
            <td>Hex</td>
            <td>0123456789ABCDEF</td>
            <td>16 ** 8</td>
            <td>0</td>
            <td>FF</td>
          </tr>
        </table>

        <h3>Converting Hex to Binary</h3>
        <table>
          <tr>
            <td>Binary</td>
            <td>Decimal</td>
            <td>Hex</td>
            <td>Binary</td>
            <td>Decimal</td>
            <td>Hex</td>
          </tr>
          <tr>
            <td>0000</td>
            <td>0</td>
            <td>0</td>

            <td>1000</td>
            <td>8</td>
            <td>8</td>
          </tr>
          <tr>
            <td>0001</td>
            <td>1</td>
            <td>1</td>

            <td>1000</td>
            <td>9</td>
            <td>9</td>
          </tr>
          <tr>
            <td>0010</td>
            <td>2</td>
            <td>2</td>

            <td>1010</td>
            <td></td>
            <td>A</td>
          </tr>
          <tr>
            <td>0011</td>
            <td>3</td>
            <td>3</td>

            <td>1011</td>
            <td></td>
            <td>B</td>
          </tr>
          <tr>
            <td>0100</td>
            <td>4</td>
            <td>4</td>

            <td>1100</td>
            <td></td>
            <td>C</td>
          </tr>
          <tr>
            <td>0101</td>
            <td>5</td>
            <td>5</td>

            <td>1101</td>
            <td></td>
            <td>D</td>
          </tr>
          <tr>
            <td>0110</td>
            <td>6</td>
            <td>6</td>

            <td>1110</td>
            <td></td>
            <td>E</td>
          </tr>
          <tr>
            <td>0111</td>
            <td>7</td>
            <td>7</td>

            <td>1111</td>
            <td></td>
            <td>F</td>
          </tr>
        </table>

        <a class="link" target="_blank" href="http://www.unitconversion.org/numbers/base-2-to-base-16-conversion.html">Binary to Hex</a>

        <h3>Unsigned vs Signed Integers</h3>
        <table>
          <tr>
            <td></td>
            <td>Int</td>
          </tr>
          <tr>
            <td>Unsigned</td>
            <td>+</td>
          </tr>
          <tr>
            <td>Signed</td>
            <td>+ and -</td>
          </tr>
        </table>
      </div>
    </div>

    <h2>Functions and Versions</h2>

    <div class="row">
      <div class="col-sm-12 col-md-6">
        <h3>Function Types</h3>
        <table>
          <tr>
            <td>Function</td>
            <td>
              <pre>
func myFunc(): bool {
  // do this
  // do that
  // always return
  return true
}
              </pre>
            </td>
          </tr>
          <tr>
            <td>Subroutine</td>
            <td>
              <pre>
func myFunc(): void {
  // do this
  // do that
  // do not return
}</pre>
            </td>
          </tr>
          <tr>
            <td>Callback</td>
            <td>
              <pre>
func myFunc(callback) {
  callback('param')
}
              </pre>
            </td>
          </tr>
          <tr>
            <td>Closure</td>
            <td>
              <pre>
func myFunc(x) {
  return anotherFunc(y) {
    // this anotherFunc is the closure
    return x + y
  }
}
              </pre>
            </td>
          </tr>
          <tr>
            <td>Higher-order</td>
            <td>
              <pre>
func higherOrder {
  print(getFunc(), 10)
}
func print(getFunc, val) {
  getFunc(val)
}
func getFunc(val) {}
              </pre>
            </td>
          </tr>
          <tr>
            <td>Recursion</td>
            <td>
              <pre>
func myFunc() {
  myFunc()
}
              </pre>
            </td>
          </tr>
          <tr>
            <td>Pure</td>
            <td>
              <pre>

func f(x) {
  // does not depend on external factors
  return x + 2
}
              </pre>
            </td>
          </tr>
          <tr>
            <td>Impure</td>
            <td>
              <pre>
y = 1
func f(x) {
  // depends on external factors
  return x + y + 2
}
              </pre>
            </td>
          </tr>
        </table>
      </div>

      <div class="col-sm-12 col-md-6">
        <h3>Semantic Versioning (SemVer)</h3>
        <p>MAJOR.MINOR.PATCH</p>
        <table>
          <tr>
            <td>MAJOR</td>
            <td>Major update</td>
          </tr>
          <tr>
            <td>MINOR</td>
            <td>New feature</td>
          </tr>
          <tr>
            <td>PATCH</td>
            <td>Bugfix</td>
          </tr>
        </table>
        <table>
          <tr>
            <td>^1.0.1</td>
            <td>
              <ul>
                <li>Caret</li>
                <li>Preferable!</li>
                <li>Updates MINOR and PATCH.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>~1.0.1</td>
            <td>
              <ul>
                <li>Til</li>
                <li>Updates only PATCH.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>1.0.1</td>
            <td>
              <ul>
                <li>Fixed. Does not update.</li>
              </ul>
            </td>
          </tr>
        </table>
        <a class="link" target="_blank" href="https://semver.org/">SemVer</a>

        <h3>IDs</h3>
        <table>
          <tr>
            <td>UUID</td>
            <td>Universally Unique Identifier</td>
            <td></td>
            <td>2e1a887d-991a-4760-b035-bd7766e1f498</td>
          </tr>
          <tr>
            <td>KSUID</td>
            <td>Key-Sortable Unique Identifier</td>
            <td>has a timestamp<br/>at its beginning</td>
            <td>0ujsszwN8NRY24YaXiTIE2VWDTS</td>
          </tr>
        </table>
      </div>
    </div>

    <h2>Typing</h2>

    <div class="row">
      <div class="col-sm-12 col-md-6">
        <h3>Typing Disciplines</h3>
        <table>
          <tr>
            <td>Untyped</td>
            <td>Operations regardless<br/>of type</td>
          </tr>
          <tr>
            <td>Typed</td>
            <td>Operations specific<br/>to that data type</td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td>Static</td>
            <td>Types associated with variables</td>
          </tr>
          <tr>
            <td>Dynamic</td>
            <td>Types associated with values</td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td>Explicit</td>
            <td>Explicit type declaration</td>
          </tr>
          <tr>
            <td>Implicit</td>
            <td>Implicit type declaration</td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td>Strong</td>
            <td>Can't change variable type</td>
          </tr>
          <tr>
            <td>Weak</td>
            <td>Can change variable type</td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td>Nominal</td>
            <td>Type attached to name</td>
          </tr>
          <tr>
            <td>Structural</td>
            <td>Type attached to structure</td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td>Type-Safe</td>
            <td colspan="2">Undefined behaviors throw errors</td>
          </tr>
        </table>
      </div>

      <div class="col-sm-12 col-md-6">
        <h3>Language Typings</h3>
        <table>
          <tr>
            <td>HTML, CSS, SQL</td>
            <td>Untyped</td>
          </tr>
          <tr>
            <td>JS</td>
            <td>Typed, Dynamic, Implicit, Weak, Nominal</td>
          </tr>
          <tr>
            <td>TS</td>
            <td>Typed, Static, Explicit, Strong, Structural</td>
          </tr>
          <tr>
            <td>Python</td>
            <td>Typed, Dynamic, Implicit, Weak, Nominal</td>
          </tr>
          <tr>
            <td>PHP</td>
            <td>Typed, Dynamic, Implicit, Weak, Nominal</td>
          </tr>
          <tr>
            <td>Go</td>
            <td>Typed, Static, Implicit, Strong, Structural</td>
          </tr>
          <tr>
            <td>C</td>
            <td>Typed, Static, Explicit, Weak, Nominal</td>
          </tr>
          <tr>
            <td>Java</td>
            <td>Typed, Static, Explicit, Strong, Nominal</td>
          </tr>
          <tr>
            <td>C#</td>
            <td>Typed, Static, Explicit, Strong, Nominal</td>
          </tr>
          <tr>
            <td>Rust</td>
            <td>Typed, Static, Implicit, Strong, Structural</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>
