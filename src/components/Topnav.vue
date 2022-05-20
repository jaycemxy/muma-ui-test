<template>
    <div class="topnav">
        <div class="logo">
          <svg class="icon">
            <use xlink:href="#icon-muma"></use>
          </svg>
        </div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
        <span class="toggleAside" @click="toggleAside"></span>
    </div>
</template>

<script lang="ts">
    import {inject, Ref} from 'vue'
    export default {
        setup(){
            const asideVisible = inject<Ref<boolean>>('asideVisible')
            // console.log('topnav获取的 asideVisible 值为：'+ asideVisible.value)
            const toggleAside = ()=> {
                asideVisible.value = !asideVisible.value
            }
            return {toggleAside}
        }
    }
</script>

<style lang="scss" scoped>
.topnav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #ffffff;
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      height: 32px;
      width: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
      display: inline-block;
      width: 24px;
      height: 24px;
      background: green;
      position:absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      display: none;
  }
  @media(max-width:500px){
    > .menu{display: none;}
    > .logo{margin: 0 auto;}
    > .toggleAside{display: inline-block;}
  }
}
</style>