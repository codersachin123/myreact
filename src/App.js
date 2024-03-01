import './components/Jarvis.css';
import Code from './components/Code';
import CodeWraper from './components/CodeWrapper';
function App() {
  return (
    <div className="App">
      <Code message='Component'></Code>
      <CodeWraper> hello wtapper</CodeWraper>


    </div>
  )

}

export default App;