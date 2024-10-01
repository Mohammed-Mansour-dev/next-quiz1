/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

"use client"

import { useEffect, useState } from "react"

const TimeProgress = ({fill ,setFill,nextOnclick ,progressTime}) => {
    useEffect(() => {
    const to =setTimeout(() =>{
        if(fill < 100){
            setFill(fill + .1)
        }else{
            nextOnclick()
            setFill(0)
        }  },progressTime)

        return () => clearTimeout(to)
    },[fill])
    
    
      return (
        <div className="w-full absolute top-0 left-0 " >
        <div style={{width:`${fill}%`,background:`hsl(${120 - (fill / 100) * 120}, 100%, 50%)`}} 
        className={`rounded-t-lg  h-1    transition-all  ` }/>
    
        </div>

      )
    }




export default TimeProgress;