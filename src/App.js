import './App.css';
import Navbar from './Navbar'

function App() {
  const title = "Welcome to the Rian++ Blog";
  const likes = 50;
  //const person = {name: "jotaro", age: 17}
  const link = "https://www.google.com";

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <h1>App Component</h1>
      </div>
    </div>
  );
}

export default App;
