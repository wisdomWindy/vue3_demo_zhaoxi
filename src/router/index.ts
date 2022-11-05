import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [{
  path: '/',
  redirect:'/home'
},{
  path:'/home',
  component:() => import('@/views/Home.vue'),
},{
  path:'/friendFlower',
  component:() => import('@/views/FriendFlower.vue')
},{
  path:'/loveFlower',
  component:() => import('@/views/LoveFlower.vue')
},{
  path:'/birthdayFlower',
  component:() => import('@/views/BirthdayFlower.vue')
},{
  path:'/WeddingFlower',
  component:() => import('@/views/WeddingFlower.vue')
},{
  path:'/personCenter',
  component:() => import('@/views/PersonCenter.vue')
},{
  path:'/flowerDetail',
  component:() => import('@/views/FlowerDetail.vue')
}]

export default createRouter({
  routes,
  history:createWebHashHistory()
})