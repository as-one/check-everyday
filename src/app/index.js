import loadHtml from '../../node_modules/@as-one/components/libs/FetchHtml/FetchHtml.js';
import Router from '../../node_modules/@as-one/components/libs/Router/Router.js';

const router = new Router({
  mode: 'hash',
  root: '/'
});

router
  .add(/html/, () => {
    loadHtml('.content', 'app/views/html.html');
  })
  .add(/css/, () => {
    loadHtml('.content', 'app/views/css.html');
  })
  .add(/js/, () => {
    loadHtml('.content', 'app/views/js.html');
  })
  .add('', () => {
    loadHtml('.content', 'app/views/html.html');
  });