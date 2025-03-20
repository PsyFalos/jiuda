<template>
  <div
      class="shell"
      :style="{ width: sidebarWidth }"
      @mouseenter="expand"
      @mouseleave="collapse"
  >
    <ul class="nav">
      <!-- 菜单项结构 -->
      <li
          v-for="(item, index) in menuItems"
          :key="index"
          :class="{ active: activeIndex === index }"
          @click="setActive(index)"
      >
        <a :href="item.link">
          <div class="icon">
            <i v-if="item.icon" :class="item.icon"></i>
            <div v-if="item.img" class="imageBox">
              <img :src="item.img" alt="">
            </div>
          </div>
          <div class="text">{{ item.text }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const isExpanded = ref(false)
const activeIndex = ref(0)

const menuItems = [
  {
    img: './goat.jpg',
    text: '山羊の前端小窝',
    link: '#'
  },
  {
    icon: 'iconfont icon-cangku',
    text: 'Home',
    link: '#home'
  },
  // 其他菜单项...
]

const sidebarWidth = computed(() => {
  return isExpanded.value ? '300px' : '84px'
})

const expand = () => isExpanded.value = true
const collapse = () => isExpanded.value = false
const setActive = (index) => activeIndex.value = index
</script>

<style scoped>
/* 原CSS样式稍作调整 */
.shell {
  position: fixed;
  height: 100%;
  transition: width 0.5s;
  /* 其他样式... */
}

/* 保留原有样式，调整右侧间距 */
.main-content {
  margin-left: 84px;
  transition: margin-left 0.5s;
}
.shell:hover + .main-content {
  margin-left: 300px;
}
</style>