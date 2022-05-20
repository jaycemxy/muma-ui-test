<template>
<div>
  <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
          <h1>木马 UI</h1>
          <h2>一个厉害的 UI 框架</h2>
          <p class="actions">
              <a href="https://github.com/jaycemxy">Github</a>
              <router-link to="/doc">开始</router-link>
          </p>
      </div>
  </div>
  <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-vue"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-typescript"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-tools"></use>
    </svg>
  </div>
</div>
</template>

<script lang="ts">
    import Topnav from '../components/Topnav.vue'
    export default {
        components: {Topnav}
    }
</script>

<style lang="scss" scoped>
$border-radius: 16px;
.topnavAndBanner {
  background: linear-gradient(45deg, rgba(218,230,224,1) 0%, rgba(220,218,218,1) 33%, rgba(231,211,207,1) 67%, rgba(235,215,203,1) 100%);
  // border-bottom-left-radius: 50% 40px;
  // border-bottom-right-radius: 50% 40px;
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
  > svg {
    height: 64px;
    width: 64px;
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #000;
      color: #fff;
      display: inline-block;
      padding: 4px 16px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
