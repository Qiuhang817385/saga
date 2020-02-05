
export default {
  // 相当于combine-reducers的名称,命名空间
  namespace: 'example',

  state: {},

  subscriptions: {
    setup ({ dispatch, history }) {  // eslint-disable-line
      // 自动执行、
      console.log('这里是自动调用的');
    },
  },

  effects: {
    // watch,generator函数,call并且put,call发送异步请求,put转发action的
    *fetch ({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    // reducer只一,这个reducer叫做save
    save (state, action) {
      return { ...state, ...action.payload };
    },
  },

};
