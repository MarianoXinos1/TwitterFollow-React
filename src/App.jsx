import './App.css'
import TwitterCard from './TwitterCard.jsx'

function App() {
  
  return (
   <section className='App'>                                                                          
    <TwitterCard isFollowing={true} userName= 'codigoconjuan' name='Juan Manuel' />
    <TwitterCard isFollowing={false} userName= 'MoureDev' name='Miguel Angel Sierra' />
    <TwitterCard isFollowing={true} userName= 'teffcode' name='Sandra Aguilar' />
    <TwitterCard isFollowing={true} userName= 'EstefaniaCassN' name='Estefani Gutierres' />
   </section>
  );
}

export default App
