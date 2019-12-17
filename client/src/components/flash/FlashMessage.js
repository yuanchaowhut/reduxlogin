import React, {Component} from "react";
import classnames from 'classnames';
import PropTypes from 'prop-types';

class FlashMessage extends Component {
    static propTypes = {
        message: PropTypes.object.isRequired,
        deleteFlashMessage: PropTypes.func.isRequired
    }

    handleClick = () => {
        const {deleteFlashMessage, message} = this.props;
        deleteFlashMessage(message.id);
    }

    render() {
        const {type, text} = this.props.message;
        return (
            <div className={classnames('alert', {
                'alert-success': type === 'success',
                'alert-danger': type === 'danger'
            })}>
                <button onClick={this.handleClick} className="close"><span>&times;</span></button>
                {text}
            </div>
        )
    }
}


export default FlashMessage;
