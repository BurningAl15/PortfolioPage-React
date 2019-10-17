import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";

import Layout from "./components/Layout";

import KnowMe from "./pages/KnowMe";
import ContactMe from "./pages/ContactMe";
import Gamejams from "./pages/Gamejams";
import OwnProjects from "./pages/OwnProjects";
import PublishedProjects from "./pages/PublishedProjects";

import WebGame from "./pages/WebGame";

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={KnowMe}/>
                    <Route exact path="/Gamejams" component={Gamejams}/>
                    <Route exact path="/OwnProjects" component={OwnProjects}/>
                    <Route exact path="/PublishedProjects" component={PublishedProjects}/>
                    <Route exact path="/ContactMe" component={ContactMe}/>
                    <Route exact path="/WebGame" component={WebGame}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}
export default App;