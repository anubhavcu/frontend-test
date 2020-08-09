import React, { Component } from "react";

export default class Category extends Component {
    state = {
        category: ""
    };
    render() {
        // this.state.category = this.props.category;

        return (
            <section className="text-center titlebar">
                <div className="container">
                    <nav className="navbar navbar-dark ">
                        <a className="text-dark">
                            Category <strong>{this.props.category}</strong>
                        </a>
                    </nav>
                </div>
            </section>
        );
    }
}
