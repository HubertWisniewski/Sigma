import React, { Component } from "react";
import firebase from "firebase";


class ArenaView extends Component {

componentDidMount() {
    console.log(this.props.arenas[this.props.arenaId])
}

  render() {
    const arenaId = parseInt(this.props.arenaId)
    const arena = this.props.arenas[arenaId]

    return (
      <div className="Arenas">
        {arena === 'undefined' ? (
            <p>Arena not found</p>
        ) : (
            <div> 
            
            </div>    

        )}

      </div>
    )
  }
}

export default ArenaView;
