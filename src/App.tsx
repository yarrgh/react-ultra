import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import { Footer, Navbar } from './components';
import GlobalStyles from './globalStyles';
import Home from './pages/HomePage/Home';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import SignUp from './pages/SignUp/SignUp';
import { ScrollMemory } from '@yarrgh/react-scroll-memory';

const App: React.FC = () => {
  const history = createHistory();

  return (
    <Router>
      <ScrollMemory />
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
