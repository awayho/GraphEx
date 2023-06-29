import './App.css'
import Chart from './components/chart'
import ChemicalPage from './components/pages/chemical'
//import Chemical from './components/pages/chemical'
function App() {

 return (
  <div className="App">
   <div className="navbar">
    <ul>
     <li>
      <a>Химпродукция</a>
     </li>
     <li>
      <a>Лес</a>
      </li>
     <li>
      <a>Газ</a>
      </li>
    </ul>
   </div>
    <div style={{width: 800}}>
      <ChemicalPage />
      <Chart />
    </div>
  </div>
 )
}
export default App