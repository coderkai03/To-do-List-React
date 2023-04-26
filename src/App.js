import './App.css';

function App() {
  const title = "Welcome to the Rian++ Blog";
  const likes = 50;
  //const person = {name: "jotaro", age: 17}
  const link = "https://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>

        {/* <p>{person}</p> */}

        <p>{10}</p>
        <p>{"deez nuts"}</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>Battery: {Math.random()*100}%</p>

        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
