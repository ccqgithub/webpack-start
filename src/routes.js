module.exports = [
  {
    name: 'home',
    path: '/',
    component: require('./vc/page/home'),
    meta: {
      a: 1
    }
  },
  {
    name: 'user',
    path: '/user',
    component: require('./vc/page/user'),
  },
];
