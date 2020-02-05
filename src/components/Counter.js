import React, { Component } from 'react'
// import { connect } from 'dva'
import PropTypes from 'prop-types'
// impt
export default class Counter extends Component {
  render () {
    console.log("this.props", this.props);
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
    const { counter, dispatch } = this.props;
    return (
      <div>
        <h3>Counter</h3>
        <br />
        <p>{counter.count}</p>
        <br />
        {/* 需要加命名空间的前缀 */}
        <button onClick={() => dispatch({ type: "counter/add" })}>+</button>
        <button onClick={() => dispatch({ type: "counter/sub" })}>-</button>
      </div>
    )
  }
}
Counter.propTypes = {
  // 1,类型检验
  //2.全局context传值
  counter: PropTypes.object
}
// 第一种写法,直接自己connect3
// const mapStateToProps = (state, ownProps) => {
//   console.log(state);
//   return {
//     count: state.counter.count
//   }
// }

//export default connect(mapStateToProps)(Counter)
