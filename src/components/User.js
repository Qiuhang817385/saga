import React, { Component } from 'react'

export default class User extends Component {
  render () {
    let { dispatch } = this.props;
    let { error, user } = this.props.user;
    let dataJson = [];
    let msg = "";
    let isLoading = this.props.loading.effects['user/fetch']
    if (isLoading) {
      msg = "Loading..."
    } else if (error) {
      msg = error;
    } else {
      // 因为,刚载入页面的时候data是undefined,这个时候直接回报错
      //等axios完之后才会有user赋值给data,所以需要加&&来做一个判断
      // TypeError: Cannot read property 'data' of null
      // data = user && user.data;
      dataJson = user.data ? user.data : user;
      // console.log(user.data.status);
      // data = null
      console.log(user.data);
      console.log("dataJson是", typeof dataJson);
    }
    return (
      <div>
        <h2>
          这是User
          <br />
          <button onClick={() => {
            this.props.history.push('/')
          }}>返回首页</button>
          <br />
          <p>
            {
              dataJson.map(item => {
                return (<li key={item.id}>{item.id}{item.name}
                </li>)
              })
            }
          </p>
          <button onClick={() => { dispatch({ type: "user/fetch" }) }}>获取user</button>
        </h2>
      </div>
    )
  }
}
