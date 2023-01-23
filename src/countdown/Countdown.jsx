import { useState, useEffect } from "react";


function Countdown() {

    const [targetSeconds, setTargetSeconds] = useState(null);
    const [elapsedSeconds, setElapsedSeconds] = useState(0);

    useEffect(function(){

        if(targetSeconds === null) return
        setElapsedSeconds(0); 

        let interval = setInterval(function(){
            setElapsedSeconds(elapsedSeconds => elapsedSeconds + 1)
        },1000);

        return() => {
            clearInterval(interval);
        }

    } ,[targetSeconds]);

    function parseForm(ev) {
        ev.preventDefault();
        let seconds = ev.target.seconds.value;
        // console.log(typeof(seconds));
        setTargetSeconds(parseInt(seconds));
    }

    if(elapsedSeconds >= targetSeconds && targetSeconds !== null){
        return (
            <div className="center-element">
                <p> ¡Se termino el conteo!</p>
                <div>
                    <button className="mt-3 w-100 btn btn-primary" onClick={ () => setTargetSeconds(null) } >Reiniciar</button>                    
                </div>
            </div>
        );
    }

    if (targetSeconds !== null) {
        return (
            <div className="center-element">
                <span>Faltan <b>{targetSeconds - elapsedSeconds}</b>  y han trascurrido <b>{elapsedSeconds}</b> segundos </span>
            </div>
        );
    }

    return (
        <div className="center-element">
            <p>¿Cuantos segundos quieres contar?</p>
            <form action="#" onSubmit={ev => parseForm(ev)}>
                <input className="form-control" type='number' name="seconds"></input>
                <button className="mt-3 w-100 btn btn-primary">Iniciar </button>
            </form>
        </div>
    );
}


export default Countdown;