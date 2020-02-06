
import axios from 'axios';
export default {
  // 相当于combine-reducers的名称,命名空间
  namespace: 'user',

  state: {
    isLoading: false,
    error: null,
    user: []
  },

  subscriptions: {
  },
  // 相当于takeevery
  // 
  effects: {
    *fetch ({ payload }, { call, put }) {
      yield put({ type: 'fetch/start' });
      try {
        const users = yield call(axios.get, "http://www.qiuhang.club:7300/mock/5e3be26f00fbdf09dcf21f76/dva/users")
        yield put({ type: "fetch/success", user: users })
      } catch (e) {
        yield put({ type: "fetch/error", error: e.message })
      }
    }
  },

  reducers: {
    'fetch/start' (state, action) {
      return {
        error: null,
        user: []
      }
    },
    'fetch/success' (state, action) {
      return {
        error: null,
        user: action.user
      }
    },
    'fetch/false' (state, action) {
      return {
        error: action.error,
        user: []
      }
    }
  }
}
