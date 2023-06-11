import './App.css'
import Header from './components/Header'
import Location from './components/Location'
import data from './data'

function App() {

  const locations = data.map(item => {
    return (
        <Location
          item = {item}
          key={item.id}
        />
    )
  })
  return (
    <>
      <Header/>
      <main>
        {locations}
      </main>
    </>
  )
}

export default App
