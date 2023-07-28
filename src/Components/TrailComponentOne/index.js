import {Component} from 'react'
import Image from '../Image'
import Image2 from '../Image2'
import './index.css'

class TrailComponentOne extends Component{
    render(){
        return(
    <div>
        <h1>Hello world</h1>
        <p>I had successfully published my code</p>
        <Image/>
        <Image2/>
    </div>
)
        }
    }
export default TrailComponentOne