import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {createEvent} from '../../actions/eventActions';

class NewEventForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            errors: {},
            isLoading: false
        }
    }

    static propTypes = {
        createEvent: PropTypes.func.isRequired
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.createEvent(this.state)
    }

    render() {
        const {title, errors, isLoading} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>New Event</h1>
                <div className="form-group">
                    <label className="control-label">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={this.onChange}
                        className={classnames('form-control', {'is-invalid': errors.title})}/>
                </div>
                {errors.title && <span className='form-text text-muted'>{errors.title}</span>}
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg" disabled={isLoading}>Create</button>
                </div>
            </form>
        )
    }
}

export default connect(null, {createEvent})(NewEventForm)
