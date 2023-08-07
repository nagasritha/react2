import {Component} from 'react'
import {BiLogoTwitter,BiSolidLocationPlus} from 'react-icons/bi'
import {AiOutlineInstagram,AiTwotoneMail} from 'react-icons/ai'
import {BsWhatsapp,BsFacebook,BsLinkedin,BsYoutube,} from 'react-icons/bs'
import {CiCircleRemove} from 'react-icons/ci'
import {RxCross2} from 'react-icons/rx'
import {RiArrowDropUpLine,RiArrowDropDownLine} from 'react-icons/ri'
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
        <BsFacebook style={{fontSize:'25px' ,marginRight:'10px'}}/>
            <BiLogoTwitter style={{fontSize:'25px', marginRight:'10px'}}/>
            <AiOutlineInstagram style={{fontSize:'25px', marginRight:'10px'}}/>
            <BsLinkedin style={{fontSize:'25px', marginRight:'10px'}}/>
            <BsYoutube style={{fontSize:'25px', marginRight:'10px'}}/>
            <BsWhatsapp style={{fontSize:'25px', marginRight:'10px'}}/>
            <AiTwotoneMail style={{fontSize:'25px', marginRight:'10px'}}/>
            <BiSolidLocationPlus/>
            <CiCircleRemove/>
            <RxCross2/>
            <RiArrowDropUpLine/>
            <RiArrowDropDownLine/>
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