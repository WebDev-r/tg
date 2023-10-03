import React from "react";
import EventImg from '../image/event_poster.png'
import Eventlist from "./event_list";
import Footer  from "./footer";
export default class Event extends React.Component{
    render(){
        return(
            <>
               <div className=" ">
                      <img src={EventImg} alt=""></img>
               </div>
               <Eventlist/>
               <Footer/>
            </>
        )
    }
}