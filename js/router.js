
// router

const Dummy =    { template: '<div>?</div>' };
const About =    { template: `<div>
<p>Calculer vos impots par tranches. [wip]</p>
<p>© <a href="https://github.com/jnpn/impots">jnpn</a> {{ new Date().getFullYear() }}</p>
</div>` };

const routes = [
  { path: '/', component: Impots },
  { path: '/settings', component: Settings },
  { path: '/about', component: About },
  { path: '/actions/share', component: Dummy },
  { path: '/actions/export', component: Dummy },
];

const router = new VueRouter({
  routes
});

router.onReady(() => new Logger('impots.router').log('ready'));
