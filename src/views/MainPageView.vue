<script>
import { ArrowDown, ArrowLeft, ArrowRight, Bell, Clock, Delete, Document, Folder, Grid, Plus, Search, Suitcase, SwitchButton, User, UserFilled } from '@element-plus/icons-vue'

export default {
  name: 'App',
  components: {
    ArrowRight,
    ArrowLeft,
    Plus,
    Clock,
    Folder,
    Suitcase,
    Document,
    Delete,
    Grid,
    Search,
    Bell,
    UserFilled,
    ArrowDown,
    User,
    SwitchButton,
  },
  setup() {
    return {
      Search,
      UserFilled,
    }
  },
  data() {
    const item = {

    }
    return {
      isCollapse: false,
      keyword: '',
      tableData: Array.from({ length: 20 }).fill(item),
      currentDate: new Date(),
      input2: '',
    }
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    handleSearch() { // 修正2：移除const
      if (!this.keyword.trim()) {
        this.$message.warning('请输入搜索内容')
        return
      }

      // 修正3：使用this.$router跳转
      this.$router.push({
        path: '/search',
        query: { q: this.keyword.trim() },
      })
    },
  },
}
</script>

<template>
  <el-config-provider namespace="ep">
    <div class="common-layout">
      <el-container>
        <el-aside
            :width="isCollapse ? '65px' : '200px'"
            style="border-right: 1px solid #eee; transition: all 0.3s; position: relative;"
        >
          <div class="logo">
            <transition name="custom-enter-only">
              <span
                  v-show="!isCollapse"
                  class="logo-text"
                  style="font-size:28px; font-weight: 800; margin-right: 3px; display: inline-block;"
              >
                匠模
              </span>
            </transition>
            <img src="/src/assets/jiu.jpg" alt="Logo">
          </div>

          <el-row style="margin-top: 20px; height: 40px; padding: 0 10px;">
            <el-col :span="24">
              <el-button
                  type="primary"
                  size="default"
                  :style="{
                  width: isCollapse ? '40px' : '100%',
                  minWidth: 'auto', /* 关键覆盖 */
                  padding: '0', /* 关键覆盖 */
                  // borderRadius: isCollapse ? '50%' : '4px' /* 可选圆角优化 */
                }"
                  style="display: inline-flex; transition: all 0.3s;"
              >
                <el-icon :size="20">
                  <Plus />
                </el-icon>
                <span v-show="!isCollapse" style="margin-left:5px">新建</span>
              </el-button>
            </el-col>
          </el-row>

          <!-- 添加 collapse 属性 -->
          <el-menu
              :collapse="isCollapse"
              :default-active="$route.path"
              class="el-menu-vertical-demo"
              router
              style="margin-top: 20px;"
              :collapse-transition="false"
          >
            <el-menu-item index="/recent-formulas">
              <!-- recent-formulas -->
              <el-icon><Clock /></el-icon>
              <template #title>
                <span>最近算式</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/my-formulas">
              <el-icon><Folder /></el-icon>
              <template #title>
                <span>我的算式</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/my-projects">
              <el-icon><Suitcase /></el-icon>
              <template #title>
                <span>我的项目</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/template-community">
              <el-icon><Grid /></el-icon>
              <template #title>
                <span>模板社区</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/recycle-bin">
              <el-icon><Delete /></el-icon>
              <template #title>
                <span>回收站</span>
              </template>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <div
            class="collapse-trigger"
            :style="{ left: isCollapse ? '64px' : '200px' }"
            @click="toggleCollapse"
        >
          <el-icon :size="20">
            <component
                :is="isCollapse ? 'ArrowRight' : 'ArrowLeft'"
                class="trigger-icon"
                :class="{ reverse: isCollapse }"
            />
          </el-icon>
        </div>

        <el-container>
          <!-- <el-header> -->
          <el-header style="display: flex; align-items: center; justify-content: space-between; font-size: 15px; line-height: 60px;background-color: #F6F7F8;">
            <el-col :span="5" :offset="0">
              <el-input
                  v-model="keyword"
                  :prefix-icon="Search"
                  placeholder="输入关键词进行搜索"
                  clearable
                  @keyup.enter="handleSearch"
              />
            </el-col>

            <div style="display: flex; align-items: center;">
              <el-dropdown>
                <el-badge is-dot class="item" size="large">
                  <el-icon class="el-icon-bell" style=" font-size: 20px; vertical-align: middle; ">
                    <Bell />
                  </el-icon>
                </el-badge>
                <template #dropdown>
                  <el-dropdown-menu style="width: 90px;">
                    <el-dropdown-item>
                      <el-badge :value="12" class="mark">
                        最近消息
                      </el-badge>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <el-badge :value="3" class="mark">
                        未读消息
                      </el-badge>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <!-- shape="square" -->

              <el-dropdown

                  placement="bottom-end"
                  style="display: flex; align-items: center; cursor: pointer;"
              >
                <!-- 触发区域 -->
                <div class="user-info-trigger">
                  <el-avatar
                      :icon="UserFilled"
                      :size="30"
                      style="margin-left: 15px; margin-right: 10px; vertical-align: middle;"
                  />
                  <span style="vertical-align: middle;">王小明</span>
                  <el-icon style="margin-left: 5px;">
                    <ArrowDown />
                  </el-icon>
                </div>

                <!-- 下拉菜单 -->
                <template #dropdown>
                  <el-dropdown-menu style="width: 120px;">
                    <el-dropdown-item>
                      <el-icon><User /></el-icon>
                      <span>个人中心</span>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                      <el-icon><SwitchButton /></el-icon>
                      <span>退出登录</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </el-header>
          <!-- </el-header> -->
          <el-main style="background-color: #F6F7F8;">
            <div class="main-container flex">
              <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                  <component :is="Component" />
                </transition>
              </router-view>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 4px);
}

