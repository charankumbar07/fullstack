import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multi, incrementByAmount } from './redux/counter/counterSlice'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
    <Navbar/>
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>i Am counter {count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(multi())}>*2</button>
      <button onClick={() => dispatch(incrementByAmount(6))}>increment</button>
    </div>
    </>
  )
}

export default App
