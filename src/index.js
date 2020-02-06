import dva from 'dva';
import './index.css';
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger';
// 1. Initialize
const app = dva({
  // 把hash路由转换成browser路由
  history: createHistory(),
  // 使用中间件
  onAction: createLogger()
});

// 默认是hash-router

// 2. Plugins
app.use(createLoading());

// 3. Model
// 动态生成module
// app.model(require('./models/example').default);
require('./models').default.forEach(value => app.model(value.default));
// app.model({default:{}}.default);
// 把modules下面的文件,利用app的model方法加载到app上面的mudules当中,是一个数组

// app.model(require('./models/counter').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
// reactDom.render

console.log(app);

