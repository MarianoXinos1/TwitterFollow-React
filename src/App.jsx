import './App.css'

function App() {
  
  return (
    <>                                                                             {/*  <> = <React.Fragment> = permite agrupar una lista de hijos sin agregar un div(para que este ams limpio el DOM)   */}
      <article>
        <header>
          <img alt='El avatar del usuario'  src='https://unavatar.io/alex'/>
          <div>
            <strong>Alex Xinos</strong>
            <span>@alex</span>
          </div>
        </header>

        <aside>
          <button>
            Seguir
          </button>
        </aside>
      </article>
    </>
  )
}

export default App
