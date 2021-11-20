import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import { ROUTES } from "./constants";

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path={ROUTES.HOME} component={Home} exact/>
                <Route path={ROUTES.SKILLS} component={Skills} exact/>
                <Route path={ROUTES.PROJECTS} component={Projects} exact />
            </Switch>
        </Router>
    );
};

export default Routes;