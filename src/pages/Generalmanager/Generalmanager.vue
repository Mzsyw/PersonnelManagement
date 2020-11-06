<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/msite' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{tableData.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <el-input placeholder="请输入内容"  class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <el-table :data="tableData.people" border style="width: 100%">
                <el-table-column prop="id" label="ID" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="age" label="地址" width="180">
                </el-table-column>
                <el-table-column prop="gender" label="性别" width="180">
                </el-table-column>
                <el-table-column prop="education" label="学历" width="180">
                </el-table-column>
            </el-table>
        </el-card>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {

            }
        },
        mounted() {
            console.log(this.$route.query.table)
        },
        computed:{
            tableData(){
                return this.$route.query.table
            }
        }
    }
</script>

<style>
    .el-breadcrumb{
        margin-bottom :15px;
        font-size :12px;
    }
    .el-card{
        box-shadow: 0 1px 1px rgba(0,0,0,0.15) !important;
    }
    .el-table{
        margin-top:15px
    }
</style>