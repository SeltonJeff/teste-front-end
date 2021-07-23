const routes = [
  { path: '/login', component: loginPage },
  { path: '/home', component: homePage }
]

const router = new VueRouter({
  routes
})

router.replace({ path: 'login', redirect: '/' })