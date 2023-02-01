<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <header class="header container-fluid">
    <div class="wrapper">
      <div class="header__top container">
        <RouterLink class="header__top-link" to="/">
          <h1 class="col-sm-12 col-md-6 header__top-title"></h1>
          <h1 class="col-sm-12 col-md-6 header__top-subtitle">Check Everyday</h1>
        </RouterLink>
      </div>

      <nav class="header__nav container">
        <RouterLink class="header__nav-option" to="/html">HTML</RouterLink>
        <RouterLink class="header__nav-option" to="/css">CSS</RouterLink>
        <RouterLink class="header__nav-option" to="/js">JS</RouterLink>
        <RouterLink class="header__nav-option" to="/ts">TS</RouterLink>
        <RouterLink class="header__nav-option" to="/vue">Vue</RouterLink>
        <RouterLink class="header__nav-option" to="/react">React</RouterLink>
        <RouterLink class="header__nav-option" to="/sql">SQL</RouterLink>
      </nav>
    </div>
  </header>

  <footer class="footer">
    <a class="footer__link" href="https://asone.studio" target="_blank">developed by As One</a>
  </footer>
  <RouterView />
</template>
