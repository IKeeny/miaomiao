export default {
    path: '/movie',
    component:()=>import('@/views/Movie'),
    children: [
        //以/开头的嵌套路径会被当做根路径，这让你可以充分的使用嵌套组件而无需设置嵌套的路径
        {
            path:'city',
            component: ()=>import('@/components/City')
        },{
            path:'comingSoon',
            component: ()=>import('@/components/ComingSoon')
        },{
            path:'nowPlaying',
            component: ()=>import('@/components/NowPlaying')
        },{
            path:'search',
            component: ()=>import('@/components/Search')
        },{
            path:'/movie',
            redirect:'/movie/nowPlaying'
        }
    ]
}