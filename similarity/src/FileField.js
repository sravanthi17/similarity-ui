import * as React from "react";

class FileField extends React.Component {
    render() {
        return (
            <div id="upload" onChange={event => this.props.onChange(event)}>
                <input
                    type="file"
                />
            </div>
        );
    }
}

export default FileField;