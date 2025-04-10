<template>
  <div class="layout-container">
    <header class="main-header">
      <nav class="nav-container">
        <!-- Logo 左侧固定 -->
        <div class="logo">
          <span class="logo-main">Process</span>
          <span class="logo-sub">On</span>
        </div>

        <!-- 导航菜单（居中定位） -->
        <div class="nav-center">
          <div class="horizontal-menu">
            <div class="menu-item active">个人<div class="active-line"></div></div>
            <div class="menu-item">推荐</div>
            <div class="menu-item">模板社区</div>
          </div>
        </div>
      </nav>
    </header>

    <!-- 主体内容 -->
    <main class="main-content">
      <!-- 活动横幅 -->
      <div class="promotion-banner">
        <h2>ProcessOn AI开工节</h2>
        <p>立享会员6折优惠！开启智能高效工作新篇章！</p>
        <el-button type="primary">立即领取</el-button>
        <div class="close-icon">×</div>
      </div>

      <!-- 基本信息卡片 -->
      <el-card class="info-card">
        <div class="card-header">
          <h3>基本信息</h3>
          <div class="header-right">
            <div class="avatar">P</div>
            <el-button type="text">编辑</el-button>
          </div>
        </div>

        <div class="info-grid">
          <div class="info-item">
            <label>昵称</label>
            <div class="info-content">PO_5E2D53</div>
          </div>
          <div class="info-item">
            <label>行业</label>
            <div class="info-content">无</div>
          </div>
          <div class="info-item">
            <label>公司</label>
            <div class="info-content">无</div>
          </div>
          <div class="info-item">
            <label>职业（学历）</label>
            <div class="info-content">无</div>
          </div>
        </div>
      </el-card>
    </main>
  </div>
</template>

<style scoped>
/* 基础布局 */
.layout-container {
  min-height: 100vh;
  background: #f5f7fa;
  display: flex;
  flex-direction: column;
}

/* 头部导航 */
.main-header {
  background: white;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}
/* 导航栏容器 */
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  height: 64px;
  display: flex;
  align-items: center;
  position: relative; /* 为居中定位提供基准 */
}

/* 新增居中容器 */
.nav-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}


/* Logo 精确布局 */
.logo {
  display: flex;
  align-items: baseline;
  margin-right: 60px; /* 与导航菜单间距 */
}
.logo-main {
  color: #673ab7;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 1.5px;
}
.logo-sub {
  color: #9c27b0;
  font-size: 22px;
  margin-left: 2px;
}

/* 导航菜单 */
.horizontal-menu {
  display: flex;
  gap: 50px; /* 精确匹配按钮间距 */
  position: relative;
  justify-content: center;
  align-items: center;
  left: -12px; /* 微调对齐 */
}
.menu-item {
  font-size: 16px;
  color: #666; /* 更接近图片的灰色 */
  padding: 8px 0;
  position: relative;
}
.active {
  color: #673ab7 !important; /* 强制覆盖默认色 */
}
.active-line {
  width: 38px;
  height: 3px;
  background: #673ab7;
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%); /* 精确居中下划线 */
}

/* 活动横幅 */
.promotion-banner {
  background: #673ab7;
  color: white;
  padding: 30px;
  border-radius: 4px;
  margin: 20px auto;
  max-width: 1200px;
  text-align: center;
  position: relative;
}

.promotion-banner h2 {
  margin-bottom: 10px;
  font-size: 24px;
}

.promotion-banner p {
  margin-bottom: 20px;
}

.close-icon {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  font-size: 20px;
}

/* 信息卡片 */
.info-card {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ffc107;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

/* 网格布局 */
.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.info-item label {
  color: #666;
  min-width: 100px;
}

.info-content {
  color: #333;
}
</style>