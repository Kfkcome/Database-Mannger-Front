<template>
  <el-header>
    <el-button class="el-button-add" type="primary" @click="drawer=true">添加公告</el-button>
  </el-header>
  <el-timeline>
    <template v-for="(value,index) in notices" :key="index">
      <el-timeline-item :timestamp="value.endTime" placement="top">
        <el-card>
          <h4>{{value.title}}</h4>
          <p>{{value.content}}</p>
        </el-card>
      </el-timeline-item>
    </template>
  </el-timeline>
  <el-drawer
      size="50%"
      v-model="drawer"
      title="添加公告"
      :direction="direction"
      :show-close="false"
      @close="handleClose"
  >
    <el-form :model="notice" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="notice.title"/>
      </el-form-item>
      <el-form-item label="内容">
        <el-input v-model="notice.content"/>
      </el-form-item>
      <div class="block">
        <el-date-picker
            class="el-date-picker"
            v-model="dataTime"
            type="datetimerange"
            range-separator="To"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
        />
      </div>
      <el-button  type="primary" @click="addNotice" class="middle el-button-data-add">
        添加数据
      </el-button>
    </el-form>
  </el-drawer>
</template>

<script>
import {getCurrentInstance, onMounted, reactive, ref} from "vue";

export default {
  name: "Home",


  setup() {
    const commonRequest = getCurrentInstance().appContext.config.globalProperties.$commonRequest
    const dataTime=ref([])
    const notice=reactive({
      id: '',
      startTime: '',
      endTime: '',
      title: '',
      content: '',
    })
    const notices = ref([])
    const drawer = ref();
    const direction = ref('rtl')

    onMounted(()=>{
      getNotice()
    })

    function getNotice() {
      commonRequest({
        method: "get",
        url: `/notice/get`
      }).then(res => {
        notices.value=res.data.data.notices
      }).catch(err => {
        console.log(err)
      });
    }

    function addNotice() {
      notice.startTime=dataTime.value[0]
      notice.endTime=dataTime.value[1]

      commonRequest({
        method: "post",
        url: `/notice/add`,
        data:{
          // reactive 自动分散字段
          // notice:notice
          title: notice.title,
          content: notice.content,
          startTime: notice.startTime,
          endTime: notice.endTime,
        }
      }).then(res => {
      }).catch(err => {
        console.log(err)
      });

      clearNotice()
      getNotice()
    }

    function handleClose() {
      location.reload()
    }

    function clearNotice(){
      notice.title = ''
      notice.content = ''
      notice.startTime=''
      notice.endTime=''
    }


    return{
      notice,
      notices,
      drawer,
      dataTime,
      direction,
      addNotice,
      handleClose
    }
  },

}
</script>

<style scoped>
  .el-button-add {
    position: relative;
    left: 50%;
  }
  .el-button-data-add {
    margin-top: 20px;
    position: relative;
    left: 50%;
  }
  .block{
    position: relative;
    left: 16%;
  }
</style>