const context = require.context('./', false, /\.js$/);
export default context
  .keys()
  .filter(item => item !== './index.js')
  .map(key => context(key))
  ;
  // 放入context,就是放入了model,就是这个模块整个对象