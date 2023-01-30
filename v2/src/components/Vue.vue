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
&lt;template>
  // Static
  &lt;blog-post title="My journey with Vue" />

  // Dynamic
  &lt;blog-post :title="post.title"/>
&lt;/template>
            </pre>

        <h4>Declaring - Composition API</h4>
        <pre class="pre">
&lt;script setup>
const props = defineProps(['foo']);

console.log(props.foo);
&lt;/script>

OR

&lt;script setup>
defineProps({
  title: String,
  likes: Number
});

console.log(props.likes);
&lt;/script>
            </pre>

        <h4>Declaring - Options API</h4>
        <pre class="pre">
&lt;script>
export default {
  props: ['foo'],
  setup(props) {
    console.log(props.foo);
  }
}
&lt;/script>

OR

&lt;script>
export default {
  props: {
    title: String,
    likes: Number,
  },
  setup(props) {
    console.log(props.likes);
  }
}
&lt;/script>
            </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h3>Sharing State</h3>
        <h4>Top Down</h4>
        <h5>Grandpa to Dad</h5>
        <pre class="pre">
// Grandpa.vue

&lt;template>
  &lt;dad grandpa-message="Hi from Grandpa" />
&lt;/template>

&lt;script setup>
import Dad from "@/Dad.vue";
&lt;/script>

==========

// Dad.vue

&lt;template>
  &lt;span>{{ GrandpaMessage }}&lt;/span>
&lt;/template>

&lt;script setup>
  defineProps({
    GrandpaMessage: String,
  });
&lt;/script>
            </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h3>Sharing State</h3>
        <h4>Bottom Up - Emits</h4>
        <h5>Child to Dad</h5>
        <pre class="pre">
// Dad.vue

&lt;template>
  &lt;child @handleButton="showAlert" />
&lt;/template>

&lt;script setup>
import Child from "@/Child.vue";

function showAlert(value) {
  alert(value);
};
&lt;/script>

==========

// Child.vue

&lt;template>
  &lt;button @click="handleClick">Button&lt;/button>
&lt;/template>

&lt;script setup>
import { defineEmits } from "vue";

const emit = defineEmits(['handleButton']);

function handleClick() {
  emit('handleButton', 'Clicked!');
}
&lt;/script>
            </pre>

        <h5>Child to Grandpa</h5>
        <pre class="pre">
// Grandpa.vue

&lt;template>
  &lt;dad @handleButton="showAlert" />
&lt;/template>

&lt;script setup>
import Dad from "@/Dad.vue";

function showAlert(value) {
  alert(value);
};
&lt;/script>

==========

// Dad.vue

&lt;template>
  &lt;child />
&lt;/template>

&lt;script setup>
import Child from "@/Child.vue";
&lt;/script>

==========

// Child.vue

&lt;template>
  &lt;button @click="$dad.$emit('handleButton', 'Clicked!')>Button&lt;/button>
&lt;/template>
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
&lt;template>
  // Inline
  &lt;button @click="counter++">Add 1&lt;/button>
  &lt;p>The button above has been clicked {{ counter }} times.&lt;/p>

  // Function
  &lt;button @click="greet">Greet&lt;/button>
  &lt;button @click="say('hello')">Say Hello&lt;/button>
&lt;/template>

&lt;script setup>
import { ref } from 'vue';

const counter = ref(0);

function greet(event) {
  // event is the native DOM event
  console.log(event.target.tagName);
}

function say(message) {
  console.log(message);
}
&lt;/script>
            </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>Event Modifiers</h4>
        <pre class="pre">
&lt;template>
  &lt;a @click.stop="doThis">&lt;/a>
  &lt;a @click.stop.prevent="doThat">&lt;/a>
  &lt;div @click.self="myFunction">...&lt;/div>
  &lt;form @submit.prevent="onSubmit">&lt;/form>
&lt;/template>
            </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>Key Modifiers</h4>
        <pre class="pre">
&lt;template>
  &lt;input @keyup.enter="submit" />
  &lt;input @keyup.page-down="onPageDown" />
  &lt;input @keyup.delete="onDelete" /> // captures both "Delete" and "Backspace" keys
&lt;/template>
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
&lt;template v-if="ok">
  &lt;h1>Title&lt;/h1>
  &lt;p>Paragraph 1&lt;/p>
  &lt;p>Paragraph 2&lt;/p>
&lt;/template>
        </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>v-else-if</h4>
            <pre class="pre">
