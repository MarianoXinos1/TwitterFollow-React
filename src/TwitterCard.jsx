import './TwitterCard.css'
import { useState } from 'react'


function TwitterCard(props) {

   const [isFollowing , setIsFollowing] = useState(false);                                                            // la primera posicion del array nos da = valor del estado                      
                                                                                                                      // la segunda posicion del array = es para actualizar el estado anterior                                                                         
   const text = isFollowing ? 'Siguiendo' : 'Seguir';
   const buttonClassName = isFollowing ? 'contenedor_boton contenedor_boton-siguiendo' :'contenedor_boton'
   const handleClick = () => setIsFollowing(!isFollowing);                                                            // llama a setIsFollowing con !isFollowing como argumento, !isFollowing toma el valor actual de isFollowing y lo invierte.                                              
   
   const addAt = (userName) => `@${props.userName}`;                                                                  // Al pasarle el userName nos agrega el @  

    return(
    <>                                                                                                                {/*  <> = <React.Fragment> = permite agrupar una lista de hijos sin agregar un div(para que este ams limpio el DOM)   */}
        <article className='contenedor'>
        <header className='contenedor_header'>
            <img className='contenedor_header-img' alt='El avatar del usuario'  src= {`https://unavatar.io/${props.userName}`}/>      {/* las invertidas van con llaves en jsx, los strings no hacen falta */}
            <div className='contenedor_header-div'>
            <strong >{props.name}</strong>
            <span className='contenedor_header-nombre'>{addAt(props.userName)}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
             <span className='botonText'>{text}</span>
             <span className='dejarDeSeguir'>Dejar De Seguir</span>
            </button>
        </aside>
        </article>
    </>
    );
}

export default TwitterCard;