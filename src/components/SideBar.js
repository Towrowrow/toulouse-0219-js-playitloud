import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Avatar from 'react-avatar';


class SideBar extends React.Component {
  render() {
    return (
      <div className='sidebar my-3 mx-4'>
        <Avatar className="px-2" name="Réminou Tilmant" size="75" round={true} color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} />
        <p className="playItLoud px-2 pt-2">Play it Loud</p>
        <Nav vertical>
          <NavItem>
            <NavLink className="linksidebar" href="#">Accueil</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="linksidebar" href="#">Favoris</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="linksidebar" href="#">Playlist</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="linksidebar" href="#">Albums</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}




export default SideBar;