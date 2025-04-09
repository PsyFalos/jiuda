<template>
  <div class="page-container">
    <!-- 顶部导航栏 -->
    <div class="static-header">
      <div class="nav-content">
        <div class="nav-links">
          <el-link :underline="false" class="nav-item">文件</el-link>
          <el-link :underline="false" class="nav-item">模板</el-link>
        </div>
        <div class="nav-actions">
          <el-button-group>
            <el-button icon="el-icon-s-operation" size="mini" circle></el-button>
            <el-button icon="el-icon-sort" size="mini" circle></el-button>
          </el-button-group>
        </div>
      </div>
    </div>

    <!-- 卡片展示区 -->
    <div class="card-wrapper">
      <el-row :gutter="20">
        <el-col 
          v-for="(item, index) in 6"
          :key="index"
          :xs="24" 
          :sm="12"
          :md="8"
          :lg="6"
        >
          <el-card 
            class="adaptive-card"
            shadow="hover"
            :body-style="{ padding: '0', display: 'flex', flexDirection: 'column', height: '100%' }"
          >
            <a href="#">
              <img 
                src="@/assets/chanpin.png" 
                class="card-image"
              >
            </a>
            <div class="card-body">
              <div class="card-title">我的算式型号</div>
              <div class="card-meta">
                <span class="card-date">{{ currentDate }}</span>
                <div class="card-actions">
                  <el-button type="primary" icon="el-icon-connection" circle size="mini"></el-button>
                  <el-button type="danger" icon="el-icon-delete" circle size="mini"></el-button>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 分页器 -->
    <div class="pagination-container">
      <el-pagination
        layout="prev, pager, next"
        :total="100"
        prev-text="上一页"
        next-text="下一页"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
/* 页面容器 */
.page-container {
  max-width: 100vh;
  margin: 0 auto;
  padding: 0 20px;
}

/* 导航栏调整 */
.static-header {
  background: white;
  padding: 16px 0;  // 增加高度
  border-bottom: 1px solid #ebeef5;
  margin-bottom: 24px;

  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;

    .nav-links {
      display: flex;
      gap: 32px;

      .nav-item {
        font-size: 16px;
        color: #606266;
        transition: color 0.3s;

        &:hover {
          color: #409EFF;
        }
      }
    }
  }
}

/* 卡片布局优化 */
.card-wrapper {
  .adaptive-card {
    margin-bottom: 24px;  // 增加卡片间距
    transition: transform 0.2s;
    
    &:hover {
      transform: translateY(-3px);
    }

    .card-image {
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: 4px 4px 0 0;
    }

    .card-body {
      padding: 16px;
      flex: 1;
      display: flex;
      flex-direction: column;

      .card-title {
        font-weight: 500;
        margin-bottom: 8px;
      }

      .card-meta {
        margin-top: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .card-date {
          font-size: 12px;
          color: #909399;
        }

        .card-actions {
          display: flex;
          gap: 8px;
        }
      }
    }
  }
}

/* 响应式优化 */
@media (min-width: 1200px) {
  .adaptive-card {
    max-width: 280px;  // 控制最大宽度
    margin-left: auto;
    margin-right: auto;
  }
}

.pagination-container {
  margin: 32px 0;
  display: flex;
  justify-content: center;
}
</style>