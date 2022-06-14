import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Welcome from './components/Welcome';
import Media from './components/Media';
import Menu from './components/Menu';
import Order from './components/Order';
import Thanks from './components/Thanks';

import { items } from './store/items';
import { posts } from './store/posts';

function App() {
  const [loaded, setLoaded] = useState(false);
  const post_list = useSelector(state => Object.values(state.posts));
  const item_list = useSelector(state => Object.values(state.items));
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
      <Switch>
        <Route path='/' exact>
          <Welcome />
          <Media posts={post_list} />
        </Route>
        <Route path='/menu' exact>
          <Welcome />
          <Menu items={item_list} />
        </Route>
        <Route path='/order' exact>
          <Order items={item_list} />
        </Route>
        <Route path='/thanks' exact>
          <Thanks />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
