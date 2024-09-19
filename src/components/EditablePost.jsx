import React from "react";

export default class EditablePost extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="editablePostContainer">
                <label htmlFor="authorField">Author:</label>
                <input type="text" name="authorField" id="authorField" value={this.props.author} />
                <label htmlFor="locationField">Location:</label>
                <input type="text" name="locationField" id="locationField" value={this.props.location} />
                <label htmlFor="contentField">Content:</label>
                <input type="text" name="contentField" id="contentField" value={this.props.content} />
            </div>
        );
    }



}