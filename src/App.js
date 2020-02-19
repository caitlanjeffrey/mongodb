import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import ParkRecCard from "./components/ParkRecCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a ParkRecCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Jumbotron></Jumbotron>
        {this.state.friends.map(friend => (
          <ParkRecCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            quote={friend.quote}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
