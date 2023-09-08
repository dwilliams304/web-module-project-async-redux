import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import './App.css';
import { BASE_URL, API_KEY } from './constants/constants';
import { gifsdata } from './data/gifsdata';
import { fetchGIFS } from './actions';

import axios from 'axios';

function App(props) {
  const {isFetching, gifs, error, fetchGIFS} = props;
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchGIFS('hello');
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    fetchGIFS(`${inputValue}`)
    setInputValue('');
  }

  const handleChange = e => {
    const {value} = e.target;
    setInputValue(value);
  }

  return (
    <div className="App">
      <h1>Search for any GIFs!</h1>

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter search here...' onChange={handleChange} value={inputValue}/>
        <input type='submit' value='Search' />
      </form>

      {
        error !== '' && <h3 className='error'>Error fetching GIFs. (Did you put your own API key in?)</h3>
      }
      <div className='container'>
        {
          isFetching ? <h3>Loading GIFs....</h3> : gifs.map((gif, i) => {
            return(
              <div key={i} className='GIF-card'>
                <h3>{gif.title}</h3>
                <p>{gif.username}</p>
                <img width='175' src={gif.images.original.url} /><br/>
                <a target='_blank' href={gif.url}>Look on GIPHY</a>
              </div>
            )})
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return({
    gifs: state.gifs,
    isFetching: state.isFetching,
    error: state.error
  })
}

export default connect(mapStateToProps, {fetchGIFS})(App);