<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>

#nav {
  text-align: left;
  padding: 10px 0 30px 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #409eff;
}
</style>
