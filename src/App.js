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
import Login from "./components/Login";

class App extends React.Component {
  state = {
    currentSong: {
      albumCover: null,
      artistName: null,
      songName: null,
    },
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
            <Route path="/login" exact component={Login} />
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
              render={(props) => (
                <ArtistDetails
                  {...props}
                  currentSong={(currCover, currArtist, currSong) => {
                    this.setState({
                      currentSong: {
                        albumCover: currCover,
                        artistName: currArtist,
                        songName: currSong,
                      },
                    });
                  }}
                />
              )}
            />
            <Route
              path="/albumDetails/:id"
              exact
              render={(props) => (
                <AlbumDetails
                  {...props}
                  currentSong={(currCover, currArtist, currSong) => {
                    this.setState({
                      currentSong: {
                        albumCover: currCover,
                        artistName: currArtist,
                        songName: currSong,
                      },
                    });
                  }}
                />
              )}
            />
          </Row>
          <PlayBar currentSong={this.state.currentSong} />
        </Router>
      </div>
    );
  }
}

export default App;
