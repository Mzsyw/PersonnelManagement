import Mock from 'mockjs'

import data from './data.json'

Mock.mock('/msite',{code:0,data:data.companyinfo})

console.log('mockServe......')
