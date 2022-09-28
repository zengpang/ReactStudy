import React,{Component} from "react";
import styles from './Button.module.css';
import './Button.scss';
// class Button extends Component{
//     render(){
//         return <button className={styles.error}>Error Button</button>
//     }
// }
export default function(){
    return (
       <div className="btn-group">
       <button className="btn">点我</button>
       <button className={styles.error}>点我</button>
       </div>
        
    );
}