import React, {
    Component
} from "react";
import Home from "./dist/pages/Home";
import "./App.css";

export default class App extends Component {
    render() {
        return (
            <div className="bg">
              <div >
                <Home />
              </div>

            </div>
        );
    }
}
