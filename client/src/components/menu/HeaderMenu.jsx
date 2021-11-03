import React, { useState, useContext } from "react";
import { MoreVert } from "@material-ui/icons";
import { Menu, MenuItem, makeStyles } from "@material-ui/core";
import { GoogleLogout } from "react-google-login";
import { clientId } from "../../constants/data";

//components
import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
  menuItems: {
    fontSize: 14,
    padding: "15px 60px 5px 24px",
    color: "#4a4a4a",
  },
  logout: {
    border: "none!important",
    boxShadow: "none!important",
    "& > *": {
      padding: "0!important",
    },
  },
});

const HeaderMenu = () => {
  const [open, setOpen] = useState(false);
  const { setAccount } = useContext(AccountContext);
  const classes = useStyles();

  const handelClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onLogoutSuccess = () => {
    alert("logged out successfully");
    console.clear();
    setAccount("");
  };

  return (
    <>
      <MoreVert onClick={handelClick} />
      <Menu
        id="simple-menu"
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem className={classes.menuItems} onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem className={classes.menuItems} onClick={handleClose}>
          <GoogleLogout
            className={classes.logout}
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onLogoutSuccess}
          ></GoogleLogout>
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderMenu;
