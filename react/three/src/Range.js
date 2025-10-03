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
                <input type="range" value={this.state.val} onChange={this.range} min="0" max="200" step="10" />
                {/* {onChange={this.range}} onInput */}
                <p>{this.state.val} px</p>
            </>
        )
    }
}

export default Range;