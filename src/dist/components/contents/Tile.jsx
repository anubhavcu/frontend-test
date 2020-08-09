import React, { Component } from "react";
import { Route, NavLink, HashRouter as Router, Switch } from "react-router-dom";
import "./tile.css";

export default class Tile extends Component {
    tileTextBackgroundColor = "";
    state = {
        name: "",
        imageUrl: "",
        key: ""
    };
    genRandomTime = () => {
        return Math.floor(Math.random() * (110 - 15 + 1)) + 15;
    };
    genRandomBackgroundColor = () => {
        if (this.state.key % 2 == 0) {
            // this.tileTextBackgroundColor = "white";
            return "white";
        } else {
            // this.tileTextBackgroundColor = "lightgray";
            return "darkgrey";
        }
    };
    genRandomTextColor = () => {
        if (this.state.key % 2 == 0) {
            return "black";
        } else {
            return "white";
        }
    };
    changeHeartImage = () => {
        // target = document.getElementsByClassName("heartImage");
        alert("heartImage clicked");
    };
    // displayButtons = () => {
    //     alert("button");
    // };
    render() {
        this.state.name = this.props.name;
        this.state.imageUrl = this.props.image;
        this.state.key = this.props.id;
        return (
            <div className="tile">
                <div
                    className="card"
                    style={{
                        backgroundColor: this.genRandomBackgroundColor()
                        // backgroundImage:
                        //     "linear-gradient(this.genRandomBackgroundColor(), this.genRandomBackgroundColor())"
                    }}
                >
                    <a href="javascript:void(0)">
                        <img
                            id={`tileImage-${this.key}`}
                            className="tileImage"
                            className="card-img-top"
                            src={this.state.imageUrl}
                        ></img>
                    </a>
                    <p
                        className="card-text "
                        style={{
                            color: this.genRandomTextColor(),
                            marginLeft: "10px",
                            marginTop: "10px"
                        }}
                    >
                        <div className="heartImage"></div>{" "}
                        <strong>{this.state.name}</strong> <br />
                        <div style={{ display: "flex" }}>
                            <div className="timeImage"></div>
                            <small> {this.genRandomTime()} mins</small>
                        </div>
                        <p style={{ marginRight: "10px" }}>
                            Dolor repudiandae doloribus nobis iste quod
                            voluptate? Consectetur{" "}
                        </p>
                    </p>
                    <NavLink
                        activeClassName="active"
                        to="/:`${this.state.key}`"
                    >
                        <button className="viewMore">View More</button>
                    </NavLink>
                    <button className="quickView ">Quick View</button>
                    <span className="overlay"></span>
                </div>{" "}
            </div>
        );
    }
}
