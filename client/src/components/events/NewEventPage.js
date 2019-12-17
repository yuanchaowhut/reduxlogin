import React, {Component} from "react";
import NewEventForm from "./NewEventForm";

class NewEventPage extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <NewEventForm/>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}

export default NewEventPage