&lt;template>
  &lt;div v-if="type === 'A'">A&lt;/div>
  &lt;div v-else-if="type === 'B'">B&lt;/div>
  &lt;div v-else>Else&lt;/div>
&lt;/template>
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>v-show</h4>
            <pre class="pre">
&lt;template>
  &lt;h1 v-show="ok">Hello!&lt;/h1>
&lt;/template>

The v-show always renders in the DOM just toggling the CSS.
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
&lt;template>
  &lt;li v-for="(item, index) in items" :key="item.message">
    { { item.message }}
  &lt;/li>
&lt;/template>

&lt;script setup>
import { ref } from 'vue';

const items = ref([
  { message: 'Foo' },
  { message: 'Bar' },
]);
&lt;/script>
            </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>v-for on Object</h4>
        <pre class="pre">
&lt;template>
   &lt;ul>
    &lt;li v-for="(value, key, index) in myObject" :key="index">
      { { index }}. { { key }}: { { value }}
      // 0. title: My Title
      // 1. author: My Author
    &lt;/li>
  &lt;/ul>
&lt;/template>

&lt;script setup>
import { reactive } from 'vue';

const myObject = reactive({
  title: 'My Title',
  author: 'My Author',
});
&lt;/script>
            </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>v-for on Component</h4>
        <pre class="pre">
&lt;my-component
  v-for="(item, index) in items"
  :item="item"
  :index="index"
  :key="item.id"
/>
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
&lt;template>
  &lt;input ref="input" />
&lt;/template>

&lt;script setup>
import { ref, onMounted } from 'vue';

const input = ref(null);

onMounted(() => {
  input.value.focus();
});
&lt;/script>
            </pre>
      </div>
    </div>

    <div class="row">
      <h3>Reactivity - ref() and reactive()</h3>

      <div class="col-sm-12 col-md-6">
        <h4>ref()</h4>
        <pre class="pre">
// Use for scalar types

&lt;script setup>
import {ref} from 'vue';

const title = ref('Title');
const price = ref(9.99);

console.log(title.value);
console.log(price.value);
&lt;/script>
            </pre>
      </div>

      <div class="col-sm-12 col-md-6">
        <h4>reactive()</h4>
        <pre class="pre">
// Use for compound types

&lt;script setup>
import {reactive} from 'vue';

const product = reactive({
  title: 'Title',
  price: 9.99
});

console.log(product.title);
&lt;/script>
            </pre>
      </div>

      <div class="col-sm-12 col-md-6">
        <h4>ref(): Reactive State</h4>
        <pre class="pre">
&lt;template>
  &lt;button @click="increment">
    { { count }}
  &lt;/button>
&lt;/template>

&lt;script>
import { ref } from 'vue';

const count = ref(0)

function increment() {
  count.value++
}
&lt;/script>
            </pre>
      </div>

      <div class="col-sm-12 col-md-6">
        <h4>reactive(): Reactive State</h4>
        <pre class="pre">
&lt;template>
  &lt;button @click="increment">
    { { state.count }}
  &lt;/button>
&lt;/template>

&lt;script setup>
import { reactive } from 'vue';

const state = reactive({ count: 0 });

function increment() {
  state.count++
};
&lt;/script>
            </pre>
      </div>
    </div>

    <div class="row">
      <h3>Routing</h3>
      <div class="col-sm-12 col-md-4">
        <h4>Simple Routing from Scratch</h4>
        <pre class="pre">
&lt;template>
  &lt;a href="#/">Home&lt;/a>
  &lt;a href="#/about">About&lt;/a>
  &lt;a href="#/non-existent-path">Broken Link&lt;/a>
  &lt;component :is="currentView" />
&lt;/template>

&lt;script setup>
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

&lt;/script>

==========
App.vue

&lt;template>
  &lt;nav>
    &lt;RouterLink to="/home">Home&lt;/RouterLink>
    &lt;RouterLink to="/about">About&lt;/RouterLink>
    &lt;RouterLink to="/not-found">NotFound&lt;/RouterLink>
  &lt;/nav>
&lt;/template>

&lt;script setup>
import { RouterLink, RouterView } from "vue-router";
&lt;/script>
            </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>Redirecting</h4>
        <pre class="pre">
&lt;template>&lt;/template>

&lt;script setup>
created() {
  this.$router.push('/my-path');
}
&lt;/script>
            </pre>
      </div>

    </div>
  </div>
</template>
