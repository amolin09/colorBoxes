import ColorboxGrid from './Components/ColorboxGrid.jsx'
import './App.css';

function App() {

  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'black', 'pink', 'brown', 'grey'];
  
  return (
    <div className="App">
      <h1 className="Title">Colorbox</h1>
      <div className='body'>
        <ColorboxGrid colors={colors}/>
      </div>
    </div>
  );
}

export default App;
