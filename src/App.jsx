import './App.css'
import TwitterCard from './TwitterCard.jsx'

function App() {
  const juan = { userName: 'codigoconjuan', name: 'Juan Manuel'}

  return (
   <section className='App'>                                                                          
    <TwitterCard {... juan} />                                                        {/* spread operator = pasa las propiedades de un lugar a otro(no esta bien visto) */}
    <TwitterCard  userName= 'MoureDev' name='Miguel Angel Sierra' />
    <TwitterCard userName= 'teffcode' name='Sandra Aguilar' />
    <TwitterCard userName= 'EstefaniaCassN' name='Estefani Gutierres' />
   </section>

  );
}

export default App
