//异步获取数据
import {reqDepartment} from "../api";
import {RECEIVE_COMPANYINFO} from "./mutations-types";


export default {
    async getDepartment({commit}){
        const result = await reqDepartment()
        const info = result.data
        commit(RECEIVE_COMPANYINFO,{info})

    }
}
