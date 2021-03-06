import React, {Component} from "react";
import {Link} from 'react-router-dom';
import SignIn from "./SignIn";
import Navbar from "./Navbar";


class Welcome extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        alert("create account")
        //this.props.history.push('/SignUp')
    }


    render() {
        return (

            <div className="Welcome">
                <Navbar/>
                <div className="content">
                    <label className="logo">EBook Project</label>
                    <h4>A platform for all your bookish needs. Choose the books and chapters you need and create your
                        own customized books </h4>
                </div>
                <div className="login">
                    <SignIn/>
                </div>

            </div>
        );
    }
}

export default (Welcome)
