import React from "react";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            favoritecolor: "red"

        };
        console.log("constructor");

    }

    componentDidMount() {

        console.log("componentDidMount");

    }

    shouldComponentUpdate(props, state) {

        console.log("shouldComponentUpdate");
        return true;
    }

    static getDerivedStateFromProps(props, state) {

        console.log("static getDerivedStateFromProps");
        return { favoritecolor: props.favcol };
    }

    changeColor = () => {

        this.setState({ favoritecolor: "blue" });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        console.log("getSnapshotBeforeUpdate");

    }

    componentDidUpdate() {

        console.log("componentDidUpdate");

    }

    render() {
        console.log("render");

        return (
            <div>
                <h1>favorite color:{this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Change color</button>




            </div>
        );
    }
}
