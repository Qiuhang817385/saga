import { delay } from 'dva/saga';
export default {
  namespace: "counter",
  state: {
    count: 100
  },
  // 相当于switch
  reducers: {
    // 加不加引号都可以
    'product/add' (state, action) {
      console.log('action', action);
      console.log('action.name', action.name);
      return {
        count: state.count + 1
      }
    },
    sub (state, action) {
      console.log('action', action);
      return {
        count: state.count - 1
      }
    }
  },
  effects: {
    // 这个addAsync就相当于action里面的type
    *addAsync ({ payload }, { call, put, select }) {
      //获取state当中的值
      // let counter = yield select(state => state.counter)
      let counter = yield select(_ => _.counter)
      console.log("counter", counter);
      yield call(delay, 2000);
      yield put({ type: 'product/add', name: 'time' })
    }
  },
  subscriptions: {
    qiuhang ({ dispatch, history }) {
      console.log("qiuhangqihang");
      // 这里被自动调用了
      console.log("dispatch方法", dispatch);
      console.log("history方法", history);
      let i = 1;
      window.onmousemove = () => {
        console.log(`触发了${i}次`);
      }
      document.addEventListener("click", () => {
        console.log("触发了点击事件");
      })
    }
  }
};