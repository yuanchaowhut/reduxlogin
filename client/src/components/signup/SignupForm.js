import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errors: {},
            isLoading: false,
            invalid: false
        }
    }

    static propTypes = {
        userSignupRequest: PropTypes.func.isRequired,
        addFlashMessage: PropTypes.func.isRequired
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({isLoading: true});
        this.props.userSignupRequest(this.state).then(() => {
            this.props.history.push('/');
            this.props.addFlashMessage({
                type: 'success',
                text: "You signed up successfully"
            })
        }).catch((err) => {
            this.setState({errors: err.response.data, isLoading: false});
        });
    }

    checkUserExists = (e) => {
        const field = e.target.name;
        const val = e.target.value;
        if (val !== '') {
            this.props.isUserExists(val).then(res => {
                let {errors} = this.state;
                let invalid;
                if (res.data.user) {
                    errors[field] = "There is user with such " + field;
                    invalid = true;
                } else {
                    errors[field] = '';
                    invalid = false;
                }
                this.setState({errors, invalid})
            })
        }
    }

    render() {
        const {errors, isLoading, invalid} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our comunity!</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        onBlur={this.checkUserExists}
                        className={classnames('form-control', {'is-invalid': errors.username})}/>
                </div>
                {errors.username && <span className='form-text text-muted'>{errors.username}</span>}
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        onBlur={this.checkUserExists}
                        className={classnames('form-control', {'is-invalid': errors.email || errors.isEmailInvalid})}/>
                </div>
                {errors.email && <span className='form-text text-muted'>{errors.email}</span>}
                {errors.isEmailInvalid && <span className='form-text text-muted'>{errors.isEmailInvalid}</span>}
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        className={classnames('form-control', {'is-invalid': errors.password})}/>
                </div>
                {errors.password && <span className='form-text text-muted'>{errors.password}</span>}
                <div className="form-group">
                    <label className="control-label">PasswordConfirmation</label>
                    <input
                        type="password"
                        name="passwordConfirmation"
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange}
                        className={classnames('form-control', {'is-invalid': errors.passwordConfirmation || errors.isPasswordNotMatch})}/>
                </div>
                {errors.passwordConfirmation &&
                <span className='form-text text-muted'>{errors.passwordConfirmation}</span>}
                {errors.isPasswordNotMatch && <span className='form-text text-muted'>{errors.isPasswordNotMatch}</span>}
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg" disabled={isLoading || invalid}>Sign up
                    </button>
                </div>
            </form>
        )
    }
}


export default withRouter(SignupForm)
