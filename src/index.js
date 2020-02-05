import dva from 'dva';
import './index.css';
import createHistory from 'history/createBrowserHistory'
// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 默认是hash-router

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);
// app.model({default:{}}.default);
// 把modules下面的文件,利用app的model方法加载到app上面的mudules当中,是一个数组

app.model(require('./models/counter').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
// reactDom.render

console.log(app);

