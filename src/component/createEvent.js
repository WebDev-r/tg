import React from "react";
import Dp from '../image/Vector.png'
import Aerrow from '../image/Aerrow.png'
export default class CreateEvent extends React.Component{
    render(){
        let eventItem=this.props.eventList;
        var i=0;
        const neweventList=eventItem.map((item)=><div className="min-w-min m-[3vw] mt-[6vw] relative">
                                                     <div>
                                                         <img className="rounded-3xl" src={this.props.image[i++]} alt=""></img>
                                                     </div>
                                                            <div className="flex absolute top-[2vw]">
                                                               <div className="flex flex-col rounded-full h-[7vw] w-[7vw] bg-slate-100   ml-3 text-center text-[2vw]"><p className="">{item.day}</p><p className="">{item.month}</p></div>
                                                            </div>
                                                     <div className="w-3/4 h-[55%] bg-white absolute top-[67%] left-[13%] rounded-2xl p-5 shadow-2xl">
                                                           <div className="flex text-left space-x-1">
                                                                <img className="h-[1.2vw]" src={Dp} alt=""></img>
                                                                <div className="text-[1vw] text-gray-400 overflow-hiddens">{item.by}</div>
                                                            </div>
                                                            <div className="text-[1.5vw] font-bold text-gray-500">{item.heading}</div>
                                                            <div className="text-[1.2vw] font-bold text-gray-400">{item.subHeading}</div>
                                                            <div className="flex text-[1.5vw] font-bold text-gray-600">read more <img className="h-[2vw] ml-[1vw]" src={Aerrow} alt=""></img></div>
                                                     </div>
                                                </div>
                                                )
        return(<>
               <div className="grid grid-rows-3 grid-cols-2 gap-0">
               {neweventList}
               </div>
         
        </>)
    }
}