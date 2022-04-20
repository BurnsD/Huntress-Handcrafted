import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';


function App() {
  return (
<<<<<<< HEAD
    <div>

    </div>
=======
    <ApolloProvider client={client}>
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/success" component={Success} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  </ApolloProvider>
>>>>>>> merge/test
  );
}

export default App;
