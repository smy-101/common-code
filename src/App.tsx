import {useTimeout} from './hooks/useTimeout.ts';

function App() {
  const {reset,clear} = useTimeout(()=>{console.log('hello')},1000)

  return <>
    <div>用于存放一些复用代码</div>

    <button onClick={reset}>reset</button>
    <button onClick={clear}>clear</button>
  </>;
}

export default App;
