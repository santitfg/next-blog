import React from "react";


const HeaderBlog =(props)=>{
    return(
    <>
    <div className="text-left"> 
    <div className="text-5xl">{props.title}</div>    
    <div className="text-xl">{props.subtitle}</div>
    <hr />

    </div>
    </>)
}

export default HeaderBlog;