import {Component} from 'react'
import {BsFacebook,BsWhatsapp,BsTwitter,BsLinkedin} from 'react-icons/bs'
import {AiOutlineRight} from 'react-icons/ai'
import {BiSolidPhoneCall} from 'react-icons/bi'
import Image from '../Image'
import Image2 from '../Image2'
import './index.css'

let interval1=null
let interval2=null
let interval3=null
class TrailComponentOne extends Component{
    state={
        count:0,
        years:0,
    }

    componentDidMount(){
        this.IncreaseCount()
    }

    IncreaseCount=()=>{
        interval1=setInterval(this.changeCount,20)
        interval2=setInterval(this.changeYears,100)
        
    }

    changeCount=()=>{
        const {count}=this.state
        if(count===500){
         return clearInterval(interval1)
        }return this.setState(prev=>({count:prev.count+1}))
    }

    changeYears=()=>{
        const {years}=this.state
        if(years===10){
         return clearInterval(interval2)
        }return this.setState(prev=>({years:prev.years+1}))
    }

    changeExperience=()=>{
        const {experience}=this.state
        if(experience===5){
         return clearInterval(interval3)
        }return this.setState(prev=>({experience:prev.experience+1}))
    }

    setStates=()=>{
        this.setState({count:0,years:0,experience:0})
    }
   
    render(){
        const {count,years,experience}=this.state
        return(
    <div>
        <h1>Hello world</h1>
        <p>I had successfully published my code</p>
        <Image/>
        <Image2/>
        <h1>{count} {years}  {experience}</h1>
        <BsFacebook/>
        <BsWhatsapp/>
        <BsTwitter/>
        <BsLinkedin/>
        <AiOutlineRight/>
        <BiSolidPhoneCall/>
        <div className='marquee'>
          <p className='content'>I had successfully published my code. </p>
          <p className='content'>I had successfully published my code.</p>
          <p className='content'>I had successfully published my code. </p>
        </div>
        <button type='button' onClick={this.setStates} className='animations'>reset</button>
    </div>
)
        }
    }
export default TrailComponentOne