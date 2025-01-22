import './App.css'
import HelloWorld from './components/HelloWorld.tsx'
import ParentComponent from './components/ParentComponent.tsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HelloWorld/>
      <ParentComponent></ParentComponent>
    </>
  )
}

export default App
