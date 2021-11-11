import './App.css';
import Screen from './components/screen/screen';
import 'bootstrap/dist/css/bootstrap.min.css';
import { arrayDataRow } from '../src/data/dataRows'

function App() {

  return (
    <div className="App">
      {/* send sort array to Screen Component to load dynamic num rows according to the length of the array  */}
     <Screen sortArrayDataRow={arrayDataRow.sort((a, b) => a.row - b.row)}></Screen>
    </div>
  );
}

export default App;