/* 仅保留进场动画 */
.custom-enter-only-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.custom-enter-only-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

/* 禁用离场动画 */
.custom-enter-only-leave-active {
  transition: none !important;
  animation: none !important;
}

.logo {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 60px; /* 设置父容器高度 */
  width: 100%; /* 父容器宽度为100% */
}

.logo img {
  max-height: 60%; /* 让图片的高度自适应父容器 */
  max-width: 100%; /* 确保图片宽度也不会超出 */
}

/* 新增折叠控制器样式 */
.collapse-trigger {
  position: absolute;
  top: 50%;
  left: 200px; /* 初始位置与展开宽度一致 */
  transform: translateY(-50%);
  width: 20px;
  height: 40px;
  background: #fff;
  border: 1px solid #eee;
  border-left: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  z-index: 9999; /* 保证在最上层 */
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
}

/* 添加鼠标悬停动画 */
.collapse-trigger:hover {
  background: #f5f7fa;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.15);
}

/* 确保侧边栏不会出现滚动条 */
.el-aside {
  overflow: visible !important;
}

/* 调整菜单折叠时的图标间距 */
.el-menu--collapse {
  padding: 0;
}

/* 调整 logo 在折叠状态的显示 */
.logo img {
  max-height: 60%;
  max-width: 100%;
  transition: all 0.3s;
}

/* 新增按钮样式优化 */
.el-button {
  /* 重置 element-ui 的默认padding */
  padding: 9px 15px !important;
  /* 保证按钮内容对齐 */
  display: inline-flex !important;
  align-items: center;
}
.el-menu-item {
  overflow: hidden;
}

/* 图标位置微调 */
.el-menu--collapse .el-menu-item > i {
  transform: translateX(2px);
}

.el-menu-item > i {
  transition: transform 0.3s ease;
  transform: translateX(0);
}

.el-menu-vertical-demo {
  position: relative;
  z-index: 1;
}
</style>
