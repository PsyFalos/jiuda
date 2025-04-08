<!--
<template>
  <div class="menu-container">
    <div class="menu-container" @mouseenter="showButton = true" @mouseleave="showButton = false">
      <el-menu
          class="processon-menu"
          :collapse="isCollapse"
          :collapse-transition="false"
      >
        &lt;!&ndash; 菜单项（根据图片内容示例） &ndash;&gt;
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
        &lt;!&ndash; 其他菜单项... &ndash;&gt;

      </el-menu>

      &lt;!&ndash; 折叠按钮 &ndash;&gt;
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

.processon-menu:not(.el-menu&#45;&#45;collapse) {
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
</style>-->
<template>
  <div>
    <el-button type="primary" @click="confirmForm" style="margin-bottom: 20px;width: 100px;">保 存</el-button>
    <div ref="container" class="univer-container"></div>
  </div>
</template>


<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick} from 'vue';
import { ElMessage } from 'element-plus';
import {
  createUniver,
  defaultTheme,
  LocaleType,
  merge
} from '@univerjs/presets';
// 统一使用静态导入方式
import { UniverSheetsCorePreset } from '@univerjs/presets';
import UniverPresetSheetsCoreZhCN from '@univerjs/presets/preset-sheets-core/locales/zh-CN';
import UniverPresetSheetsCoreEnUS from '@univerjs/presets/preset-sheets-core/locales/en-US';

// 导入必须的样式
import '@univerjs/presets/lib/styles/preset-sheets-core.css';

const container = ref<HTMLElement | null>(null);
let univerAPI: any = null;

onMounted(async () => {
  console.log('开始初始化Univer');
  await nextTick();

  if (!container.value) {
    console.error('❌ 容器元素未找到');
    ElMessage.error('表格容器未初始化');
    return;
  }

  try {
    // 显示加载状态
    ElMessage.info('正在初始化表格引擎...');

    // 新增初始化重试机制
    let retryCount = 0;
    const initUniver = async () => {
      const { api } = createUniver({
        locale: LocaleType.ZH_CN,
        locales: {
          [LocaleType.EN_US]: merge({}, UniverPresetSheetsCoreEnUS),
          [LocaleType.ZH_CN]: merge({}, UniverPresetSheetsCoreZhCN)
        },
        theme: defaultTheme,
        presets: [
          UniverSheetsCorePreset({
            container: container.value!,
            config: {
              sheet: {
                defaultRowHeight: 25,
                defaultColWidth: 120,
                rowCount: 50,
                colCount: 20
              }
            }
          })
        ]
      });

      if (!api?.sheet && retryCount < 3) {
        retryCount++;
        console.warn(`初始化失败，第${retryCount}次重试...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return initUniver();
      }
      return api;
    };

    const api = await initUniver();

    if (api?.sheet) {
      const workbook = api.sheet.createWorkbook({
        name: '测试表格',
        sheetStyles: {
          rowCount: 50,
          colCount: 20,
          tabColor: '#409EFF'  // 新增标签颜色
        }
      });

      // 添加测试数据
      workbook.getActiveSheet()
          ?.getRange(0, 0, 5, 3)
          .setValues([
            ['姓名', '年龄', '城市'],
            ['张三', 28, '北京'],
            ['李四', 32, '上海'],
            ['王五', 25, '广州'],
            ['赵六', 30, '深圳']
          ]);

      ElMessage.success('表格初始化完成');
    }
  } catch (e) {
    console.error('❌ 初始化异常:', e);
    ElMessage.error(`初始化失败: ${e.message}`);
  }
});
const confirmForm = () => {
  if (univerAPI) {
    const snapshot = univerAPI.getWorkbookSnapshot();
    console.log('工作簿数据:', JSON.stringify(snapshot));
    ElMessage.success('保存成功');
  }
};

onBeforeUnmount(() => {
  if (univerAPI) {
    univerAPI.dispose();
  }
});
</script>

<style scoped>
.univer-container {
  width: 100%;
  height: calc(100vh - 100px);
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: hidden;
}

/* 确保表格区域可见 */
:deep(.univer-sheet-container) {
  opacity: 1 !important;
  visibility: visible !important;
  height: calc(100% - 40px) !important; /* 留出工具栏空间 */
}

/* 修复行列头显示 */
:deep(.univer-sheet-row-header),
:deep(.univer-sheet-column-header) {
  background-color: #f8fafc !important;
  z-index: 1 !important;
}

/* 单元格内容可见性 */
:deep(.univer-sheet-cell) {
  padding: 2px 4px !important;
  border-right: 1px solid #e2e8f0 !important;
  border-bottom: 1px solid #e2e8f0 !important;
}
</style>
