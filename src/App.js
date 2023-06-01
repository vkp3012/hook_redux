import './App.css';
import Color from './components/user/Color';
// import Count from './components/Custom/Count';
// import PostData from './components/Fetch/PostData';
// import ForwardRef from './components/Ref/ForwardRef';
// import UseRef from './components/Ref/UseRef';
// import DataFetch from './components/Fetch/DataFetch';
// import UseReducerHook from './components/Reducer/UseReducerHook';
// import NodeState from './components/context/nodes/NodeState';
// import About from './components/context/pages/About';
// import Another from './components/useMemo/another';
import Login from './components/user/Login';
import Profile from './components/user/Profile';
// import UseMemo from './components/useMemo/UseMemo';
// import TodoApp from './components/todoApp/TodoApp';
// import UseCallback from './components/useCallback-hook/UseCallback';
// import Callback from './components/useCallback-hook/Callback.js';

function App() {
  return (
    <div className="App">
        {/* <Callback/> */}
        {/* <TodoApp/> */}
        {/* <UseCallback/> */}
        {/* <UseMemo/> */}
        {/* <NodeState>
          <About/>
        </NodeState> */}
        {/* <DataFetch/> */}
        {/* <UseReducerHook/> */}
        {/* <ForwardRef/>
        <UseRef/>
        <PostData/>
        <Another/>
        <Count/> */}
        <Profile/>
        <Login/>
        <Color/>
    </div>
  );
}

export default App;
