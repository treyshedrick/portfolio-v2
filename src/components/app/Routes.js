import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/skills" component={Skills} exact/>
                <Route path="/projects" component={Projects} exact />
                <Route path="/contact" component={Contact} exact />
            </Switch>
        </Router>
    );
};

export default Routes;