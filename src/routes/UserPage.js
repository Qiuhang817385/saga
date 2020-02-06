import React from 'react'
// rfc快捷键
import { connect } from 'dva'
import User from './../components/User';
// 这样得到数据
function UserPage (props) {
  return (
    <div>
      <User {...props}></User>
    </div>
  )
}
// 想这个组件可以直接作成一个无状态组件
//如果功能太多,可以把所有的功能下发给子组件
// 如果简单的功能，直接在路由里面就可以
const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  loading: state.loading
})
const mapDispatchToProps = {
}

export default connect(mapStateToProps)(UserPage)
// 这样做的话,dispatch已经存放到props当中去了,state并没有
