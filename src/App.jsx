import './App.css'
import TwitterCard from './TwitterCard.jsx'

const users = [ 
  { userName: 'codigoconjuan', name: 'Juan Manuel', isFollowing: true },
  { userName: 'MoureDev', name: 'Miguel Angel Sierra', isFollowing: false }, 
  { userName: 'teffcode', name: 'Sandra Aguilar', isFollowing: true }, 
  { userName: 'EstefaniaCassN', name: 'Estefani Gutierres', isFollowing: false } 
]

function App() {
  
  return (
   <section className='App'> 
    {                                                                       
        users.map(user => {
          const {userName, name, isFollowing} = user
          return(
            <TwitterCard
            key={userName}                                // key = para identificar de manera única cada elemento dentro de una lista o array en el DOM(cuando se renderizan)
            userName={userName}
            isFollowing = {isFollowing}
            name={name}
            >
            </TwitterCard>
          )
        })
      }
   </section>

  );
}

export default App
