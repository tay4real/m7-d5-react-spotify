import React from "react";
import { Col, Row, Container, Table } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class AlbumDetails extends React.Component {
  state = {
    album: {},
    tracks: [],
    submitCounter: 0,
    deleteCounter: 0,
    editComment: { comment: {}, editCounter: 0 },
  };

  fetchAlbum = async () => {
    try {
      let response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/album/" +
          this.props.match.params.id,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "dc976bef57mshfe1863c26e99ba2p1cc559jsn861f89a53ff3",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      let album = await response.json();
      album.tracks = album.tracks.data;

      this.setState({ album: album, tracks: album.tracks });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.fetchAlbum();
  };
  render() {
    return (
      <>
        <Col
          xs={12}
          md={10}
          //   className="bg_grad"
          style={{ overflowY: "scroll", paddingBottom: "25%" }}
        >
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div className="">
                <div
                  className="background"
                  style={{
                    width: "100%",
                    height: "30vw",
                    display: "block",
                    zIndex: -1,
                    position: "absolute",
                    filter: "blur(50px)",
                  }}
                ></div>
                <Container>
                  <Row className="mt-4">
                    <Col xs={4}>
                      <img
                        src={this.state.album.cover_xl}
                        alt=""
                        className="mt-1 img-fluid"
                        id="albumImg"
                      />
                    </Col>
                    <Col xs={8}>
                      <h2 className="text-light">
                        {this.state.album.record_type}
                      </h2>
                      <h2 className="text-light">
                        Title: {this.state.album.title}
                      </h2>
                      <h3
                        style={{
                          color: "var(--spotify_green)",
                          WebkitTextStroke: "0.5px black",
                        }}
                      >
                        <strong>Spotify</strong>
                        <br />
                        {this.state.album.nb_tracks} songs
                        <br />
                        Duration:{" "}
                        {(this.state.album.duration / 60)
                          .toFixed(2)
                          .toString()
                          .replace(".", ":")}{" "}
                        min
                      </h3>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div>
                <Table className=" table-borderless  table-dark mt-5">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Album</th>
                      <th scope="col">Date Added</th>
                      <th scope="col">
                        <i className="far fa-clock"></i>
                      </th>
                      <th scope="col">
                        <i className="fas fa-play"></i>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.tracks.map((tracks, index) => (
                      <tr key={tracks.id + "a"}>
                        <td>{index}</td>
                        <td>
                          <>
                            <strong>{tracks.title}</strong>
                            <br />
                            <p
                              style={{ display: "inline" }}
                              onClick={() => {
                                this.props.history.push(
                                  "/artistDetails/" + tracks.artist.id
                                );
                              }}
                            >
                              {tracks.artist.name}
                            </p>
                          </>
                        </td>
                        <td>{this.state.album.title}</td>
                        <td>{this.state.album.release_date}</td>
                        <td>
                          {(tracks.duration / 60)
                            .toFixed(2)
                            .toString()
                            .replace(".", ":")}
                        </td>
                        <td>
                          <i
                            className="fas fa-play"
                            onClick={() =>
                              this.props.currentSong(
                                this.state.album.cover_medium,
                                this.state.album.artist.name,
                                tracks.title
                              )
                            }
                          ></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <Container>
            <Row className="d-flex justify-content-between my-5 pb-5">
              <Col md={8}>
                <CommentList
                  id={this.props.match.params.id}
                  submitCounter={this.state.submitCounter}
                  onClick={() =>
                    this.setState({
                      deleteCounter: this.state.deleteCounter + 1,
                    })
                  }
                  deleteCounter={this.state.deleteCounter}
                  editCm={(comment) =>
                    this.setState({
                      editComment: {
                        comment: comment,
                        editCounter: this.state.editComment.editCounter + 1,
                      },
                    })
                  }
                />
              </Col>
              <Col
                md={3}
                style={{ backgroundColor: "white" }}
                className="rounded d-flex justify-content-center pb-3"
              >
                <AddComment
                  id={this.props.match.params.id}
                  onClick={() =>
                    this.setState({
                      submitCounter: this.state.submitCounter + 1,
                    })
                  }
                  editedCm={this.state.editComment}
                  clearEditCommentState={() =>
                    this.setState({
                      editComment: {
                        comment: {},
                        editCounter: 0,
                      },
                    })
                  }
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </>
    );
  }
}

export default AlbumDetails;
