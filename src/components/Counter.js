import React, { Component } from 'react'
// import { connect } from 'dva'
import PropTypes from 'prop-types'
// impt
// import PropTypes from 'prop-types'

export default class Counter extends Component {
  render () {
    console.log("this.props", this.props);
    // console.log("context", context);
    // 没有context啊,怎么回事,是个undefined,原来下面的Counter.contextTypes需要加s
    console.log('this.context', this);
    /* 
        this.props
            match: {path: "/counter", url: "/counter", isExact: true, params: {…}}
            location: {pathname: "/counter", search: "", hash: "", state: undefined}
            history: {length: 2, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
            staticContext: undefined
            counter: {count: 100}
            dispatch: ƒ (action)
            __proto__: Object
     */

    // const { count } = this.props;
    // const { counter, dispatch } = this.props;
    const { counter, createAdd1, createAsyncAdd, createSub, history } = this.props;
    return (
      <div>
        <h3>Counter</h3>
        <br />
        <p>{counter.count}</p>
        <br />
        {/* 需要加命名空间的前缀 */}
        {/* <button onClick={() => dispatch({ type: "counter/product/add" })}>+</button> */}
        {/* <button onClick={() => dispatch({ type: "counter/addAsync", data: "jim" })}>+</button> */}
        <button onClick={() => createAsyncAdd()}>+</button>
        {/* <button onClick={() => dispatch({ type: "counter/sub" })}>-</button> */}
        <button onClick={() => createSub()}>-</button>
        {/* 路由跳转 */}
        <br />
        {/* history是从哪里来的?是从route传递过来的,在路由里面配置 */}
        <button onClick={() => {
          // history.push('/')
          this.context.router.history.push('/')
        }}>跳转回首页</button>
      </div>
    )
  }
}
Counter.propTypes = {
  // 1,类型检验
  //2.全局context传值
  counter: PropTypes.object
  ,
  // 引入router
}
// 没有加S
Counter.contextTypes = {
  router: PropTypes.object
}
// 第一种写法,直接自己connect3
// const mapStateToProps = (state, ownProps) => {
//   console.log(state);
//   return {
//     count: state.counter.count
//   }
// }

//export default connect(mapStateToProps)(Counter)
