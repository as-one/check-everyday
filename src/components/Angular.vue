<script setup>
const content = {
  propsAssigning: `
<!-- Static -->
< app-blog-post [title]="'My journey with Vue'" />

<!-- Dynamic -->
< app-blog-post [title]="post.title" />
  `,
  propsDeclaring: `
export class BlogPostComponent {
  @Input() title: string;
}
  `,
  sharingStateTopDown: `
// GrandpaComponent.ts
@Component({
  selector: 'app-grandpa',
  template: \`< app-dad [grandpaMessage]="messageFromGrandpa"></ app-dad>\`
})
export class GrandpaComponent {
  messageFromGrandpa = "Hi from Grandpa";
}

==========

// DadComponent.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dad',
  template: \`< span>{{ grandpaMessage }}</ span>\`
})
export class DadComponent {
  @Input() grandpaMessage: string;
}
  `,
  sharingStateBottomUp: `
// dad.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-dad',
  template: \`< app-child (handleButton)="showAlert($event)"></ app-child>\`
})
export class DadComponent {
  showAlert(value: string) {
    alert(value);
  }
}

==========

// child.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: \`<button (click)="handleClick()">Button</button>\`
})
export class ChildComponent {
  @Output() handleButton: EventEmitter<string> = new EventEmitter();

  handleClick() {
    this.handleButton.emit('Clicked!');
  }
}
  `,
  sharingStateBottomUpChildToGrandpa: `
// Grandpa.vue

// grandpa.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-grandpa',
  template: \`< app-dad (handleButton)="showAlert($event)"></ app-dad>\`
})
export class GrandpaComponent {
  showAlert(value: string) {
    alert(value);
  }
}

==========

// dad.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-dad',
  template: \`< app-child (handleButton)="handleButtonClick($event)"></ app-child>\`
})
export class DadComponent {
  handleButtonClick(value: string) {
    this.showAlert(value);
  }

  showAlert(value: string) {
    alert(value);
  }
}

==========

// child.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: \`< button (click)="handleClick()">Button</ button>\`
})
export class ChildComponent {
  @Output() handleButton: EventEmitter<string> = new EventEmitter();

  handleClick() {
    this.handleButton.emit('Clicked!');
  }
}
  `,
  methodHandlers: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <!-- Inline -->
    < button (click)="incrementCounter()">Add 1</ button>
    < p>The button above has been clicked {{ counter }} times.</ p>

    <!-- Function -->
    < button (click)="greet()">Greet</ button>
    < button (click)="say('hello')">Say Hello</ button>
  \`
})
export class CounterComponent {
  counter = 0;

  incrementCounter() {
    this.counter++;
  }

  greet() {
    console.log("button");
  }

  say(message: string) {
    console.log(message);
  }
}
  `,
  methodEventModifiers: `
onSubmit(event: Event) {
  event.preventDefault();
}
  `,
  methodKeyModifiers: `
< input (keydown.enter)="submit()" />
< input (keydown.pageDown)="onPageDown()" />
< input (keydown.delete)="onDelete($event)" />
  `,
  conditionalNgIf: `
< ng-container *ngIf="ok">
  < h1>Title</h1>
  < p>Paragraph 1</p>
  < p>Paragraph 2</p>
< /ng-container>
  `,
  listNgForArray: `
< li *ngFor="let item of items">
  {{ item.message }}
< /li>
  `,
  listNgForObject: `
< ul>
  < li *ngFor="let item of myObjectKeys; let index = index">
    {{ index }}. {{ item }}: {{ myObject[item] }}
  < /li>
< /ul>

myObject = {
  title: 'My Title',
  author: 'My Author'
};
myObjectKeys = Object.keys(this.myObject);
  `,
  listNgForComponent: `
< app-my-component
  *ngFor="let item of items; let index = index"
  [item]="item"
  [index]="index"
></ app-my-component>
  `,
  routing: `
// HTML
< a routerLink="/">Login</ a>
< a routerLink="/users">Users</ a>
< a routerLink="/users/1">User 1</ a>

// app.routing.module.ts
const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'users', component: UsersComponent, canActivate: [RouteGuardService] },
    { path: 'users/:id', component: UserComponent, canActivate: [RouteGuardService] },
    { path: '**', component: ErrorComponent, canActivate: [RouteGuardService] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
  `,
  redirecting: `
export class MyComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/my-path']);
  }
}
  `,
}
</script>

<template>
  <div class="container content">
    <h2>Basics</h2>

    <div class="row">
      <div class="col-sm-12 col-md-4">
        <h3>Props</h3>
        <h4>Assigning</h4>
        <pre>
          {{content.propsAssigning}}
        </pre>

        <h4>Declaring</h4>
        <pre class="pre">
          {{content.propsDeclaring}}
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h3>Sharing State</h3>
        <h4>Top Down</h4>
        <h5>Grandpa to Dad</h5>
        <pre class="pre">
          {{content.sharingStateTopDown}}
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h3>Sharing State</h3>
        <h4>Bottom Up - Emits</h4>
        <h5>Child to Dad</h5>
        <pre class="pre">
          {{content.sharingStateBottomUp}}
        </pre>

        <h5>Child to Grandpa</h5>
        <pre class="pre">
          {{content.sharingStateBottomUpChildToGrandpa}}
        </pre>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h3>Events Handlers</h3>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>Method Handlers</h4>
        <pre class="pre">
          {{content.methodHandlers}}
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>Event Modifiers</h4>
        <pre class="pre">
          {{content.methodEventModifiers}}
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>Key Modifiers</h4>
        <pre class="pre">
          {{content.methodKeyModifiers}}
        </pre>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <h3>Conditional Rendering</h3>
          <div class="col-sm-12 col-md-4">
            <h4>ngIf</h4>
            <pre class="pre">
              {{content.conditionalNgIf}}
            </pre>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h3>List Rendering</h3>
      </div>
      <div class="col-sm-12 col-md-4">
        <h4>ngFor on Array</h4>
        <pre class="pre">
          {{content.listNgForArray}}
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>ngFor on Object</h4>
        <pre class="pre">
          {{content.listNgForObject}}
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>ngFor on Component</h4>
        <pre class="pre">
          {{content.listNgForComponent}}
        </pre>
      </div>

    </div>

    <div class="row">
      <h3>Routing</h3>
      <div class="col-sm-12 col-md-6">
        <h4>Simple Routing from Scratch</h4>
        <pre class="pre">
          {{content.routing}}
        </pre>
      </div>

      <div class="col-sm-12 col-md-6">
        <h4>Redirecting</h4>
        <pre class="pre">
          {{content.redirecting}}
        </pre>
      </div>
    </div>
  </div>
</template>
