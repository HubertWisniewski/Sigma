import React, { Component } from "react";


class ArenaView extends Component {

  componentDidMount() {
    console.log(this.props.user)
  }


  render() {
    const arena = this.props.arenas.filter(arena => arena.id === this.props.arenaId)

    return (
      <div className="Arenas">
        {arena.length === 0 ? (
            <p>Loading arena</p>
        ) : (
            <div> 
            <h1>Found {arena[0].title}</h1>
            {this.props.user === null ? ( <p>Loadnig</p>) :
            (
              this.props.user.name
            )
            
          }
            
            </div>    

        )}

      </div>
    )
  }
}

export default ArenaView;
