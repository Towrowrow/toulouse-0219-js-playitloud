/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Route, Switch, NavLink as NavRouter } from 'react-router-dom';
import ProfilePage from './ProfilePage';

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      profile: ""
    };
  }
  componentDidMount() {
    this.getUserProfil()
  }

  getUserProfil() {
    fetch("https://api.spotify.com/v1/me", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          profile: data,
        }); console.log(data)
      });
  }
  toggle() {
    this.setState({
      // eslint-disable-next-line react/destructuring-assignment
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar className="sidebar" light expand="md">
          <div className="pictureName">
            {this.state.profile &&
              <img
                style={{ borderRadius: "100%", maxWidth: "20vh" }}
                className="profilePicture"
                src={this.state.profile.images[0].url}
                alt={this.state.profile.display_name}
              />}
            <h6 style={{ color: "white", paddingTop: "3vh" }}>Bonjour {this.state.profile.display_name}</h6>
            <NavbarBrand style={{ color: 'rgb(229,9,20)' }} className="playItLoud" href="/accueil">Play It Loud</NavbarBrand>
          </div>
          <NavbarToggler className="togglerButton" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="linksidebar" navbar>
              <NavItem>
                <NavLink tag={NavRouter} className="asidebar" exact to="/">Accueil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NavRouter} className="asidebar" exact to="/profile">Ton profil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NavRouter} className="asidebar" exact to="/favoris">Favoris</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NavRouter} className="asidebar" exact to="/playlists">Playlists</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NavRouter} className="asidebar" exact to="/albums">Albums</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    );
  }
}


export default SideBar;
