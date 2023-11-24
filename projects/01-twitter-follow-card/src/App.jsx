import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {


  return (
    <section className="App">
      <TwitterFollowCard
        userName='midudev'
        name='Miguel Ángel Durán' />

      <TwitterFollowCard
        userName='pheralb'
        name='Pablo H.' />

      <TwitterFollowCard
        userName='PacoHdezs'
        name='Paco Hdez' />

      <TwitterFollowCard
        userName='TMChein'
        name='Tomas' />
    </section>
  )
}