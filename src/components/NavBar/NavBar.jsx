import React from "react";
import classes from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>
                    Profile
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>
                    Messages
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" activeClassName={classes.activeLink}>
                    Users
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="">News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="">Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="">Settings</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
