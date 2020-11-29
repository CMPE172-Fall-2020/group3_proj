import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={UserLogin} />
        <Route exact path="/UserInformation" component={UserInfo} />
        <Route exact path="/UserEditInfo" component={UserManagement} />
        <Route exact path="/Statistics" component={Statistics} />
      </Router>
    );
  }
}

export default App;
