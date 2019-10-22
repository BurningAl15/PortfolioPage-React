import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";

import Layout from "./components/Layout";

import KnowMe from "./pages/KnowMe";
import ContactMe from "./pages/ContactMe";
import Gamejams from "./pages/Gamejams";
import OwnProjects from "./pages/OwnProjects";
import PublishedProjects from "./pages/PublishedProjects";

import WebGame from "./pages/WebGame";

import ComingSoon from "./pages/ComingSoon";

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={KnowMe}/>
                    <Route name="gamejams" exact path="/Gamejams" component={Gamejams}/>
                    <Route name="ownProjects" exact path="/OwnProjects" component={OwnProjects}/>
                    <Route name="publishedProjects" exact path="/PublishedProjects" component={PublishedProjects}/>
                    <Route name="contactMe" exact path="/ContactMe" component={ContactMe}/>
                    <Route exact path="/WebGame" component={WebGame}/>

                    {/* <Route name="webGame" exact path="/WebGame/:gameId" component={WebGame}/> */}
                    <Route name="comingSoon" exact path="/ComingSoon" component={ComingSoon}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}
export default App;