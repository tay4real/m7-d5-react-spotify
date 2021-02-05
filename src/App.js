import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import PlayBar from "./components/PlayBar";
import { Row } from "react-bootstrap";
import ArtistDetails from "./components/ArtistDetails";
import AlbumDetails from "./components/AlbumDetails";
import Likes from "./components/Likes";

class App extends React.Component {
  state = {
    // currentSong: {
    //   albumCover: null,
    //   artistName: null,
    //   songName: null,
    // },
    searchString: "",
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Row>
            <SideBar
              searchString={(string) => this.setState({ searchString: string })}
              searchStr={this.state.searchString}
            />
            <Route
              path="/"
              exact
              render={(props) => (
                <Home {...props} searchString={this.state.searchString} />
              )}
            />
            <Route
              path="/artistDetails/:id"
              exact
              render={(props) => <ArtistDetails {...props} />}
            />
            <Route path="/favorites" exact component={Likes} />
            <Route
              path="/albumDetails/:id"
              exact
              render={(props) => <AlbumDetails {...props} />}
            />
          </Row>
          <PlayBar />
        </Router>
      </div>
    );
  }
}

export default App;
