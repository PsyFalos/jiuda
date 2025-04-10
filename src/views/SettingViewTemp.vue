<template>
  <div class="account-center">
    <!-- 顶部横幅 -->
    <div class="banner">
      <h2>ProcessOn AI开工节</h2>
      <p>立享会员6折优惠！开启智能高效工作新篇章！</p>
      <el-button type="primary">立即领取</el-button>
    </div>

    <!-- 基本信息 -->
    <el-card class="section">
      <div class="section-header">
        <h3>基本信息</h3>
        <el-button type="text">编辑</el-button>
      </div>
      <div class="info-grid">
        <div class="info-item">
          <label>昵称</label>
          <div>{{ userInfo.nickname || 'PO_5E2D53' }}</div>
        </div>
        <!-- 其他基本信息字段... -->
      </div>
    </el-card>

    <!-- 账号权益 -->
    <el-card class="section">
      <h3>账号权益</h3>
      <div class="account-tier">
        <span>个人版账户</span>
        <el-tag type="warning">免费版</el-tag>
        <el-button size="small">升级</el-button>
      </div>
    </el-card>

    <!-- 账号安全 -->
    <el-card class="section">
      <h3>账号安全</h3>
      <div class="security-item">
        <span>手机号：</span>
        <el-button type="text">暂未绑定 立即绑定</el-button>
      </div>
      <!-- 其他安全项... -->
      <div class="social-bindings">
        <el-button v-for="social in socials" :key="social" circle>
          <component :is="social.icon" />
        </el-button>
      </div>
    </el-card>

    <!-- 设备管理 -->
    <el-card class="section">
      <h3>设备管理</h3>
      <p class="tip">1个账号最多仅允许10台设备登录</p>
      <div v-for="device in devices" :key="device.id" class="device-item">
        <div>
          <span>{{ device.name }}</span>
          <el-tag v-if="device.current" type="success">当前设备</el-tag>
        </div>
        <el-button type="text" @click="handleLogout(device)">下线</el-button>
      </div>
    </el-card>

    <!-- 邀请链接 -->
    <el-card class="section">
      <h3>邀请链接</h3>
      <div class="invite-link">
        <el-input :value="inviteLink" readonly />
        <el-button type="primary" @click="copyLink">复制</el-button>
      </div>
      <p class="tip">这是您的专属邀请链接，丰厚奖励等你来领</p>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userInfo = ref({
  nickname: '',
  industry: '无',
  company: '无',
  profession: '无',
  bio: '无'
})

const devices = ref([
  { id: 1, name: '网页端Edge_134.0.0.0', location: '辽宁省', current: true },
  { id: 2, name: '网页端Edge_133.0.0.0', location: '北京市' }
])

const inviteLink = ref('https://www.processson.com/i5469d25fe3949f4c21621bd2full_name=PO_5E2D53')

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(inviteLink.value)
    ElMessage.success('复制成功')
  } catch (err) {
    ElMessage.error('复制失败')
  }
}

const handleLogout = (device) => {
  // 处理设备下线逻辑
}
</script>

<style lang="scss" scoped>
.account-center {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  .banner {
    background: #673ab7;
    color: white;
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 20px;
    text-align: center;
  }

  .section {
    margin-bottom: 20px;

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .device-item, .security-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  }

  .invite-link {
    display: flex;
    gap: 10px;
    margin: 15px 0;
  }

  .tip {
    color: #999;
    font-size: 12px;
  }
}
</style>