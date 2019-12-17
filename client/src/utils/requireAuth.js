import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {addFlashMessage} from '../actions/flashMessages';


export default function (ComposedComponent) {
    class Authenticate extends Component {
        componentWillMount() {
            const {isAuthenticated, addFlashMessage, history} = this.props;
            if (!isAuthenticated) {
                addFlashMessage({
                    type: 'danger',
                    text: 'You need to login to access this page'
                })
                history.push('/')
            }
        }

        componentWillUpdate(nextProps, nextState, nextContext) {
            if (!nextProps.isAuthenticated) {
                this.props.history.push('/');
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props}/>
            )
        }
    }

    Authenticate.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        addFlashMessage: PropTypes.func.isRequired
    }

    const mapStateToProps = (state) => {
        return {
            isAuthenticated: state.auth.isAuthenticated
        }
    }
    return connect(mapStateToProps, {addFlashMessage})(withRouter(Authenticate))
}
