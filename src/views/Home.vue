<template>
<div>
  <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
          <h1>木马 UI</h1>
          <h2>基于Vue3.0的UI框架</h2>
          <p class="actions">
              <a href="https://github.com/jaycemxy">Github</a>
              <router-link to="/doc">开始</router-link>
          </p>
      </div>
  </div>

  <div class="features">
    <ul>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用了 Vue3.0 Composition API</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-tools"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
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
.topnavAndBanner {
  background: linear-gradient(45deg, rgba(218,230,224,1) 0%, rgba(220,218,218,1) 33%, rgba(231,211,207,1) 67%, rgba(235,215,203,1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
  width: 400px;
  margin: 0 auto;
  padding: 0 10px;
  
  @media(min-width: 800px){
    width: 800px;
    >ul {
      >li {
        width: 50%;
      }
    }
  }

  @media(min-width: 1200px){
    width: 1200px;
    >ul {
      >li {
        width: 33.3333%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas: 
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
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
    margin-top: 30px;
    a {
      margin:0 8px;
      background: #000;
      color: #fff;
      display: inline-block;
      padding: 4px 16px;
      border-radius: 16px;
      &:hover {
        text-decoration: none;
        box-shadow: 0 5px 5px rgb(51 51 51 / 20%);
        transition: all .25s;
      }
    }
  }
}
</style>
