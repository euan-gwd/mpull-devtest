import React, { Fragment } from 'react';
import NavItems from '../NavItems';
import './SideMenu.css';

const SideMenu = props => {
  return (
    <Fragment>
      <nav>
        <NavItems />
      </nav>
    </Fragment>
  );
};

export default SideMenu;
