import { useState } from 'React';

function Counter() {

    const [contador, setContador] = useState(0);

    

    return (
        <div>
            <p>Haz hecho clic {contador} veces </p>
            <button onClick={ () => { setContador(contador + 1 ) }  }> Incrementar</button>
        </div>
    );
}

export default Counter;