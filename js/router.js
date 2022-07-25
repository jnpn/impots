
// router

const Dummy =    { template: '<div>?</div>' };

const routes = [
  { path: '/', component: Impots },
  { path: '/settings', component: Settings },
  { path: '/actions/share', component: Dummy },
  { path: '/actions/export', component: Dummy },
];

const router = new VueRouter({
  routes
});
