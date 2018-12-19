import React, { Component } from "react";
import firebase from "firebase";
import CreateArena from "../CreateArena/CreateArena";
import { Link } from 'react-router-dom'

class ArenasView extends Component {
  // state = {
  //     arenas: []
  // }

  // componentDidMount() {
  //   firebase
  //   .database()
  //   .ref('/arenas')
  //   .on('value', snapshot => {
  //     const value = snapshot.val()
  //     const arenas = Object.entries(value || {}).map(([key, val]) => ({
  //       id: key,
  //       ...val,
  //     }))
  //     this.setState({ arenas })
  //   })
  // }


  render() {
    return (
      <div className="Arenas">
        <h1>Arenas</h1>
        <CreateArena/>
        <div className="ArenaList">
        <ul>
        {this.props.arenas.map(arena =>
        <li key={arena.id}>
        {arena.title}
        <Link to={`/arena/${arena.id}`}>Join</Link>
        </li>
        
        )}

        </ul>
        
        
        </div>

      </div>
    )
  }
}

export default ArenasView;