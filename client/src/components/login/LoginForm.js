import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classnames from 'classnames';
import validateInput from "../../utils/validations/login";
import {login} from '../../actions/authActions';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        }
    }

    static propTypes = {
        login: PropTypes.func.isRequired
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    isValid = () => {
        const {errors, isValid} = validateInput(this.state)
        if (!isValid) {
            this.setState({errors})
        }
        return isValid
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {login, history} = this.props;
        const {identifier, password} = this.state;
        if (this.isValid()) {
            this.setState({errors: {}, isLoading: true})
            login({identifier, password})
                .then((data) => {
                    history.push('/')
                })
                .catch((err) => {
                    this.setState({errors: err.response.data.errors, isLoading: false})
                })
        }
    }


    render() {
        const {errors, identifier, password, isLoading} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>
                <div className="form-group">
                    <label className="control-label">Username/Email</label>
                    <input
                        type="text"
                        name="identifier"
                        value={identifier}
                        onChange={this.onChange}
                        className={classnames('form-control', {'is-invalid': errors.identifier})}/>
                </div>
                {errors.identifier && <span className='form-text text-muted'>{errors.identifier}</span>}
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        className={classnames('form-control', {'is-invalid': errors.password})}/>
                </div>
                {errors.password && <span className='form-text text-muted'>{errors.password}</span>}
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg" disabled={isLoading}>Login</button>
                </div>
            </form>
        )
    }
}

export default connect(null, {login: login})(withRouter(LoginForm))
