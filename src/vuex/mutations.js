import {RECEIVE_COMPANYINFO} from './mutations-types'

export default {
    [RECEIVE_COMPANYINFO](state,{info}){
        state.companyinfo = info
    }
}