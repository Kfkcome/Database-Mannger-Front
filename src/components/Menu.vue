<template>
  <el-container class="home-container">
    <el-header>
      <span>棉花数据库后台管理系统</span>
      <el-avatar class="el-avatar">{{ commonUserName }}</el-avatar>
      <el-button type="warning" @click="switchDatasource" class="el-button-switch-datasource">切换数据源</el-button>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside class="el-aside">
        <el-menu router active-text-color="#ffd04b">
          <el-menu-item index="/menu/home">
            <el-icon>
              <IconMenu />
            </el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu>
            <template #title>
              <el-icon>
                <Document />
              </el-icon>
              <span>数据</span>
            </template>

            <el-menu-item index="/menu/data/cultivar?class=cultivar">
              <template #title>
                <el-icon>
                  <Folder />
                </el-icon>
                <span style="font-size: 8px">cultivar</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/loop?class=loop">
              <template #title>
                <el-icon>
                  <Folder />
                </el-icon>
                <span style="font-size: 8px">loop</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/rna?class=rna">
              <template #title>
                <el-icon>
                  <Folder />
                </el-icon>
                <span style="font-size: 8px">rna</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/rnaStructure?class=rnaStructure">
              <template #title>
                <el-icon>
                  <Folder />
                </el-icon>
                <span style="font-size: 8px">rnaStructure</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/software?class=software">
              <template #title>
                <el-icon>
                  <Folder />
                </el-icon>
                <span style="font-size: 8px">software</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/species?class=species">
              <template #title>
                <el-icon>
                  <Folder />
                </el-icon>
                <span style="font-size: 8px">species</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/tissue?class=tissue">
              <template #title>
                <el-icon>
                  <Folder />
                </el-icon>
                <span style="font-size: 8px">tissue</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/tissueCultivar?class=tissueCultivar">
              <template #title>
                <el-icon>
                  <Folder />
                </el-icon>
                <span style="font-size: 8px">tissueCultivar</span>
              </template>
            </el-menu-item>
           
            <el-menu-item index="/menu/data/chromosome?class=chromosome">
              <template #title>
                <el-icon>
                  <Folder />
                </el-icon>
                <span style="font-size: 8px">chromosome</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/compartment?class=compartment">
              <template #title>
                <el-icon>
                  <Folder />
                </el-icon>
                <span style="font-size: 8px">compartment</span>
              </template>
            </el-menu-item>


          </el-sub-menu>
          <el-sub-menu>
            <template #title>
              <el-icon>
                <Setting />
              </el-icon>
              <span>权限管理</span>
            </template>
            <el-menu-item index="/menu/user">
              <template #title>
                <el-icon>
                  <Avatar />
                </el-icon>
                <span>用户列表</span>
              </template>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view :key="$route.fullPath"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {
  Document,
  Menu as IconMenu,
  Setting,
  Avatar,
  Folder

} from '@element-plus/icons-vue';
import { ElMessage, ElMessageBox } from "element-plus";
import axios from "axios";
import { getCurrentInstance, onMounted, ref } from "vue";

export default {
  name: "Menu",
  components: {
    Document,
    Setting,
    IconMenu,
    Avatar,
    Folder
  },
  setup() {
    const rowsPerPage = ref()
    const commonUserName = ref("User")
    const appConfig = getCurrentInstance().appContext.config;
    const commonRequest = getCurrentInstance().appContext.config.globalProperties.$commonRequest;

    // 登出
    function logout() {
      ElMessageBox.confirm(
        '是否要退出后台管理系统',
        {
          confirmButtonText: '确定退出',
          cancelButtonText: '取消',
          type: 'warning',
        }
      ).then(() => {
        ElMessage({
          type: 'success',
          message: '成功退出',
        })
        window.localStorage.removeItem("Authorization")
        const commonRequest = axios.create({
          baseURL: "http://localhost:5173/api",
          timeout: 100000
        });
        appConfig.globalProperties.commonRequest = commonRequest
        // 刷新界面
        location.reload()
      }).catch(() => {
        ElMessage({
          type: 'info',
          message: '取消',
        })
      })
    }

    onMounted(() => {
      if (window.localStorage.getItem("CommonUserName") !== null) {
        commonUserName.value = window.localStorage.getItem("CommonUserName")
      }
    })

    function switchDatasource() {
      commonRequest({
        method: "get",
        url: '/switch-datasource'
      }).then(res => {

      }).catch(err => {
        console.log(err)
      });
    }

    return {
      commonUserName,
      rowsPerPage,
      logout,
      switchDatasource
    }
  }
}
</script>

<style scoped lang="less">.home-container {
  height: 100%;
}

.el-header {
  min-width: 1200px;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-left: 0px;
  align-items: center;
  font-size: 20px;
}

span {
  margin-left: 20px;
}

.el-aside {
  min-width: 150px;
  height: 100vh;
}

.el-menu {}

.el-main {
  background-color: #EAEDF1;

}

.el-avatar {
  position: absolute;
  right: 205px;
}

.el-button-switch-datasource {
  margin-left: auto;
}</style>