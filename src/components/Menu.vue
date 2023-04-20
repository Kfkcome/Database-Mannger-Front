<template>

  <el-container class="home-container">
    <el-header>
      <span>棉花数据库后台管理系统</span>
      <el-avatar class="el-avatar">{{commonUserName}}</el-avatar>
      <el-button type="warning" @click="switchDatasource" class="el-button-switch-datasource">切换数据源</el-button>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside class="el-aside">
        <el-menu
            router
            active-text-color="#ffd04b"
        >
          <el-menu-item index="/menu/home">
            <el-icon><IconMenu/></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu >
            <template #title>
              <el-icon><Document/></el-icon>
              <span>数据</span>
            </template>

            <el-menu-item index="/menu/data/a1AHau?class=a1AHau" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">a1AHau</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/a1Hau?class=a1Hau" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">a1Hau</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/a2flltrChr?class=a2flltrChr" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">a2flltrChr</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/a2Hau?class=a2Hau" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">a2Hau</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/ad1Hau?class=ad1Hau" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">ad1Hau</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/b1flltrChr?class=b1flltrChr" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">b1flltrChr</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/b1Hau?class=b1Hau" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">b1Hau</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/c1flltrChr?class=c1flltrChr" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">c1flltrChr</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/c1Hau?class=c1Hau" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">c1Hau</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/chromosome?class=chromosome" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">chromosome</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/d1Hau?class=d1Hau" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">d1Hau</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/d3Hau?class=d3Hau" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">d3Hau</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/d5FlltrChr?class=d5FlltrChr" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">d5FlltrChr</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/d5Hau?class=d5Hau" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">d5Hau</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/d10Hau?class=d10Hau" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">d10Hau</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/cds?class=cds" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">cds</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/e1flltrChr?class=e1flltrChr" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">e1flltrChr</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/e1Hau?class=e1Hau" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">e1Hau</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/f1flltrChr?class=f1flltrChr" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">f1flltrChr</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/flltr8genomes5ltrClusterFamily?class=flltr8genomes5ltrClusterFamily" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">flltr8genomes5ltrClusterFamily</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/g1FlltrChr?class=g1FlltrChr" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">g1FlltrChr</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/g1Hau?class=g1Hau" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">g1Hau</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/g2Hau?class=g2Hau" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">g2Hau</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/gene?class=gene" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">gene</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/geneExp?class=geneExp" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">geneExp</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/genePavA1?class=genePavA1" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">genePavA1</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/genePavA2?class=genePavA2" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">genePavA2</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/genePavGar?class=genePavGar" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">genePavGar</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/genePavJ1?class=genePavJ1" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">genePavJ1</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/genePavJ2?class=genePavJ2" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">genePavJ2</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/genePavJ3Plus?class=genePavJ3Plus" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">genePavJ3Plus</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/genePavJ12?class=genePavJ12" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">genePavJ12</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/genePavJ13?class=genePavJ13" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">genePavJ13</span>
              </template>
            </el-menu-item>

            <el-menu-item index="/menu/data/genome?class=genome" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">genome</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/k2FlltrChr?class=k2FlltrChr" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">k2FlltrChr</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/k2Hau?class=k2Hau" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">k2Hau</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/orthogroups5genomes?class=orthogroups5genomes" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">orthogroups5genomes</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/orthogroups5genomesPlus?class=orthogroups5genomesPlus" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">orthogroups5genomesPlus</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/menu/data/protein?class=protein" >
              <template #title>
                <el-icon><Folder /></el-icon>
                <span style="font-size: 8px">protein</span>
              </template>
            </el-menu-item>


          </el-sub-menu>
          <el-sub-menu>
            <template #title>
              <el-icon><Setting/></el-icon>
              <span>权限管理</span>
            </template>
            <el-menu-item index="/menu/user" >
              <template #title>
                <el-icon><Avatar /></el-icon>
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
import {ElMessage, ElMessageBox} from "element-plus";
import axios from "axios";
import {getCurrentInstance, onMounted, ref} from "vue";

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
    const rowsPerPage=ref()
    const commonUserName=ref("User")
    const appConfig = getCurrentInstance().appContext.config;
    const commonRequest = getCurrentInstance().appContext.config.globalProperties.$commonRequest;

    // 登出
    function logout(){
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
        appConfig.globalProperties.commonRequest=commonRequest
        // 刷新界面
        location.reload()
      }).catch(() => {
        ElMessage({
          type: 'info',
          message: '取消',
        })
      })
    }

    onMounted(()=>{
      if (window.localStorage.getItem("CommonUserName") !== null) {
        commonUserName.value=window.localStorage.getItem("CommonUserName")
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

<style scoped lang="less">
  .home-container{
    height: 100%;
  }
  .el-header{
    min-width: 1200px;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-left: 0px;
    align-items:center;
    font-size: 20px;
    }
  span{
    margin-left: 20px;
  }

  .el-aside{
    min-width: 150px;
    height: 100vh;
  }

  .el-menu {
  }

  .el-main{
    background-color: #EAEDF1;

  }

  .el-avatar {
    position: absolute;
    right: 205px;
  }

  .el-button-switch-datasource{
    margin-left: auto;
  }

</style>