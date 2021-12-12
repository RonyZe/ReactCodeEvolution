import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";



function App() {
  return (
    <div className="App">
      <ParentComp/>
     {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifeCycleA/> */}
      {/* <Form/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/>       */}
      {/* <ClassClick/>
      <FunctionClick/>
      <EventBind/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="Ali" lastName="Raza" >
        <p>This is children props</p>
      </Greet>
      <Greet name="nabeel" lastName="Ali">
      <button>Add</button>
      </Greet>
      <Greet name="Rony" lastName="Z"/>
      
      <Hello/>
      <Welcome name="Ali" lastName="Raza" />
      <Welcome name="nabeel" lastName="Ali"/>
      <Welcome name="Rony" lastName="Z" /> */}
      {/* <Greet name="Rony" lastName="Z"/>
      <Welcome name="Rony" lastName="Z" /> */}
    </div>
  );
}

export default App;
