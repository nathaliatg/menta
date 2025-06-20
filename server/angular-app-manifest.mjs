
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/marlin-odontologico/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/marlin-odontologico"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6776, hash: '9c53abb8851ef685848fca967b59e61e1bf06757b494b3214dacea8a0e00c8a6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6640, hash: '0ed4fadc458d3ac1cde75f2ceae6f18a93ebe194523b73b732f6a8ab7ac59aac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-O6INTM6H.css': {size: 720, hash: '6boB2A6Lc4c', text: () => import('./assets-chunks/styles-O6INTM6H_css.mjs').then(m => m.default)}
  },
};
