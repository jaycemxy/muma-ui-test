<template>
  <div>导航栏 | 
    <router-link to="/">Joyce</router-link> |
    <router-link to="/xxx">Joyce2</router-link>
  </div>
  <hr/>
  <router-view />
</template>

<script>


export default {
  name: 'App',
}
</script>
