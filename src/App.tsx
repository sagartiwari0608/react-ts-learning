import './App.css'
import HelloWorld from './components/HelloWorld.tsx'
import ParentComponent from './components/ParentComponent.tsx'
import Counter from './components/Counter.tsx'
import { Provider } from 'react-redux';
import store from './store/Store.ts';
import router from './Routes.tsx';
import { RouterProvider } from 'react-router-dom';
function App() {
  
  return (
    <Provider store={store}>
      {/* <HelloWorld/>
      <ParentComponent></ParentComponent>
      <Counter/> */}
      <RouterProvider router={router}>
        
      </RouterProvider>
    </Provider>
  )
}

export default App
