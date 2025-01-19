
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'app-decoupen',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/app-decoupen/home",
    "route": "/app-decoupen"
  },
  {
    "renderMode": 2,
    "route": "/app-decoupen/home"
  },
  {
    "renderMode": 2,
    "route": "/app-decoupen/login"
  },
  {
    "renderMode": 2,
    "route": "/app-decoupen/search-results"
  }
],
  assets: {
    'index.csr.html': {size: 4067, hash: '7f02d3671daf901e6db7982712db24eccc34d9610f77d882b9ffa1897c1922e9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4321, hash: 'b6b4358eb47a577f8607a57107104460795caa52652bca77b66f60027d421431', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 8937, hash: '12cef85dd8128b5ecf4de632438fc958394951c63895e27f86d03d1af7aa4049', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'search-results/index.html': {size: 8937, hash: '12cef85dd8128b5ecf4de632438fc958394951c63895e27f86d03d1af7aa4049', text: () => import('./assets-chunks/search-results_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 8937, hash: '12cef85dd8128b5ecf4de632438fc958394951c63895e27f86d03d1af7aa4049', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-IZJ7RRGF.css': {size: 171, hash: 'cWkmn3CZpdM', text: () => import('./assets-chunks/styles-IZJ7RRGF_css.mjs').then(m => m.default)}
  },
};
