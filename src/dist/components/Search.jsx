import React, { Component } from "react";
import "./search.css";

export default class Search extends Component {
    render() {
        return (
            <div
                className="container"
                style={{
                    backgroundColor: "ghostwhite",
                    opacity: "0.5",
                    marginBottom: "25px",
                    border: "ghostwhite"
                }}
            >
                <form
                    action=""
                    className="form-inline d-flex justify-content md-form form-sm  mt-2"
                >
                    <div className="searchImage"></div>
                    <input
                        className="form-control form-control-sm ml-3 w-75"
                        type="text"
                        placeholder="Search your favourite recipe... "
                    />
                </form>
            </div>
        );
    }
}
