<template>
  <div class="menu-container">
    <div class="menu-container" @mouseenter="showButton = true" @mouseleave="showButton = false">
      <el-menu
          class="processon-menu"
          :collapse="isCollapse"
          :collapse-transition="false"
      >
        <!-- 菜单项（根据图片内容示例） -->
        <el-menu-item index="new">
          <el-icon><Plus /></el-icon>
          <span>+ 新建</span>
        </el-menu-item>
        <el-menu-item index="template">
          <el-icon><Files /></el-icon>
          <span>从模板新建</span>
        </el-menu-item>
        <el-menu-item index="new">
          <el-icon><Plus /></el-icon>
          <span>+ 新建</span>
        </el-menu-item>
        <el-menu-item index="template">
          <el-icon><Files /></el-icon>
          <span>从模板新建</span>
        </el-menu-item>
        <el-menu-item index="new">
          <el-icon><Plus /></el-icon>
          <span>+ 新建</span>
        </el-menu-item>
        <el-menu-item index="template">
          <el-icon><Files /></el-icon>
          <span>从模板新建</span>
        </el-menu-item>
        <!-- 其他菜单项... -->
        
      </el-menu>

      <!-- 折叠按钮 -->
      <transition name="fade">
        <div
            v-show="showButton"
            class="processon-collapse-btn"
            :class="{ 'collapsed': isCollapse }"
            @click="isCollapse = !isCollapse"
        >
          <el-icon :size="14" color="#666">
            <ArrowLeft v-if="!isCollapse" />
            <ArrowRight v-else />
          </el-icon>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ArrowLeft, ArrowRight, Plus, Files } from '@element-plus/icons-vue'

const isCollapse = ref(false)
const showButton = ref(false)
</script>

<style>
.processon-menu {
  border-right: none;
  transition: width 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
}

.processon-menu:not(.el-menu--collapse) {
  width: 240px; /* 与图片中的侧边栏宽度相似 */
}

.processon-collapse-btn {
  position: absolute;
  top: 50%;
  left: 232px; /* 初始展开位置 */
  transform: translateY(-50%);
  width: 18px;
  height: 32px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: all 0.2s;
}

.processon-collapse-btn.collapsed {
  left: 56px; /* 折叠后的位置 */
}

.processon-collapse-btn:hover {
  background: #f7f8fa;
  border-color: #409eff;
}

.processon-collapse-btn:hover .el-icon {
  color: #409eff !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>