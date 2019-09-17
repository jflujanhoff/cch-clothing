import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component';
import { auth, creatUserProfileDocument } from './firebase/firebase.utils';

import './pages/homepage/homepage.styles.scss';
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser:null
    }
  }

  unsuscribeFromAuth = null;

  componentDidMount(){
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await creatUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id:snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state);
            
          })
        })
      } else {
        this.setState({currentUser:userAuth})
      }
    });
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignOutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
