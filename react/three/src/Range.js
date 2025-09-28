import React from "react";

class Range extends React.Component {
    state = { val: 100 }

    range = (event) => {
        this.setState({ val: event.target.value })
    }

    render() {
        return (
            <>
                <hr />
                <input type="range" onInput={this.range} min="0" max="200" step="10" />
                {/* {onChange={this.range}} */}
                <p>{this.state.val} px</p>

            </>
        )
    }
}

export default Range;