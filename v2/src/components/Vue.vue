<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2>Basics</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
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
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <h3>Events Handlers</h3>
          <div class="col-sm-12 col-md-4">
            <h4>Method Handlers</h4>
            <pre class="pre">
&lt;template>
  &lt;button @click="greet">Greet&lt;/button>
  &lt;button @click="say('hello')">Say hello&lt;/button>
  &lt;button @click="say('bye')">Say bye&lt;/button>
&lt;/template>

&lt;script setup>
import { ref } from 'vue';

const name = ref('Vue.js');

function greet(event) {
  alert(`Hello ${name.value}!`);
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName);
  }
}

function say(message) {
  alert(message);
}
&lt;/script>
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Inline Handlers</h4>
            <pre class="pre">
&lt;template>
  &lt;button @click="counter++">Add 1&lt;/button>
  &lt;p>The button above has been clicked {{ counter }} times.&lt;/p>
&lt;/template>

&lt;script setup>
import { ref } from 'vue';

const counter = ref(0);
&lt;/script>
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Event Modifiers</h4>
            <pre class="pre">
&lt;template>
  &lt;a @click.stop="doThis">&lt;/a>

  &lt;form @submit.prevent="onSubmit">&lt;/form>

  &lt;a @click.stop.prevent="doThat">&lt;/a>

  &lt;form @submit.prevent="onSubmit">&lt;/form>

  &lt;div @click.self="doThat">...&lt;/div>
&lt;/template>
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Key Modifiers</h4>
            <pre class="pre">
&lt;template>
  &lt;input @keyup.enter="submit" />

  &lt;input @keyup.page-down="onPageDown" />

.delete - captures both "Delete" and "Backspace" keys
&lt;/template>
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
            <h4>v-if</h4>
            <pre class="pre">
&lt;template v-if="ok">
  &lt;h1>Title&lt;/h1>
  &lt;p>Paragraph 1&lt;/p>
  &lt;p>Paragraph 2&lt;/p>
&lt;/template>

data() {
  return {
  seen: true
  }
}
        </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>v-else-if</h4>
            <pre class="pre">
&lt;template>
  &lt;div v-if="type === 'A'">A&lt;/div>
  &lt;div v-else-if="type === 'B'">
    B
  &lt;/div>
  &lt;div v-else-if="type === 'C'">
    C
  &lt;/div>
  &lt;div v-else>Not A/B/C&lt;/div>
&lt;/template>
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>v-show</h4>
            <pre class="pre">
&lt;template>
  &lt;h1 v-show="ok">Hello!&lt;/h1>
  &lt;/template>
The difference is that an element with v-show will always be rendered and remain in the DOM; v-show only toggles the display CSS property of the element.
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
            <h4>v-for</h4>
            <pre class="pre">
&lt;template>
  &lt;li v-for="item in items" :key="item.message">
<!--  {{ item,message }} -->
  &lt;/li>

OR

  &lt;li v-for="(item, index) in items" :key="item.message">
    <!-- {{ parentMessage }} - {{ index }} - {{ item,message }} -->
  &lt;/li>
&lt;/template>

&lt;script setup>
import { ref } from 'vue';

const parentMessage = ref('Parent');
const items = ref([{ message: 'Foo' }, { message: 'Bar' }]);
&lt;/script>
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>v-for on Template</h4>
            <pre class="pre">
&lt;template v-for="todo in todos" :key="todo.name">
  &lt;li v-if="!todo.isComplete">
  <!--  {{ todo.name }} -->
  &lt;/li>
&lt;/template>

&lt;script setup>
import { ref } from 'vue';

const parentMessage = ref('Parent');
const items = ref([{ message: 'Foo' }, { message: 'Bar' }]);
&lt;/script>
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>v-for Object</h4>
            <pre class="pre">
&lt;template>
  &lt;ul>
    &lt;li v-for="value in myObject" :key="key.value">
      <!-- {{ value }} -->
    &lt;/li>
  &lt;/ul>

OR

   &lt;ul>
    &lt;li v-for="(value, key, index) in myObject" :key="key.value">
              <!--  {{ index }}. {{ key }}: {{ value }} -->
    &lt;/li>
  &lt;/ul>
&lt;/template>

&lt;script setup>
import { reactive } from 'vue';

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10',
});
&lt;/script>
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>v-for with a Range</h4>
            <pre class="pre">
&lt;template>
  &lt;span v-for="n in 10">{{ n }}&lt;/span>
&lt;/template>
Note here n starts with an initial value of 1 instead of 0.
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>v-for with a Component</h4>
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
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <h3>Template Refs</h3>
          <div class="col-sm-12 col-md-4">
            <h4>Accessing the Refs</h4>
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

          <div class="col-sm-12 col-md-4">
            <h4>Refs inside v-for</h4>
            <pre class="pre">
&lt;template>
  &lt;ul>
    &lt;li v-for="item in list" ref="itemRefs">
      {{ item }}
    &lt;/li>
  &lt;/ul>
&lt;/template>

&lt;script>
import { ref, onMounted } from 'vue';

const list = ref([1, 2, 3]);

const itemRefs = ref([]);

onMounted(() => {
  alert(itemRefs.value.map(i => i.textContent))
});
&lt;/script>
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Ref on Component</h4>
            <pre class="pre">
&lt;template>
  &lt;Child ref="child" />
&lt;/template>

&lt;script setup>
import { ref, onMounted } from 'vue';
import Child from './Child.vue';

const child = ref(null);

onMounted(() => {
  child.value;
});
&lt;/script>
            </pre>
          </div>

        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <h3>Reactivity Fundamentals</h3>
          <div class="col-sm-12 col-md-4">
            <h4>Declaring Reactive State</h4>
            <pre class="pre">
&lt;template>
  &lt;button @click="increment">
<!--    {{ state.count }}-->
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

          <div class="col-sm-12 col-md-4">
            <h4>Reactive Variables with ref()</h4>
            <pre class="pre">
&lt;template>
  &lt;button @click="increment">
<!--    {{ count }}-->
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

          <div class="col-sm-12 col-md-4">
            <h4>Ref on Component</h4>
            <pre class="pre">
&lt;template>
  &lt;Child ref="child" />
&lt;/template>

&lt;script setup>
import { ref, onMounted } from 'vue';
import Child from './Child.vue';

const child = ref(null);

onMounted(() => {
  child.value;
});
&lt;/script>
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>ref()</h4>
            <pre class="pre">
&lt;script setup>
const title = ref('shirt');
const description = ref('description');
const price = ref(9.99);
&lt;/script>
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>reactive()</h4>
            <pre class="pre">
&lt;script setup>
const product = reactive({
  title: 'shirt',
  description: 'description',
  price: 9.99
});
&lt;/script>
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

==================================================
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
    </div>
  </div>
</template>
