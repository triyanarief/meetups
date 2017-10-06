import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Meetups from './Meetups';
import About from './About';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Meetups}/>
      <Route path="/about" component={About}/>
    </Switch>
  </main>
)

// class Main extends Component {
//   render() {
//     return(
//       <Main>
//         <Switch>
//           <Route exact path="/" component={Meetups}/>
//           <Route path="/about" component={About}/>
//         </Switch>
//       </Main>
//     )
//   }
// }

export default Main;
