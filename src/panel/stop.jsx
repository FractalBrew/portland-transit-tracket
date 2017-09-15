import React from "react";

import Arrival from "./arrival.jsx";

class Stop extends React.Component {
  constructor(props) {
    super(props);

    this.deleteStop = this.deleteStop.bind(this);
  }

  deleteStop() {
    this.props.port.postMessage({
      message: "removeStop",
      data: {
        route: this.props.stop.route,
        direction: this.props.stop.direction,
        stop: this.props.stop.stop,
      },
    });
  }

  render() {
    let arrivals = this.props.stop.arrivals.filter((a, i) => i < 3);
    let blanks = [];
    for (let i = arrivals.length; i < 3; i++) {
      blanks.push(null);
    }

    return (
      <tr>
        <td className="stopName">{this.props.stop.name}</td>
        {arrivals.map((arrival, i) =>
          <Arrival key={i} arrival={arrival}/>
        )}
        {blanks.map((blank, i) =>
          <td key={i + arrivals.length}></td>
        )}
        <td className="deleteCell">
          <button type="button" className="delete" onClick={this.deleteStop}>X</button>
        </td>
      </tr>
    );
  }
}

export default Stop;
