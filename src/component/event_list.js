import React from "react";
import CreateEvent from "./createEvent";
import Item1 from '../image/item-1.png'
import Item2 from '../image/item-2.png'
import Item3 from '../image/item-3.png'
import Item4 from '../image/item-4.png'
import Item5 from '../image/item-5.png'
import Item6 from '../image/item-6.png'
export default class Eventlist extends React.Component{
    render(){
        const item1={
            day:"25",
            month:"nov",
   
            by:"by ranchi card",
            heading:"benefits of vitamin D and how to get it",
            subHeading:" sdjfgfgeilw jhgfugieur; jkgfuiegfi kjfgiuyefe kjghioyrfp"
        }
        const item2={
            day:"25",
            month:"nov",
            image:{Item2},
            by:"by ranchi card",
            heading:"benefits of vitamin D and how to get it",
            subHeading:" sdjfgfgeilw jhgfugieur; jkgfuiegfi kjfgiuyefe kjghioyrfp"
        }
        const item3={
            day:"25",
            month:"nov",
         
            by:"by ranchi card",
            heading:"benefits of vitamin D and how to get it",
            subHeading:" sdjfgfgeilw jhgfugieur; jkgfuiegfi kjfgiuyefe kjghioyrfp"
        }
        const item4={
            day:"25",
            month:"nov",
         
            by:"by ranchi card",
            heading:"benefits of vitamin D and how to get it",
            subHeading:" sdjfgfgeilw jhgfugieur; jkgfuiegfi kjfgiuyefe kjghioyrfp"
        }
        const item5={
            day:"25",
            month:"nov",
        
            by:"by ranchi card",
            heading:"benefits of vitamin D and how to get it",
            subHeading:" sdjfgfgeilw jhgfugieur; jkgfuiegfi kjfgiuyefe kjghioyrfp"
        }
        const item6={
            day:"25",
            month:"nov",
        
            by:"by ranchi card",
            heading:"benefits of vitamin D and how to get it",
            subHeading:" sdjfgfgeilw jhgfugieur; jkgfuiegfi kjfgiuyefe kjghioyrfp"
        }
        return(
            <>
            <CreateEvent eventList={[item1,item2,item3,item4,item5,item6]} image={[Item1,Item2,Item3,Item4,Item5,Item6]}/>
         
            </>
        )
    }
}