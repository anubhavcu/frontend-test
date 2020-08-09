import React, { Component } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Content from "../components/contents/Content";
import Category from "../components/Category";
import "./home.css";
export default class Home extends Component {
    state = {
        title: "Tiles",
        category: "All"
    };
    render() {
        return (
            <div>
                <Header />
                <Search />
                <Category category={this.state.category} />
                <Content />
            </div>
        );
    }
}
