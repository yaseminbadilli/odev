import React from "react";

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true };
    }
    delHeader = () => {
        this.setState({ show: false });
    }
    render() {
        let myheader;
        if (this.state.show) {
            myheader = <Child />;
        };
        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}>Header'ı Sil</button>
            </div>
        );
    }
}

class Child extends React.Component {
    componentWillUnmount() {

        alert("Header bileşeninin bağlantısını kaldırıyorsunuz!!");
        console.log("componentWillUnmount");

    }
    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}
