<template>
  <div>
    <el-button
        type="primary"
        @click="saveWorkbook"
        style="margin-bottom: 20px; width: 100px;"
    >
      保 存
    </el-button>
    <div ref="container" class="univer-container"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { createUniver, defaultTheme, LocaleType, merge } from '@univerjs/presets'
import { UniverSheetsCorePreset } from '@univerjs/presets/preset-sheets-core'
import UniverPresetSheetsCoreZhCN from '@univerjs/presets/preset-sheets-core/locales/zh-CN'
import '@univerjs/presets/lib/styles/preset-sheets-core.css'
import {ElMessage} from "element-plus";

const container = ref<HTMLElement | null>(null)
let univerAPI: any = null

onMounted(() => {
  if (!container.value) return

  const { univer, univerAPI: api } = createUniver({
    locale: LocaleType.ZH_CN,
    locales: {
      [LocaleType.ZH_CN]: merge({}, UniverPresetSheetsCoreZhCN),
    },
    theme: defaultTheme,
    presets: [
      UniverSheetsCorePreset({
        container: container.value, // 直接使用DOM元素
      }),
    ],
  })

  univerAPI = api
  // 创建新工作簿
  univerAPI.createWorkbook({
    name: '我的表格',
    sheets: [{
      id: 'sheet-001',
      name: 'Sheet1',
      cellData: {
        0: {
          0: { v: 'Hello' },
          1: { v: 'Univer' }
        }
      }
    }]
  })
})

// 保存工作簿
const saveWorkbook = () => {
  if (!univerAPI) return

  const workbookData = univerAPI.getActiveWorkbook()?.save()
  console.log('工作簿数据:', JSON.stringify(workbookData))
  ElMessage.info('工作簿数据: '+JSON.stringify(workbookData))
  // 这里可以添加保存到后端的逻辑
  // axios.post('/api/save-workbook', workbookData)
  ElMessage.success('保存成功')
}

onBeforeUnmount(() => {
  if (univerAPI) {
    univerAPI.dispose()
  }
})
</script>

<style scoped>
.univer-container {
  width: 100%;
  height: calc(100vh - 100px);
  border: 1px solid #e8e8e8;
}
</style>