import './TwitterCard.css'

function TwitterCard(props) {
   const addAt = (userName) => `@${userName}`;                                     {/* Al pasarle el userName nos agrega el @  */}
    return(
    <>                                                                             {/*  <> = <React.Fragment> = permite agrupar una lista de hijos sin agregar un div(para que este ams limpio el DOM)   */}
        <article className='contenedor'>
        <header className='contenedor_header'>
            <img className='contenedor_header-img' alt='El avatar del usuario'  src= {`https://unavatar.io/${props.userName}`}/>      {/* las invertidas van con llaves en jsx, los strings no hacen falta */}
            <div className='contenedor_header-div'>
            <strong >{props.name}</strong>
            <span className='contenedor_header-nombre'>{addAt(props.userName)}</span>
            </div>
        </header>

        <aside>
            <button className='contenedor_boton'>
            Seguir
            </button>
        </aside>
        </article>
    </>
    );
}

export default TwitterCard;