<template>
  <section class="container content">
    <h2>Paradigms</h2>

    <div class="row">
      <div class="col-sm-12 col-md-6">
        <h3>OOP</h3>
        <table>
          <tr>
            <td>Instance</td>
            <td>Occurence of an object</td>
          </tr>
          <tr>
            <td>Object</td>
            <td>An entity of a class</td>
          </tr>
          <tr>
            <td>Attributes</td>
            <td>Classes's variables</td>
          </tr>
          <tr>
            <td>Method</td>
            <td>Classes's functions</td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td>Encapsulation</td>
            <td>Methods and access modifiers inside classes</td>
          </tr>
          <tr>
            <td>Inheritance</td>
            <td>A class derives from another class</td>
          </tr>
          <tr>
            <td>Polimorphism</td>
            <td>Objects of different classes respond<br/>differently to the same method</td>
          </tr>
          <tr>
            <td>Abstraction</td>
            <td>Abstract classes (contract + implementation)<br/> and interfaces (contract)</td>
          </tr>
        </table>

        <h4>Access modifiers</h4>
        <table>
          <tr>
            <td>public</td>
            <td>accessible in/outside<br/>the class</td>
          </tr>
          <tr>
            <td>protected</td>
            <td>accessible in/outside<br/>even if it's a child class</td>
          </tr>
          <tr>
            <td>private</td>
            <td>
              <ul>
                <li>accessible only inside<br/>the class</li>
                <li>prefer private over protected</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>static</td>
            <td>accessible without instantiating<br/>the class</td>
          </tr>
        </table>
      </div>
      <div class="col-sm-12 col-md-6">
        <h3>SOLID</h3>
        <table>
          <tr>
            <td>S</td>
            <td>Single Responsibility</td>
            <td>Only one reason to change</td>
          </tr>
          <tr>
            <td>O</td>
            <td>Open-Closed</td>
            <td>Open to extension; closed to modification</td>
          </tr>
          <tr>
            <td>L</td>
            <td>Liskov-Substitution</td>
            <td>SuperType and SubType behaviors must be the same</td>
          </tr>
          <tr>
            <td>I</td>
            <td>Interface Segregation</td>
            <td>Classes should implement all contract properties</td>
          </tr>
          <tr>
            <td>D</td>
            <td>Dependency Inversion</td>
            <td>Depend on abstractions rather than concretions</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-6">
        <h3>TDD</h3>
        <h4>Types of Tests</h4>
        <table>
          <tr>
            <td>Unit</td>
            <td>
              <ul>
                <li>Solitary</li>
                <li>London Style</li>
                <li>Mocking, Spying</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Integration</td>
            <td>
              <ul>
                <li>Sociable, Feature</li>
                <li>Chicago Style</li>
              </ul>
            </td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td>Positive</td>
            <td>Happy path testing</td>
          </tr>
          <tr>
            <td>Negative</td>
            <td>Error path testing</td>
          </tr>
        </table>
      </div>
      <div class="col-sm-12 col-md-6">
        <h3>RESTful</h3>
        <table>
          <tr>
            <td>Operation</td>
            <td>HTTP Method</td>
          </tr>
          <tr>
            <td>C</td>
            <td>POST</td>
          </tr>
          <tr>
            <td>R</td>
            <td>GET</td>
          </tr>
          <tr>
            <td>U</td>
            <td>
              <ul>
                <li>PATCH = entire entity</li>
                <li>PUT = values sent</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>D</td>
            <td>DELETE</td>
          </tr>
        </table>
      </div>
    </div>

    <h2>Best Practices</h2>

    <h3>Clean Code</h3>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <table>
          <tr>
            <td>Boyscouting</td>
            <td>Leave it better than you found it</td>
          </tr>
          <tr>
            <td>Four Simplicity Rules</td>
            <td>
              <ul>
                <li>No Duplication</li>
                <li>Reveals Intention</li>
                <li>Fewest Elements</li>
                <li>Passes the Tests</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>DDD + UL</td>
            <td>Domain Driven Design + Ubiquitous Language</td>
          </tr>
          <tr>
            <td>DRY</td>
            <td>
              <ul>
                <li><span class="underline">DRY</span> = Don't Repeat Yourself</li>
                <li><span class="underline">Accidental Duplication:</span> code that looks<br/>similar but it's not</li>
                <li><span class="underline">Rule of Three:</span> Apply DRY after<br/>3rd duplication</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Demeter Law</td>
            <td>
              <ul>
                <li>Principle of least knowledge</li>
                <li>Each unit should have only<br/>limited knowledge about<br/>other units: only units "closely"<br/>related to the current unit.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Coupling and Cohesion</td>
            <td>
              <ul>
                <li>High Coupling and Low Cohesion: Within</li>
                <li>Low Coupling and High Cohesion: Outside</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Immutability</td>
            <td>Defense against collateral damage</td>
          </tr>
        </table>
      </div>
      <div class="col-sm-12 col-md-6">
        <table>
          <tr>
            <td>Declarative Code</td>
            <td>Short, simple, and readable</td>
          </tr>
          <tr>
            <td>Visual Representation</td>
            <td>
              <ul>
                <li>let ok = 10</li>
                <li>xxx xx x xx</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Comments</td>
            <td>Avoid. Use descriptive variables<br/>and functions names</td>
          </tr>
          <tr>
            <td>Dead Code</td>
            <td>Remove unused, unreachable code</td>
          </tr>
          <tr>
            <td>Big Blocks</td>
            <td>Refactor to smaller chunks</td>
          </tr>
          <tr>
            <td>Symmetry</td>
            <td>Beautiful symmetric code</td>
          </tr>
          <tr>
            <td>Guard Clause</td>
            <td>At the start of the function</td>
          </tr>
          <tr>
            <td>Classes</td>
            <td>
              <ul>
                <li>Should be small</li>
                <li>Single responsibility</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-6">
        <h3>Refactoring</h3>
        <h4>Refactoring Pyramid</h4>
        <table>
          <tr>
            <td>1. Flow</td>
            <td>
              <ul>
                <li>Nested conditions</li>
                <li>Nested loops</li>
                <li>Many local variables</li>
                <li>Ambiguous names</li>
                <li>Single exit points</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>2. Methods</td>
            <td>
              <ul>
                <li>Levels of abstraction</li>
                <li>Extract / remove parameter</li>
                <li>Cohesion</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>3. Classes</td>
            <td>
              <ul>
                <li>Extract delegate</li>
                <li>Extract base class</li>
                <li>Extract subclass</li>
                <li>Extract fields</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>4. Patterns</td>
            <td>
              <ul>
                <li>Abstractions</li>
                <li>Interfaces</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>5. Architecture</td>
            <td>
              <ul>
                <li>Packages</li>
                <li>Modules</li>
                <li>Microservices</li>
              </ul>
            </td>
          </tr>
        </table>

        <h4>Complexity</h4>
        <table>
          <tr>
            <td>Ciclomatic</td>
            <td>
              <ul>
                <li>Simplest</li>
                <li>The amount of paths in a<br/>function from start to finish</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Cognitive</td>
            <td>
              <ul>
                <li>Better than Ciclomatic</li>
                <li>
                  For each nested a +1 is added.
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
      <div class="col-sm-12 col-md-6">
        <h3>Defensive Programming</h3>
        <div class="row">
          <div class="col-sm-12">
            <table>
              <tr>
                <td>Guard clauses</td>
                <td>
                  <span>Fail fast</span>
                  <pre>
