import { useEffect, useState } from "react";
import getAdvice from "./api/api";
import classes from "./Quote.module.css";
import desktopImg from "./assets/pattern-divider-desktop.svg";


const  Quote=()=>{
    const [advice, setAdvice]=useState("");

    useEffect(()=>{
        const xyz=async ()=>{
        await getAdvice(setAdvice);
    }
    xyz();
    },[]);


 
    return (
    <div className={classes.container}>
        <p>Advice #{advice.id}</p>
        <h3>{advice.advice}</h3>
        <img src={desktopImg} alt="Divider" />
    </div>
    )
}

export default Quote;