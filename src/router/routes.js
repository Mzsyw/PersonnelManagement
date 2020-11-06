import MSite from "../pages/MSite/MSite";
import BusinessOne from "../pages/Business/BusinessOne";
import BusinessTwo from "../pages/Business/BusinessTwo";
import DevelopmentOne from "../pages/Development/DevelopmentOne";
import DevelopmentTwo from "../pages/Development/DevelopmentTwo";
import OperateOne from "../pages/Operate/OperateOne";
import OperateTwo from "../pages/Operate/OperateTwo";
import Generalmanager from "../pages/Generalmanager/Generalmanager";

export default [
    {
        path:'',
        redirect:'./msite'
    },
    {
        path:'/msite',
        component:MSite,
        children: [
            {
                path: '/businessOne',
                component: BusinessOne
            },
            {
                path: '/businessTwo',
                component: BusinessTwo
            },
            {
                path: '/developmentOne',
                component: DevelopmentOne
            },
            {
                path: '/developmentTwo',
                component: DevelopmentTwo
            },
            {
                path: '/operateOne',
                component: OperateOne,
            },
            {
                path: '/operateTwo',
                component: OperateTwo,
            },
            {
                path: '/generalmanager',
                component: Generalmanager,
            }
        ]
    },
]