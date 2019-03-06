import React, { Component } from "react";
import{Nav} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';

class TopMenu extends Component {


  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Rick and Morty Character Guide</h1>
          <p className="lead">
            Look and search for all Rick and Morty Characters
          </p>

          <Nav activeKey="all" onSelect={this.props.onSelect}>

            <Nav.Item>
              <Nav.Link eventKey="all" href="#">
                Show all the characters
              </Nav.Link>
            </Nav.Item>

            <NavDropdown title={this.props.title} id="nav-dropdown">
            {this.props.episodes.map( episode => (
                <NavDropdown.Item key={episode.id} eventKey={episode.id}>{episode.episode}</NavDropdown.Item>
            ))}
            </NavDropdown>

          </Nav>
        </div>
      </div>
    );
  }
}

export default TopMenu;
