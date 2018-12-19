import React, { Component } from "react";
import firebase from "firebase";


class ArenaView extends Component {



  render() {
    const arena = this.props.arenas.filter(arena => arena.id === this.props.arenaId)

    return (
      <div className="Arenas">
        {arena === null ? (
            <p>Arena not found</p>
        ) : (
            <div> 
            <h1>Found {console.log(arena)}</h1>
            </div>    

        )}

      </div>
    )
  }
}

export default ArenaView;
