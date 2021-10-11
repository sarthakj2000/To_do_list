import './App.css';
import FormState from './components/context/forms/FormState';


import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  return (
    <FormState>
      <div className="background">
        
      <div className="App">
      
      <Header />
      <Tasks />
    </div>
      </div>
    </FormState>
  );
}

export default App;
