<template>
  <div class="app-container">
    <TheSidebar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import TheTheSidebar from '@/views/TheSidebar.vue';


export default defineComponent({
  name: 'HomeView',
  components: {

    TheSidebar: TheTheSidebar
  },
});
</script>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  margin-left: 84px;
  transition: margin-left 0.5s;
  padding: 20px;
  background: #e4e9f5;
}

/* 侧边栏悬浮时调整边距 */
.shell:hover + .main-content {
  margin-left: 300px;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
  }
}
</style>
