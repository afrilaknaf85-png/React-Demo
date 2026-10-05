import BasicExample from "./bootstrap"
import Button from "./button"
import Car from "./car"
import Dynamic from "./Dyanmic"
import Hello from "./hello"
import BasicButtons from "./materialui"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Parent from "./Props/Parent"
import State from "./HOOKS/USESTATE/state"
import Effect from "./HOOKS/USEEFFECT/effect"
import Parent from "./HOOKS/USECONTEXT/parent"
import Ref from "./HOOKS/USEREF/ref"
import Reducer from "./HOOKS/USEREDUCER/reducer"
import Memo from "./HOOKS/USEMEMO/memo"
import CallBack from "./HOOKS/USECALLBACK/callback"
import Form from "./HOOKS/Formstatus/form"
import Insta from "./HOOKS/Optimsic/Like"
import Form1 from "./Form"
import { Routes, Route } from "react-router-dom"
import AdminRoutes from "./secureRoutes/Adminform"
import Counter from "./Redux/counter"
import { increment } from "./app/user"
import { useDispatch } from "react-redux"
import ZusCounter from "./Zustandcounter"
import { stores } from "./zustandstore/stores"

function App() {

  let dispacth = useDispatch()

  const {increment} = stores()


  return (
    <>
      {/* <h1>Hello welcome to app</h1>
    <Hello/> */}

      {/* <Button/> */}

      {/* <Dynamic/> */}


      {/* <Car/> */}


      {/* <BasicButtons/> */}


      {/* <BasicExample/> */}


      {/* <Parent/> */}

      {/* <State/> */}

      {/* <Effect/> */}


      {/* <Parent/> */}

      {/* <Ref/> */}

      {/* <Reducer/> */}


      {/* <Memo/> */}

      {/* <CallBack/> */}

      {/* <Form/> */}

      {/* <Insta/> */}


      {/* <Form1/> */}


      
        {/* <Routes>
          <Route path="/" index element={<State />} />
          <Route path="/effect" element={<Effect/>}/>
          <Route path="/context" element={<Parent/>}></Route>
          <Route path="/admin" element={
            <AdminRoutes><Form1/></AdminRoutes>
          }/>
        </Routes> */}

        {/* <Counter/> */}
        {/* <button onClick={()=>dispacth(increment())}>Add</button> */}
      
      <ZusCounter/>

        <button onClick={increment}>Add</button>

    </>
  )
}

export default App