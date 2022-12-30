import { useState } from 'react';
import './App.css';

const KEY = 'cb13da90a39eba44c82ce3db6bc38256';

function App() {
  const [movieName, setMovieName] = useState('');
  const [result, setResult] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/movie/76341?api_key=${KEY}`)
      .then(r => r.json())
      .then(data => setResult(data));
  }

  const showResult = () => {
    console.log(result);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="movieName"
          value={movieName}
          onChange={e => setMovieName(e.target.value)}
        />
        <button type="submit">Search</button>
        <button type='button' onClick={showResult}>Show result</button>
      </form>
    </div>
  );
}

export default App;
