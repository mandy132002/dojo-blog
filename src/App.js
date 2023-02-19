import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';


function App() {
  return (
    <Router>
      <div className="App m-0">
      <Navbar/>
      <div className="content max-w-6xl mx-auto p-10 mt-20 mb-20 border rounded-lg">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route exact path="/blogs/:id">
            <BlogDetails/>
          </Route>
        </Switch>
        
      </div>
    </div>
    </Router>
  );
}

export default App;
