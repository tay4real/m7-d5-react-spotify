import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import logo from "./assetss/spologo.png";

class Login extends React.Component {
  state = {
    selectedArtist: {},
  };
  render() {
    return (
      <>
        <div className="d-flex py-3">
          <img src={logo} className="m-auto" width="200" alt="Spotify Logo" />
        </div>
        <hr />
        <Container className="d-flex flex-column justify-content-center align-content-center">
          <Container fluid>
            <div className="row">
              <div className="col-xs-12 text-center">
                <h6 className="">To continue, log in to Spotify.</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <button type="button" className="btn">
                  <i className="fab fa-facebook"></i>CONTINUE WITH FACEBOOK
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <button type="button" className="btn aButton">
                  <i className="fab fa-apple"></i>CONTINUE WITH APPLE
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <button type="button" class="btn gButton btn-outline-secondary">
                  <i class="fab fa-google"></i>CONTINUE WITH GOOGLE
                </button>
              </div>
            </div>
          </Container>

          <hr />

          <Form className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <Form.Label>Email address or username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email address or username"
                  id="username"
                  name="username"
                  onChange={(e) =>
                    this.setState({ location: e.currentTarget.value }, () => {
                      console.log(this.state);
                    })
                  }
                  value={this.state.username}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Password"
                  id="password"
                  name="password"
                  onChange={(e) =>
                    this.setState({ location: e.currentTarget.value }, () => {
                      console.log(this.state);
                    })
                  }
                  value={this.state.password}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <Button variant="primary" onClick={() => {}}>
                  Forgot your password
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <label for="checkboxlab" className="labelbox">
                  <input type="checkbox" id="checkboxlab" />
                  Remember me
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <button type="button" className="btn loginButton">
                LOG IN
              </button>
            </div>
          </Form>

          <div className="row">
            <div className="col col-md-6 m-auto">
              <h6 className="text-center">Don't have an account?</h6>
            </div>
          </div>

          <div className="row">
            <div className="col col-md-6 m-auto">
              <button
                type="button"
                className="btn cButton btn-outline-secondary rounded-pill w-100"
              >
                SIGN UP FOR SPOTIFY
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-sx-12">
              <div className="row">
                <hr />
              </div>
              <div className="row text-center mt-0">
                <h6 className="" style={{ fontSize: "18px !important;" }}>
                  Don't have an account?
                </h6>
              </div>
              <div>
                <div className="row">
                  <div className="col-sx-12">
                    <button
                      type="button"
                      className="btn cButton btn-outline-secondary"
                    >
                      SIGN UP FOR SPOTIFY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default Login;
