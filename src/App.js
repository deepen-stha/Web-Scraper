import logo from './logo.svg';
import './App.css';

import {Navbar, NavbarBrand} from "reactstrap";

// importing the menu from the menu components
import Menu from './components/MenuComponent'
//importing the data from the shared/data.js file
import {DISHES} from './shared/data';
import { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render(){
    return (
        <div>
          {/* <header className="App-header"> */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div>
              <Navbar dark color="primary"></Navbar>
              <div className="container">
                <NavbarBrand href="/">Deepen Web Scraper</NavbarBrand>
              </div>
            </div>
            {/* using our menu component  by simply doing <Menu/>*/}
            <Menu dishes={this.state.dishes}/>
          {/* </header> */}
        </div>
      );
  }

}
// function App() {

//   return (
//     <div>
//       {/* <header className="App-header"> */}
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <div>
//           <Navbar dark color="primary"></Navbar>
//           <div className="container">
//             <NavbarBrand href="/">Deepen Web Scraper</NavbarBrand>
//           </div>
//         </div>
//         {/* using our menu component  by simply doing <Menu/>*/}
//         <Menu/>
//       {/* </header> */}
//     </div>
//   );
// }

export default App;