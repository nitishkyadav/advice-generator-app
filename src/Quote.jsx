import { useEffect, useState, Fragment } from "react";
import getAdvice from "./api/api";
import classes from "./Quote.module.css";
import desktopImg from "./assets/pattern-divider-desktop.svg";
import dice from "./assets/icon-dice.svg";

const  Quote=()=>{
    const [advice, setAdvice]=useState("");

    useEffect(()=>{
       
    getApiData();
    },[]);

    async function getApiData(){
        await getAdvice(setAdvice);
    }
 
    const diceHandler=()=>{
        getApiData();
    }

    return (
        <Fragment>
    <div className={classes.container}>
        <p>Advice #{advice.id}</p>
        <h3>{advice.advice}</h3>
        <img className={classes.hrBar} src={desktopImg} alt="Divider" />

        <div className={classes.dice}>
        <img src={dice} alt="dice" onClick={diceHandler}></img>
        </div>
    </div>
    </Fragment>

    )
}

export default Quote;