func myFunc() {
  if () {
    return;
  }
  // ...
}
              </pre>
                </td>
              </tr>
              <tr>
                <td>Validating null</td>
                <td>
              <pre>
if(true) {} else { if() {} else {}} // Wrong
if(true) {} else { throw }          // Wrong
if(false) { throw }                 // Correct!
              </pre>
                </td>
              </tr>
              <tr>
                <td>Validating number ranges</td>
                <td>
              <pre>
if(n &lt; 1 && n &gt; 7) // Wrong
if(n &lt; 1 || n &gt; 7) // Correct
              </pre>
                </td>
              </tr>
              <tr>
                <td>Validating strings</td>
                <td>
                  <ul>
                    <li>Do not check if string is null</li>
                    <li>Check if the string content is valid</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Handling dates</td>
                <td>
                  <ul>
                    <li>Immutability</li>
                    <li>Validate as object, not string</li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

    <h2>Architecture Patterns</h2>

    <div class="row">
      <div class="col-sm-12 col-md-4">
        <h3>Pattern Types</h3>
        <table>
          <tr>
            <td>Layered</td>
            <td>Layered, Client-Server, N-Tier</td>
          </tr>
          <tr>
            <td>Service</td>
            <td>SOA, Microservices, Message Bus</td>
          </tr>
          <tr>
            <td>Presentational</td>
            <td>MVC, MVCS, MVVM</td>
          </tr>
          <tr>
            <td>Structural</td>
            <td>Components, OO, Functional</td>
          </tr>
          <tr>
            <td>Hybrid</td>
            <td>Clean, Hexagonal, Onion, Sacrificial</td>
          </tr>
        </table>

        <h3>Design Quality Attributes</h3>
        <table>
          <tr>
            <td>Conceptual Integrity</td>
          </tr>
          <tr>
            <td>Maintainability</td>
          </tr>
          <tr>
            <td>Reusability</td>
          </tr>
          <tr>
            <td>Testability</td>
          </tr>
          <tr>
            <td>Usability</td>
          </tr>
        </table>

        <h3>Runtime Quality Attributes</h3>
        <table>
          <tr>
            <td>Availability</td>
          </tr>
          <tr>
            <td>Interoperability</td>
          </tr>
          <tr>
            <td>Manageability</td>
          </tr>
          <tr>
            <td>Performance</td>
          </tr>
          <tr>
            <td>Reliability</td>
          </tr>
          <tr>
            <td>Scalability</td>
          </tr>
          <tr>
            <td>Security</td>
          </tr>
        </table>
      </div>

      <div class="col-sm-12 col-md-8">
        <h3>Design Patterns</h3>
        <table>
          <tr>
            <td>Creational</td>
            <td>Simple Factory</td>
            <td>Put duplicated new instances on a function to avoid duplication.</td>
          </tr>
          <tr>
            <td></td>
            <td>Factory Method</td>
            <td>Put duplicated new instances on a class method to avoid duplication.</td>
          </tr>
          <tr>
            <td></td>
            <td>Abstract Factory</td>
            <td>Put duplicated new instances on an abstract class method to avoid duplication.</td>
          </tr>
          <tr>
            <td></td>
            <td>Builder</td>
            <td>Put each building step as a class method. Build instantiating the class an calling a main method.</td>
          </tr>
          <tr>
            <td></td>
            <td>Prototype</td>
            <td>Clone an object via an abstract class Prototype, method clone().</td>
          </tr>
          <tr>
            <td></td>
            <td>Singleton</td>
            <td>Avoid many instances of a class via a getInstance().</td>
          </tr>

          <tr>
            <td>Structural</td>
            <td>Adapter</td>
            <td>Connect two classes via an interface.</td>
          </tr>
          <tr>
            <td></td>
            <td>Bridge</td>
            <td>Combinable properties of a class end up having several extended classes.</td>
          </tr>
          <tr>
            <td></td>
            <td>Composite</td>
            <td>Directories are composites; files are leafs.</td>
          </tr>
          <tr>
            <td></td>
            <td>Decorator</td>
            <td>When classes work together and can be combined. Like clothes.</td>
          </tr>
          <tr>
            <td></td>
            <td>Facade</td>
            <td>Access many subsystems through a single class named Facade.</td>
          </tr>
          <tr>
            <td></td>
            <td>Flyweight</td>
            <td>When the problem is insufficient amount of RAM.</td>
          </tr>
          <tr>
            <td></td>
            <td>Proxy</td>
            <td>A class guard that control access to further classes.</td>
          </tr>

          <tr>
            <td>Behavioral</td>
            <td>Chain of Responsibility</td>
            <td>Several classes extends from an abstract setNext() and have the same handle(). Usage with loops.</td>
          </tr>
          <tr>
            <td></td>
            <td>Command</td>
            <td>Execute and undo. Calculator.</td>
          </tr>
          <tr>
            <td></td>
            <td>Iterator</td>
            <td>Loop as class. Methods current(), next(), and hasNext().</td>
          </tr>
          <tr>
            <td></td>
            <td>Mediator</td>
            <td>Airplanes and air traffic control.</td>
          </tr>
          <tr>
            <td></td>
            <td>Memento</td>
            <td>Create snapshots.</td>
          </tr>
          <tr>
            <td></td>
            <td>Observer</td>
            <td>Pub/Sub pattern having publishers and subscribers/listeners.</td>
          </tr>
          <tr>
            <td></td>
            <td>State</td>
            <td>On action, update a state that will affect other action behaviors.</td>
          </tr>
          <tr>
            <td></td>
            <td>Strategy</td>
            <td>A Context class can have several Service classes to use and a shared method among them.</td>
          </tr>
          <tr>
            <td></td>
            <td>Template Method</td>
            <td>A Process class uses several Step classes. The whole process runs on Process.start().</td>
          </tr>
          <tr>
            <td></td>
            <td>Visitor</td>
            <td>Different Visitors behave differently depending on the Place.</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-6">
        <h3>Domain Driven Design (DDD)</h3>
        <table>
          <tr>
            <td>1.1. Domain Discovery</td>
            <td>Bounded Context Canvas</td>
          </tr>
          <tr>
            <td>1.2. Event Storming</td>
            <td>
              <ul>
                <li>Command</li>
                <li>Domain Event</li>
                <li>Policy</li>
                <li>Aggregate</li>
                <li>External Service</li>
                <li>Read Model</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>2.1. Strategic Patterns</td>
            <td>
              <ul>
                <li>Ubiquitous Language</li>
                <li>Bounded Context</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>2.2. BC Relationships</td>
            <td>
              <ul>
                <li>Symmetric: Separate ways,<br/>Partnership, Shared Kernel</li>
                <li>Assymetric: Conformist, <br/>Customer-Supplier, Anti <br/>Corruption Layer</li>
                <li>One to Many: Open Host Service, <br/>Published Language</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>3.1. Tactical Patterns - Objects</td>
            <td>
              <ul>
                <li>Model Driven Design</li>
                <li>Pattern: Entity Object</li>
                <li>Pattern: Value Object (VO)</li>
                <li>Pattern: Aggregate</li>
                <li>Pattern: Factory</li>
                <li>Pattern: Repository Object</li>
                <li>Model Behavior: Anemic<br/>and Rich Models</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>3.2. Tactical Patterns - Services</td>
            <td>
              <ul>
                <li>Application</li>
                <li>Domain</li>
                <li>Infrastructure</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
      <div class="col-sm-12 col-md-6">
        <h3>Clean Architecture</h3>
        <table>
          <tr>
            <td>4. Details: Devices, DB, Web, Framework, UI</td>
          </tr>
          <tr>
            <td>3. Controllers</td>
          </tr>
            <td>2. Use Cases</td>
          <tr>
            <td>1. Entities</td>
          </tr>
        </table>

        <h3>Hexagonal Architecture</h3>
        <table>
          <tr>
            <td>1.1. Driving Adapter: API UI, Console</td>
          </tr>
          <tr>
            <td>2.1. Input Port</td>
          </tr>
          <tr>
            <td>2.2. Business Logic</td>
          </tr>
          <tr>
            <td>2.3. Output Port</td>
          </tr>
          <tr>
            <td>3.1. Driven Adapter: DB, Queue, HTTP</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>
