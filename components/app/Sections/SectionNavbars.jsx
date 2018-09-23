import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// core components
import GridContainer from "../../vendors/Grid/GridContainer.jsx";
import GridItem from "../../vendors/Grid/GridItem.jsx";
import Header from "../../vendors/Header/Header.jsx";
import CustomInput from "../../vendors/CustomInput/CustomInput.jsx";
import CustomDropdown from "../../vendors/CustomDropdown/CustomDropdown.jsx";
import Button from "../../vendors/CustomButtons/Button.jsx";

import navbarsStyle from "../../../static/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

import image from "../../../static/img/bg.jpg";
import profileImage from "../../../static/img/faces/avatar.jpg";

class SectionNavbars extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Menu</h3>
              </div>
              <Header
                brand="Menu"
                color="primary"
                leftLinks={
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Button
                        href="#pablo"
                        className={classes.navLink}
                        onClick={e => e.preventDefault()}
                        color="transparent"
                      >
                        Link
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <Button
                        href="#pablo"
                        className={classes.navLink}
                        onClick={e => e.preventDefault()}
                        color="transparent"
                      >
                        Link
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <CustomDropdown
                        buttonText="Dropdown"
                        dropdownHeader="Dropdown Header"
                        buttonProps={{
                          className: classes.navLink,
                          color: "transparent"
                        }}
                        dropdownList={[
                          "Action",
                          "Another action",
                          "Something else here",
                          { divider: true },
                          "Separated link",
                          { divider: true },
                          "One more separated link"
                        ]}
                      />
                    </ListItem>
                  </List>
                }
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Menu with Icons</h3>
              </div>
              <Header
                brand="Icons"
                color="info"
                rightLinks={
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Button color="transparent" className={classes.navLink}>
                        <Icon className={classes.icons}>email</Icon>
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <Button color="transparent" className={classes.navLink}>
                        <Icon className={classes.icons}>face</Icon>
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <CustomDropdown
                        left
                        hoverColor="info"
                        dropdownHeader="Dropdown Header"
                        buttonIcon="settings"
                        buttonProps={{
                          className: classes.navLink,
                          color: "transparent"
                        }}
                        dropdownList={[
                          "Action",
                          "Another action",
                          "Something else here",
                          { divider: true },
                          "Separated link",
                          { divider: true },
                          "One more separated link"
                        ]}
                      />
                    </ListItem>
                  </List>
                }
              />
            </GridItem>
          </GridContainer>
          <div className={classes.title}>
            <h3>Navigation</h3>
          </div>
        </div>
        <div id="navbar" className={classes.navbar}>
          <div
            className={classes.navigation}
            style={{ backgroundImage: "url(" + image + ")" }}
          >
            <Header
              brand="Brand"
              color="rose"
              leftLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Link
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Link
                    </Button>
                  </ListItem>
                </List>
              }
              rightLinks={
                <div>
                  <CustomInput
                    white
                    inputRootCustomClasses={classes.inputRootCustomClasses}
                    formControlProps={{
                      className: classes.formControl
                    }}
                    inputProps={{
                      placeholder: "Search",
                      inputProps: {
                        "aria-label": "Search",
                        className: classes.searchInput
                      }
                    }}
                  />
                  <Button justIcon round color="white">
                    <Icon className={classes.searchIcon}>search</Icon>
                  </Button>
                </div>
              }
            />
            <Header
              brand="Info Color"
              color="info"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink + " " + classes.navLinkActive}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Discover
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Profile
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Settings
                    </Button>
                  </ListItem>
                </List>
              }
            />
            <Header
              brand="Primary Color"
              color="primary"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink + " " + classes.navLinkActive}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      <Icon className={classes.icons}>explore</Icon> Discover
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      <Icon className={classes.icons}>account_circle</Icon> Profile
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      <Icon className={classes.icons}>settings</Icon> Settings
                    </Button>
                  </ListItem>
                </List>
              }
            />
            <Header
              brand="Navbar with notifications"
              color="dark"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Discover
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Wishlist
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      justIcon
                      round
                      href="#pablo"
                      className={classes.notificationNavLink}
                      onClick={e => e.preventDefault()}
                      color="rose"
                    >
                      <Icon className={classes.icons}>email</Icon>
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <CustomDropdown
                      left
                      caret={false}
                      hoverColor="black"
                      dropdownHeader="Dropdown Header"
                      buttonText={
                        <img
                          src={profileImage}
                          className={classes.img}
                          alt="profile"
                        />
                      }
                      buttonProps={{
                        className:
                          classes.navLink + " " + classes.imageDropdownButton,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Me",
                        "Settings and other stuff",
                        "Sign out"
                      ]}
                    />
                  </ListItem>
                </List>
              }
            />
            <Header
              brand="Navbar with profile"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Discover
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Wishlist
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.registerNavLink}
                      onClick={e => e.preventDefault()}
                      color="rose"
                      round
                    >
                      Register
                    </Button>
                  </ListItem>
                </List>
              }
            />
            <Header
              brand="Transparent"
              color="transparent"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      className={
                        classes.navLink + " " + classes.socialIconsButton
                      }
                    >
                      <i
                        className={
                          classes.socialIcons +
                          " " +
                          classes.marginRight5 +
                          " fab fa-twitter"
                        }
                      />{" "}
                      Twitter
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      className={
                        classes.navLink + " " + classes.socialIconsButton
                      }
                    >
                      <i
                        className={
                          classes.socialIcons +
                          " " +
                          classes.marginRight5 +
                          " fab fa-facebook"
                        }
                      />{" "}
                      Facebook
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      className={
                        classes.navLink + " " + classes.socialIconsButton
                      }
                    >
                      <i
                        className={
                          classes.socialIcons +
                          " " +
                          classes.marginRight5 +
                          " fab fa-instagram"
                        }
                      />{" "}
                      Instagram
                    </Button>
                  </ListItem>
                </List>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(navbarsStyle)(SectionNavbars);
