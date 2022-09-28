import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

//React简易实例
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//    <button>123</button>

// );

//函数组件
// function User(props)
// {
//    return <h1>hello, {props.name}</h1>;
// }
// function App(){
//    return (
//      <div>
//        <User name="Sara"/>
//        <User name="Cahal"/>
//        <User name="Edite"/>
//      </div>
//    );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//    <App/>
// );

//Class组件
// class User extends React.Component{
//    render(){
//       return <h1>hello,{this.props.name}</h1>
//    }
// }
// class App extends React.Component{
//    render(){
//       return(
//          <div>
//            <User name="Sara"/>
//            <User name="Cahal"/>
//            <User name="Edite"/>
//          </div>
//       );
//    }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//    <App/>
// );



// State实例
// class App extends React.Component{
//    constructor(props)
//    {
//       super(props);
//       this.state={name:'jirengu'}
//    }
//    render(){
//       return(
//         <div>
//            <div>姓名:{this.state.name}</div>
//            <button onClick={()=>{this.handleClick()}}>改变姓名</button>
//         </div>
//       );
//    }
//    //点击事件
//    handleClick(){
//       //修改setState
//       this.setState({name:'ruoyu'})
//    }
// }
//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(
//    <App>123</App>

// );

//异步更新与同步更新setState
// class Counter extends React.Component{
//    constructor(props){
//       super(props);
//       this.state={
//          count0:0,
//          count1:0,
//          count2:0,
//          count3:0,
//          count4:0
//       }
//    };
//    render(){
//       console.log('render');
//       return(
//         <div>
//           <div>{this.state.count0}</div>
//           <div>{this.state.count1}<button onClick={this.onPlus1.bind(this)}>plus 1</button></div>
//           <div>{this.state.count2}<button onClick={this.onPlus2.bind(this)}>plus 2</button></div>
//           <div>{this.state.count3}<button onClick={this.onPlus3.bind(this)}>plus 3</button></div>
//           <div>{this.state.count4}<button id="btn4">plus 4</button></div>
//          </div>
//       );
//    }
//    componentDidMount(){
//       /*在生命周期函数里更新是异步的，两次更新只会生效一次
//       等价于
//       let count0=this.state.count0
//       this.setState({count0:count0+1})
//       this.setState({count0:count0+1})
//       */
//       this.setState({
//          count0:this.state.count0+1
//       })
//       this.setState({
//          count0:this.state.count0+1
//       })
//       document.querySelector('#btn4').onClick=()=>{
//          //对于用这种方式绑定事件,React智商不够无法理解,于是用同步方式更新
//          this.setState({
//             count4:this.state.count4+1
//          })
//          this.setState({
//             count4:this.state.count4+1
//          })
//       }
//    }

//    onPlus1(){
//       //React 自带的事件监听函数里,是用异步方式更新
//       this.setState({
//          count1:this.state.count1+1
//       })
//       this.setState({
//          count1:this.state.count1+1
//       })
//    }
//    onPlus2(){
//       //React 自带的事件监听函数里,是用异步方式更新，要想多次更新并且后一次依赖上一次的结果,请使用异步写法
//       this.setState(state=>{
//          return {count2:state.count2+1}
//       })
//       this.setState(state=>{
//          return {count2:state.count2+1}
//       })
//    }
//    onPlus3(){
//       setTimeout(()=>{
//          //setTimeout里都更新都是同步的
//          this.setState({
//             count3:this.state.count3+1
//          })
//          this.setState({
//             count3:this.state.count3+1
//          })
//       })
//    }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//    <Counter/>
// );

//生命周期
// class Lifetext extends React.Component {
//    //———————————————— 生命周期之挂载时 ————————————————————
//    constructor(props) {
//       super(props);
//       this.state = {
//          count: 1
//       };
//       console.log("生命周期——construct");
//    }
//    render() {
//       console.log("生命周期——render");
//       return (<div><h1>{this.state.count}</h1><button onClick={this.testClick.bind(this)}>测试按钮</button></div>);

//    }
//    componentDidMount() {
//       console.log("生命周期——componentDidMount");
//       return true;
//    }
//    //———————————————— 生命周期之更新时 ————————————————————
//    shouldComponentUpdate() {
//       console.log("生命周期——shouldComponentUpdate");
//       return true;
//    }
//    componentDidMount() {
//       console.log("生命周期——componentDidMount");
//       return true;
//    }
//    //———————————————— 生命周期之卸载时 ————————————————————
//    componentWillUnmount() {
//       console.log("生命周期——componentWillUnmount");
//       return true;
//    }
//    //———————————————— 生命周期之错误处理 ————————————————————
//    componentDidCatch() {
//       console.log("生命周期——componentDidCatch");
//       return true;
//    }
//    testClick() {
//       this.setState(state => {
//          return { count: this.state.count + 1 }
//       })
//    }
// }
// const root = ReactDOM.createRoot(document.getElementById(`root`));
// root.render(<Lifetext />);

//列表与key
// class App extends React.Component{
//    constructor(props)
//    {
//       super(props)
//       this.state={list:['a','b','c']}
//    }
//    render()
//    {
//       return(
//          <ul>
//            {this.state.list.map(item=>{
//              return  <li key={item.toString()}>{item}</li>
//            })}
      
//          </ul>
         
//       )
//    }
// }
// const root = ReactDOM.createRoot(document.getElementById(`root`));
// root.render(<App />);

//表单
class App extends React.Component{
   constructor(props)
   {
      super(props)
      this.state={val:'H'};
   }
   render()
   {
      return(
       <div>
         <input value={this.state.val} onChange={this.handleInputChange.bind(this)}/>
       </div>
      );
   }
   handleInputChange(e){
      this.setState({val:e.target.value.toUpperCase()})
   }
}
const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(<App />);
