import { useState, useEffect } from 'react';
import handleFetch from "./utils/handleFetch"
import UserForm from "./components/UserForm";
import GifDisplay from "./components/GifDisplay";
import API_KEY from './utils/config';
import './App.css';

const App = () => {
const [gifs, setGifs] = useState([/*'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdowney.co.nz%2Fwp-content%2Fuploads%2F2015%2F09%2Fawards-grey-box-large.jpg&f=1&nofb=1&ipt=4333a941335fef3af0d1b775130fb12772b3701f71fa86ecebb52cd0289fd21a&ipo=images','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdowney.co.nz%2Fwp-content%2Fuploads%2F2015%2F09%2Fawards-grey-box-large.jpg&f=1&nofb=1&ipt=4333a941335fef3af0d1b775130fb12772b3701f71fa86ecebb52cd0289fd21a&ipo=images','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdowney.co.nz%2Fwp-content%2Fuploads%2F2015%2F09%2Fawards-grey-box-large.jpg&f=1&nofb=1&ipt=4333a941335fef3af0d1b775130fb12772b3701f71fa86ecebb52cd0289fd21a&ipo=images'*/]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchGifs(); // Fetch gifs when component mounts
  }, []);

  const fetchGifs = async () => {
    try {
      const data = await handleFetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&offset=0&rating=g&bundle=messaging_non_clips`);
      console.log(data)
      setGifs(data[0]);
      setError('');
      
    } catch (error) {
      setError(error.message);
    }
  };

  const onSearch = async (query) => {
    console.log('Searched for...', query);
    try {
      const data = await handleFetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
      console.log(data)

      setGifs(data[0]);
      setError('');
      
    } catch (error) {
      setError(error.message);
    }
  };
  

  return (
    <>
      <header>
        <h1 id='title'>Giphy Search</h1>
      </header>
      <div id='content'>
        <UserForm onSearch={onSearch}/>
        <GifDisplay gifs={gifs}/>
      </div>
    </>
  );
}

export default App;
