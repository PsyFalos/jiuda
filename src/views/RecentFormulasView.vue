<template>
  <div>
    <el-row type="flex" justify="space-between">
      <!-- 左侧内容 -->
      <el-col :span="20" style="display: flex; gap: 30px;">
        <el-link :underline="false">文件</el-link>
        <el-link :underline="false">模板</el-link>
      </el-col>

      <!-- 右侧按钮 -->
      <el-col :span="4" style="display: flex; justify-content: flex-end; gap: 10px;">
        <el-button :icon="Filter" size="mini" circle />
        <el-button :icon="Switch" size="mini" circle />
      </el-col>
    </el-row>

        <!-- <el-divider></el-divider> -->
  <!-- card 部分 -->
        <el-row style="margin-top: 20px;" >
          <el-col :span="4" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 1 : 0">
         <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <a href="http://localhost:8081/" target="_blank">
            <img src="@/assets/chanpin.png" class="image" style="cursor: pointer;">
          </a>
          <div style="padding: 10px;">
          <span>最近算式型号</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time></div>
            <div class="dibu" style="margin-top: 10px; text-align: center;">
              <el-button-group style="margin: 0 auto; display: block;">
                <el-button
                  type="primary"
                  :icon="Share"
                  style="
                    width: 60px;
                    padding: 8px 0;
                     /* <!-- 垂直方向留白 --> */
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                  "
                  plain
                ></el-button>
                <el-button
                  type="danger"
                  :icon="DeleteFilled"
                  style="
                    width: 60px;
                    padding: 8px 0;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                  "
                  plain
                ></el-button>
              </el-button-group>
            </div>
            </div>
           </el-card>
          </el-col>
        </el-row>
  <!-- 页码 部分 -->
  <el-row>
    <el-col :span="12" :offset="6">
      <el-pagination  layout="prev, pager, next"
      :total="1000"
      style="margin: 20px 0px;"
      prev-text="上一页"
      next-text="下一页">
      </el-pagination>
    </el-col>
  </el-row>

  </div>
</template>

<script>
import { Filter,Switch,Share,DeleteFilled
 } from '@element-plus/icons-vue'
export default {
  setup(){
  return {
    Filter,Switch,Share,DeleteFilled
   }
  },
  components: {
    Filter,Switch,Share,DeleteFilled
  },
  name: 'App',
  data() {
      const item = {

      };
      return {
        tableData: Array(20).fill(item),
        currentDate: new Date(),
        input2: ''
      }
    }
}
</script>

<style>
/* 卡片区域开始 */
.time {
      font-size: 13px;
      color: #999;
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }

    .button {
      padding: 0;
      float: right;
    }

    .image {
      width: 100%;
      display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .dibu {
    display: flex;
    align-items: center; /* 垂直居中 */
  }


  /* 卡片区域结束 */
</style>

