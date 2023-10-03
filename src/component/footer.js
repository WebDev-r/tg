import React from "react";
import footer from '../image/footer.jpg'
import logo from '../image/taru logo.png'
import phone_icon from '../image/phone_icon.png'
import mail_icon from '../image/mail_icon.png'
import follow_links from '../image/follow link.png'
export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={value:""}
    }
    handelChange(event){
        this.setState({value:event.target.value})
    }
    render(){
        return(
              <>
              <div className="mt-[8vw] overflow-hidden rounded-[4vw] relative">
                <img src={footer} alt={footer}></img>
                <div className="text-[4vw] absolute top-[5vw] text-white font-bold flex flex-col pl-[4vw]"><p>join our core</p> <p> team member</p></div>
                <div className="absolute top-[10vw] left-[60vw] space-x-2">
                    <input className="h-[4vw] w-[25vw] pl-3 rounded-[1vw]" value={this.state.value} placeholder="enter email" onChange={this.handelChange.bind(this)}></input>
                    <button className="bg-[#274C5B] h-[4vw] w-[10vw] rounded-[1vw] text-[#ffff]">JOIN</button>
                </div>
              </div>
              <div className="flex justify-evenly bg-green-100">
                <div>
                    <div className="flex">
                        <img className="h-[40px]" src={logo} alt=""></img>
                        <div className="h-[40px] w-[90px] relative box-border overflow-hidden">
                            <p className="absolute font-medium top-[10%]">Tar</p>
                            <p className="absolute top-[40%] left-[10%] font-medium">G</p>
                            <p className="absolute bottom-[10%]  left-[25%] text-5xl font-medium">u</p>
                            <p className="absolute left-[55%] top-[40%]">ardians</p>
                        </div>
                    </div>
                    <div className="text-[1vw] font-medium w-[25vw] mt-[2vw]">n an unknown printer too k a galley of typ</div>
                    <div className="text-[1vw] font-medium flex mt-[2vw]"><img className="h-[3vw]" src={phone_icon} alt=""></img>+1 206-214-2298</div>
                    <div className="text-[1vw] font-medium flex mt-[2vw]"><img className="h-[2.5vw]" src={mail_icon} alt=""></img>support@rezilla.com</div>
                    </div>
                
                <div className="flex flex-col">
                    <div className="font-medium flex mt-[2vw] text-[1.5vw]">Quick Links</div>
                    <div className="text-[1vw] font-medium flex mt-[2vw]">Home</div>
                    <div className="text-[1vw] font-medium flex mt-[2vw]">evnt</div>
                    <div className="text-[1vw] font-medium flex mt-[2vw]">team</div>
                    <div className="text-[1vw] font-medium flex mt-[2vw]">about us</div>
                </div>
                <div className="flex flex-col">
                    <div className="mt-[2vw] text-[1.5vw] font-medium">Fallow us on</div>
                    <div className="mt-[1.5vw]"><img src={follow_links} alt=""></img></div>
                </div>
                <div className="flex flex-col">
                   <div className="mt-[2vw] text-[1.5vw] font-medium"><p>Enter your e-mail</p><p>to reach us</p></div> 
                   
                   <div><input placeholder="enter email" className="h-[4vw] w-[25vw]"></input><button className="bg-[#20BD8A] h-[3vw] w-[3vw] rounded-[5vw] text-[2vw]">{`->`}</button></div>
                </div>
              </div>
              </>
        )
    }
}