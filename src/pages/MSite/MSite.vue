<template>
    <el-container class="msite-container">
        <el-header>人员管理</el-header>
        <el-container >
            <el-aside width="200px">
                <el-menu style="background-color: #D3DCE6;" unique-opened>
                    <template v-for="departments in companyinfo">
                        <el-submenu :index="departments.id+''" v-if="departments.departmentOne && departments.departmentOne.length" :key="departments.id">
                            <template slot="title">
                                <i :class="departments.icon"></i>
                                <span>{{departments.name}}</span>
                            </template>
                            <template v-for="departmentOne in departments.departmentOne">
                                <el-submenu :index="departmentOne.path+''" v-if="departmentOne.departmentTwo && departmentOne.departmentTwo.length" :key="departmentOne.id">
                                    <template slot="title">
                                        <i :class="departmentOne.icon"></i>
                                        <span>{{departmentOne.name}}</span>
                                    </template>
                                    <el-menu-item :index="departmentTwo.path+''" v-for="departmentTwo in departmentOne.departmentTwo"
                                                  :key="departmentTwo.id" @click="toRouter(departmentTwo)">
                                        <template slot="title">
                                            <span>{{departmentTwo.name}}</span>
                                        </template>
                                    </el-menu-item>
                                </el-submenu>
                                <el-menu-item :index="'/'+departmentOne.path" v-if="departmentOne.people && departmentOne.people.length"
                                              :key="departmentOne.id" @click="toRouter(departmentOne)">
                                    <template slot="title">
                                        <span>{{departmentOne.name}}</span>
                                    </template>
                                </el-menu-item>
                            </template>
                        </el-submenu>
                        <el-menu-item :index="'/'+departments.path" v-if="departments.people && departments.people.length"
                                      :key="departments.id" @click="toRouter(departments)">
                            <template slot="title">
                                <i :class="departments.icon"></i>
                                <span>{{departments.name}}</span>
                            </template>
                        </el-menu-item>
                    </template>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view ></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script type="text/ecmascript-6">
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                

            }
        },
        mounted() {
            this.$store.dispatch('getDepartment')
        },
        computed:{
            ...mapState(['companyinfo'])
        },
        methods:{
            toRouter(detail){
                this.$router.replace({path:detail.path, query: {table: detail}})
            }
        }
    }
</script>

<style scoped>
    .msite-container{

        height: 100%;
    }
    .el-header{
        background-color: #B3C0D1;

    }
    .el-aside {
        background-color: #D3DCE6;
    }
    .el-menu{
        border:none;
    }
    .el-main {
        background-color: #E9EEF3;
    }
</style>