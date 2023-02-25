import { useEffect, useState, Fragment } from "react";
import getAdvice from "./api/api";
import classes from "./Quote.module.css";
import desktopImg from "./assets/pattern-divider-desktop.svg";
import dice from "./assets/icon-dice.svg";

const  Quote=()=>{
    const [advice, setAdvice]=useState("");

    useEffect(()=>{
        const xyz=async ()=>{
        await getAdvice(setAdvice);
    }
    xyz();
    },[]);


 
    return (
        <Fragment>
    <div className={classes.container}>
        <p>Advice #{advice.id}</p>
        <h3>{advice.advice}</h3>
        <img className={classes.hrBar} src={desktopImg} alt="Divider" />

        <div className={classes.dice}>
        <img src={dice}></img>
        </div>
    </div>
        

    {/* <div className={classes.dice}>
        <img src={dice}></img>
    </div> */}
    </Fragment>

    )
}

export default Quote;