import React, {Component} from "react";
import './App.css'
import User from './User/User'

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

var user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
  status: ''
};

var isLoggedIn=false;

if(isLoggedIn) user.status='online';
else user.status='offline'

class App extends Component{

  render(){
    return(
      //React.createElement('h1',{className: 'red'},'jestem react app')
      <>
      <MyButton/>
      <User/>
      <h2>{user.status}</h2>
      </>
      );
  }
}
export default App;