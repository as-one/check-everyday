<script setup>
const content = {
  propsAssigning: `
< template>
  // Static
  <blog-post title="My journey with Vue" />

  // Dynamic
  <blog-post :title="post.title"/>
< /template>
  `,
  propsDeclaringCompositionApi: `
< script setup>
const props = defineProps(['foo']);

console.log(props.foo);
< /script>

OR

< script setup>
defineProps({
  title: String,
  likes: Number
});

console.log(props.likes);
< /script>
  `,
  propsDeclaringOptionsApi: `
< script>
export default {
  props: ['foo'],
  setup(props) {
    console.log(props.foo);
  }
}
< /script>

OR

< script>
export default {
  props: {
    title: String,
    likes: Number,
  },
  setup(props) {
    console.log(props.likes);
  }
}
< /script>
`,
  sharingStateTopDown: `
// Grandpa.vue

< template>
  <dad grandpa-message="Hi from Grandpa" />
< /template>

< script setup>
import Dad from "@/Dad.vue";
< /script>

==========

// Dad.vue

< template>
  <span>{ { GrandpaMessage }}</span>
< /template>

< script setup>
  defineProps({
    GrandpaMessage: String,
  });
< /script>
  `,
  sharingStateBottomUp: `
// Dad.vue

< template>
  <child @handleButton="showAlert" />
< /template>

< script setup>
import Child from "@/Child.vue";

function showAlert(value) {
  alert(value);
};
< /script>

==========

// Child.vue

< template>
  <button @click="handleClick">Button</button>
< /template>

< script setup>
import { defineEmits } from "vue";

const emit = defineEmits(['handleButton']);

function handleClick() {
  emit('handleButton', 'Clicked!');
}
< /script>
  `,
  sharingStateBottomUpChildToGrandpa: `
// Grandpa.vue

< template>
  <dad @handleButton="showAlert" />
< /template>

< script setup>
import Dad from "@/Dad.vue";

function showAlert(value) {
  alert(value);
};
< /script>

==========

// Dad.vue

< template>
  <child />
< /template>

< script setup>
import Child from "@/Child.vue";
< /script>

==========

// Child.vue

< template>
  <button @click="$dad.$emit('handleButton', 'Clicked!')>Button</button>
< /template>
  `,
  methodHandlers: `
< template>
// Inline
<button @click="counter++">Add 1</button>
<p>The button above has been clicked { { counter }} times.</p>

// Function
<button @click="greet">Greet</button>
<button @click="say('hello')">Say Hello</button>
< /template>

< script setup>
import { ref } from 'vue';

const counter = ref(0);

function greet(event) {
  // event is the native DOM event
  console.log(event.target.tagName);
}

function say(message) {
  console.log(message);
}
< /script>
  `,
  methodEventModifiers: `
< template>
  <a @click.stop="doThis"></a>
  <a @click.stop.prevent="doThat"></a>
  <div @click.self="myFunction">...</div>
  <form @submit.prevent="onSubmit"></form>
< /template>
  `,
  methodKeyModifiers: `
< template>
  <input @keyup.enter="submit" />
  <input @keyup.page-down="onPageDown" />
  <input @keyup.delete="onDelete" /> // captures both "Delete" and "Backspace" keys
< /template>
  `,
  conditionalVIf: `
< template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
< /template>
  `,
  conditionalVIfElse: `
< template>
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else>Else</div>
< /template>
  `,
  conditionalVShow: `
< template>
  <h1 v-show="ok">Hello!</h1>
< /template>

The v-show always renders in the DOM just toggling the CSS.
  `,
  listVForArray: `
< template>
  <li v-for="(item, index) in items" :key="item.message">
    { { item.message }}
  </li>
< /template>

< script setup>
import { ref } from 'vue';

const items = ref([
  { message: 'Foo' },
  { message: 'Bar' },
]);
< /script>
  `,
  listVForObject: `
< template>
   <ul>
    <li v-for="(value, key, index) in myObject" :key="index">
      { { index }}. { { key }}: { { value }}
      // 0. title: My Title
      // 1. author: My Author
    </li>
  </ul>
< /template>

< script setup>
import { reactive } from 'vue';

const myObject = reactive({
  title: 'My Title',
  author: 'My Author',
});
< /script>
  `,
  listVForComponent: `
< my-component
  v-for="(item, index) in items"
  :item="item"
  :index="index"
  :key="item.id"
/>
  `,
  templateRefsAccessing: `
< template>
  <input ref="input" />
< /template>

< script setup>
import { ref, onMounted } from 'vue';

const input = ref(null);

onMounted(() => {
  input.value.focus();
});
< /script>
  `,
  reactivityRef: `
// Use for scalar types

< script setup>
import {ref} from 'vue';

const title = ref('Title');
const price = ref(9.99);

console.log(title.value);
console.log(price.value);
< /script>
  `,
  reactivityReactive: `
// Use for compound types

< script setup>
import {reactive} from 'vue';

const product = reactive({
  title: 'Title',
  price: 9.99
});

console.log(product.title);
< /script>
  `,
  reactivityRefState: `
< template>
  <button @click="increment">
    { { count }}
  </button>
< /template>

< script>
import { ref } from 'vue';

const count = ref(0)

function increment() {
  count.value++
}
< /script>
  `,
  reactivityReactiveState: `
< template>
  <button @click="increment">
    { { state.count }}
  </button>
< /template>

< script setup>
import { reactive } from 'vue';

const state = reactive({ count: 0 });

function increment() {
  state.count++
};
< /script>
  `,
  routing: `
< template>
  <a href="#/">Home</a>
  <a href="#/about">About</a>
  <a href="#/not-found">Not Found Link</a>
  <component :is="currentView" />
< /template>

< script setup>
import { ref, computed } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import Home from './Home.vue';
import About from './About.vue';
import NotFound from './NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/not-found",
      name: "notFound",
      component: NotFound,
    },
  ],
});

export default router;

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
});

< /script>

==========
App.vue

< template>
  <nav>
    <RouterLink to="/home">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/not-found">NotFound</RouterLink>
  </nav>
< /template>

< script setup>
import { RouterLink, RouterView } from "vue-router";
< /script>
  `,
  redirecting: `
< template>< /template>

< script setup>
created() {
  this.$router.push('/my-path');
}
< /script>
  `,
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2>Basics</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-4">
        <h3>Props</h3>
        <h4>Assigning</h4>
        <pre>
          {{content.propsAssigning}}
        </pre>

        <h4>Declaring - Composition API</h4>
        <pre class="pre">
          {{content.propsDeclaringCompositionApi}}
        </pre>

        <h4>Declaring - Options API</h4>
        <pre class="pre">
          {{content.propsDeclaringOptionsApi}}
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
            <h4>v-if</h4>
            <pre class="pre">
              {{content.conditionalVIf}}
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>v-else-if</h4>
            <pre class="pre">
              {{content.conditionalVIfElse}}
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>v-show</h4>
            <pre class="pre">
              {{content.conditionalVShow}}
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
        <h4>v-for on Array</h4>
        <pre class="pre">
          {{content.listVForArray}}
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>v-for on Object</h4>
        <pre class="pre">
          {{content.listVForObject}}
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>v-for on Component</h4>
        <pre class="pre">
          {{content.listVForComponent}}
        </pre>
      </div>

    </div>

    <div class="row">
      <div class="col-sm-12">
        <h3>Template Refs ref=</h3>
      </div>
      <div class="col-sm-12 col-md-4">
        <h4>Accessing</h4>
        <pre class="pre">
          {{content.templateRefsAccessing}}
        </pre>
      </div>
    </div>

    <div class="row">
      <h3>Reactivity - ref() and reactive()</h3>

      <div class="col-sm-12 col-md-6">
        <h4>ref()</h4>
        <pre class="pre">
          {{content.reactivityRef}}
        </pre>
      </div>

      <div class="col-sm-12 col-md-6">
        <h4>reactive()</h4>
        <pre class="pre">
          {{content.reactivityReactive}}
        </pre>
      </div>

      <div class="col-sm-12 col-md-6">
        <h4>ref(): Reactive State</h4>
        <pre class="pre">
          {{content.reactivityRefState}}
        </pre>
      </div>

      <div class="col-sm-12 col-md-6">
        <h4>reactive(): Reactive State</h4>
        <pre class="pre">
          {{content.reactivityReactiveState}}
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
