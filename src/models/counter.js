export default {
  namespace: "counter",
  state: {
    count: 100
  },
  // 相当于switch
  reducers: {
    // 加不加引号都可以
    'add' (state, action) {
      console.log('action', action);
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
  }
};