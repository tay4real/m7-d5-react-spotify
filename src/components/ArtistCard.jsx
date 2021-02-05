import React from "react";

import { Col, Alert, Spinner } from "react-bootstrap";

class ArtistCard extends React.Component {
  state = {
    artist: {},
    loading: true,
  };
  fetchArtist = async () => {
    this.setState({ loading: true });
    try {
      let response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/artist/" + this.props.id,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "dc976bef57mshfe1863c26e99ba2p1cc559jsn861f89a53ff3",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );

      let artist = await response.json();

      if (response.ok) {
        setTimeout(() => {
          this.setState({ artist: artist, loading: false });
        }, 2000);
      } else {
        <Alert variant="danger">Something went wrong!</Alert>;
        this.setState({ loading: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  selectArtist = () => {
    this.props.history.push("/artistDetails/" + this.props.id);
  };

  componentDidMount = () => {
    this.fetchArtist();
  };

  render() {
    return (
      <>
        <Col xs={6} md={3} lg={2} className="covers mb-2">
          {this.state.loading ? (
            <Spinner animation="border" variant="success" />
          ) : (
            <>
              <div className="position-relative">
                <img
                  className="img-fluid"
                  src={this.state.artist.picture_big}
                  alt={this.state.artist.name}
                />
                <div className="playMusic">
                  <i className="far fa-heart fa-2x mx-2 position-relative">
                    <div className="saveLibrary">Save to your Library</div>
                  </i>
                  <i
                    className="far fa-play-circle fa-4x"
                    onClick={() => {
                      this.selectArtist();
                    }}
                  ></i>
                  <i className="fas fa-ellipsis-h fa-2x mx-2">
                    <div className="more">More</div>
                  </i>
                </div>
              </div>
              <p className="text-center spotify-text-secondary mt-2">
                {this.state.artist.name}
              </p>
            </>
          )}
        </Col>
      </>
    );
  }
}

export default ArtistCard;
