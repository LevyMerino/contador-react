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
            <div>
                <p> Se termino el conteo </p>
                <button onClick={ () => setTargetSeconds(null) } >Reiniciar</button>
            </div>
        );
    }

    if (targetSeconds !== null) {
        return (
            <div>
                <p>Faltan: {targetSeconds - elapsedSeconds} y han trascurrido {elapsedSeconds} segundos </p>
            </div>
        );
    }

    return (
        <div>
            <p>¿Cuantos segundos quieres contar?</p>
            <form action="#" onSubmit={ev => parseForm(ev)}>
                <input type='number' name="seconds"></input>
                <button>Iniciar </button>
            </form>
        </div>
    );
}


export default Countdown;