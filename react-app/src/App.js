import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Welcome from './components/Welcome';
import Media from './components/Media';

import { items } from './store/items';
import { posts } from './store/posts';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(items());
      await dispatch(posts());
      setLoaded(true);
    })();
  }, [dispatch]);


  if (!loaded) return null;

  return (
    <BrowserRouter>
      <Welcome />
      <Switch>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
