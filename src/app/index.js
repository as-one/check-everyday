import loadHtml from './libs/FetchHtml.js';
import Router from './libs/Router.js';

const router = new Router({
  mode: 'hash',
  root: '/',
});

router
  .add(/html/, () => {
    console.log('html');
    loadHtml('.content', 'app/views/html.html');
  })
  .add(/css/, () => {
    loadHtml('.content', 'app/views/css.html');
  })
  .add(/js/, () => {
    loadHtml('.content', 'app/views/js.html');
  })
  .add(/ts/, () => {
    loadHtml('.content', 'app/views/ts.html');
  })
  .add('', () => {
    loadHtml('.content', 'app/views/html.html');
  });
