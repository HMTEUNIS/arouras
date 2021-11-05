import Header from './Header'
import Sky from './Sky'
import arouras from './Aroura';
function App() {
  return (
    <div className="App">
     <Header />
     <Sky info= {arouras}/>
  
    </div>
  );
}

export default App;
