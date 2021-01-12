import './App.css';
//import Firstlastname from './form_Components/Firstlastname'
import Folder from './Toggle_Components/Folder'


function App() {
  return (
  <div className="App">

    {/* <Firstlastname firstname={'souleymane'} lastname={'Diallo'} />  */}

    
    <Folder name={'Home'} files={['file1', 'file2', 'file3']}/>
  
  </div>

  );
}

export default App;
