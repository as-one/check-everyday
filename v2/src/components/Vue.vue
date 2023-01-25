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
            <h4>In &lt;script setup></h4>
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

            <h4>In non &lt;script setup></h4>
            <pre class="pre">
&lt;script>
export default {
  props = ['foo'],
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

            <h4>Using Props</h4>
            <pre>
&lt;template>
  &lt;blog-post title="My journey with Vue" />

Or dynamic

  &lt;blog-post :title="post.title"/>
&lt;/template>
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Top Down</h4>
            <pre class="pre">
// Grandpa.vue
&lt;template>
  &lt;dad-component grandpa-message="Hi from Grandpa" />
&lt;/template>

&lt;script setup>
import DadComponent from "@/components/DadComponent.vue";

defineProps({
  GrandpaMessage: String,
});

&lt;/script>


===================================================


// Dad.vue
&lt;template>
  &lt;span>"Hi from Grandpa"&lt;/span>
  &lt;span>{{ GrandpaMessage }}&lt;/span>

&lt;/template>

===================================================

// Child.vue
&lt;template>
<!--  &lt;span>"Hi from Grandpa"&lt;/span>-->
<!--  &lt;span>{{ GrandpaMessage }}&lt;/span>-->

&lt;/template>
            </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Bottom Up - Emits</h4>
            <pre class="pre">
// Dad.vue - Dad &lt; Child
&lt;template>
  &lt;child @handleButton="showAlert" />
&lt;/template>

&lt;script setup>
import Child from "@/components/Child.vue";

function showAlert(value) {
  alert(value);
};
&lt;/script>

===================================================

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

  =======================================
// Grandpa.vue - Grandpa &lt; Dad &lt; Child
&lt;template>
  &lt;dad @handleButton="showAlert" />
&lt;/template>

&lt;script setup>
import Dad from "@/components/Dad.vue";

function showAlert(value) {
  alert(value);
};
&lt;/script>

===================================================

// Dad.vue
&lt;template>
  &lt;child />
&lt;/template>

&lt;script setup>
import Child from "@/components/Child.vue";
&lt;/script>

===================================================

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
      <div class="col-sm-12 col-md-4">
        <h3>Events Handlers</h3>
        <div class="row">
          <div class="col-sm-12">
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
        </div>

        <div class="row">
          <div class="col-sm-12">
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
        </div>

        <div class="row">
          <div class="col-sm-12">
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

  </div>
</template>
