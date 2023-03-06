<script setup lang="ts">
const bar = `
<template>
  // Static
  <blog-post title="My journey with Vue" />

  // Dynamic
  <blog-post :title="post.title"/>
</template>
`;
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
          {{ bar }}
        </pre>
      </div>
    </div>
  </div>
</template>
