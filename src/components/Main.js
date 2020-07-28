import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router';

import Home from './Home';
import About from './About';
import Projects from './Projects';

class Main extends React.Component {

    render() {
        return (<div>
               <Header /> 
               <div className='container-fluid'>
                   <Switch>
                        <Route path='/projects' exact>
                            <Projects />
                        </Route>
                        <Route path='/'>
                            <About />
                        </Route>
                    </Switch>
               </div>
        </div>);
    }
}


export default Main;