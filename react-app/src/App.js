import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Welcome from './components/Welcome';

import { items } from './store/items';
import { posts } from './store/posts';

function App() {
  const [loaded, setLoaded] = useState(false);
  const post_list = useSelector(state => Object.values(state.posts));
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
    <Welcome posts={post_list} />
  );
}

export default App;
