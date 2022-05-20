<template>
    <div class="layout">
        <Topnav :toggleMenuButtonVisible="true" class="nav"/>
        <div class="content">
            <aside v-if="asideVisible">
                <h2>文档</h2>
                <ol>
                  <li>
                    <router-link to="/doc/intro">介绍</router-link>
                  </li>
                  <li>
                    <router-link to="/doc/get-started">安装</router-link>
                  </li>
                  <li>
                    <router-link to="/doc/install">快速开始</router-link>
                  </li>
                </ol>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
    import { inject, Ref } from 'vue'
    import Topnav from '../components/Topnav.vue'

    export default {
        components: {Topnav},
        setup(){
            const asideVisible = inject<Ref<boolean>>('asideVisible')
            // console.log('doc aside 获取的 asideVisible 值为：'+ asideVisible.value)
            return {asideVisible}
        }
    }
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}


aside {
  background: white;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
  transition: .4s cubic-bezier(.68,.18,.53,.18) .1s;
  z-index: 1;
  > h2 {
    margin-bottom: 4px;
    margin-top: 16px;
    padding: 0 16px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 8px 16px;
        text-decoration: none;
      }
      .router-link-active {
        background: #eefff7;
        border-right: 3px solid #42b983;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>
