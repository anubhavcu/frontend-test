import React, { Component } from "react";
import Tile from "./Tile";
// import {
//     act
// } from "@testing-library/react";

export default class Content extends Component {
    state = {
        error: false,
        errorValue: "",
        isLoading: false,
        dataToDisplay: []
    };
    actualData = [];
    URL = "http://starlord.hackerearth.com/recipe";
    componentDidMount() {
        this.setState({
            isLoading: true
        });
        this.getTilesData();
    }
    handleErrors = res => {
        if (!res.ok) throw new Error(res.error);

        return res;
    };

    getTilesData = () => {
        fetch(this.URL)
            .then(this.handleErrors)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoading: false
                });
                this.actualData = data;
                this.setState({
                    dataToDisplay: this.actualData
                });
                console.log(this.state.dataToDisplay);
            })

            .catch(err =>
                this.setState({
                    error: true,
                    errorValue: this.state.errorValue + err
                })
            );
    };

    render() {
        const { dataToDisplay } = this.state;
        const { error, isLoading } = this.state;
        if (!error) {
            if (!isLoading) {
                return (
                    <div className="container ">
                        <div className="container tileContainer  ">
                            {dataToDisplay.map((entry, Idx) => {
                                {
                                    const {
                                        description,
                                        category,
                                        id,
                                        image,
                                        label,
                                        name,
                                        price
                                    } = entry;

                                    return (
                                        <Tile
                                            description={description}
                                            category={category}
                                            id={id}
                                            image={image}
                                            label={label}
                                            price={price}
                                            name={name}
                                            key={Idx}
                                        ></Tile>
                                    );
                                }
                            })}
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="container">
                        {" "}
                        <h4> Loading ... </h4>{" "}
                    </div>
                );
            }
        } else {
            return (
                <div className="container">
                    {" "}
                    {/* <h1>Something went wrong ...{this.state.errorValue} </h1> */}
                    <h4>Oops.Something went wrong .. </h4>
                </div>
            );
        }
    }
}
