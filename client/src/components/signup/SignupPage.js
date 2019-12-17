import React, {Component} from "react";
import SignupForm from "./SignupForm";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isUserExists, userSignupRequest} from "../../actions/signupAction";
import {addFlashMessage} from "../../actions/flashMessages";

class SignupPage extends Component {
    static propTypes = {
        userSignupRequest: PropTypes.func.isRequired,
        addFlashMessage: PropTypes.func.isRequired,
        isUserExists: PropTypes.func.isRequired
    }

    render() {
        const {userSignupRequest, addFlashMessage, isUserExists} = this.props;
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignupForm
                        userSignupRequest={userSignupRequest}
                        addFlashMessage={addFlashMessage}
                        isUserExists={isUserExists}
                    />
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}

export default connect(null, {userSignupRequest, addFlashMessage, isUserExists})(SignupPage)

