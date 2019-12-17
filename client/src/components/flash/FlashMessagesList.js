import React, {Component} from "react";
import {connect} from "react-redux";
import FlashMessage from "./FlashMessage";
import {deleteFlashMessage} from '../../actions/flashMessages';

class FlashMessagesList extends Component {
    render() {
        const {deleteFlashMessage} = this.props;
        const messages = this.props.messages.map((message) =>
            <FlashMessage key={message.id}
                          message={message}
                          deleteFlashMessage={deleteFlashMessage}/>);
        return (
            <div className="container">
                {messages}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps, {deleteFlashMessage})(FlashMessagesList);
