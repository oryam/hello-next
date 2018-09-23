import React from "react";
import Link from 'next/link';
import getConfig from 'next/config';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "../../vendors/Grid/GridContainer.jsx";
import GridItem from "../../vendors/Grid/GridItem.jsx";
import Button from "../../vendors/CustomButtons/Button.jsx";
import exampleStyle from "../../../static/jss/material-kit-react/views/componentsSections/exampleStyle.jsx";

import landing from "../../../static/img/landing.jpg";
import profile from "../../../static/img/profile.jpg";

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();

class SectionExamples extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Link href={`${publicRuntimeConfig.appContext}`}>
                <a className={classes.link}>
                  <img
                    src={landing}
                    alt="..."
                    className={
                      classes.imgRaised +
                      " " +
                      classes.imgRounded +
                      " " +
                      classes.imgFluid
                    }
                  />
                </a>
              </Link>
              <Link href={`${publicRuntimeConfig.appContext}`}>
                <Button color="primary" size="lg" simple>
                  View landing page
                </Button>
              </Link>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Link href={`${publicRuntimeConfig.appContext}`}>
                <a className={classes.link}>
                  <img
                    src={profile}
                    alt="..."
                    className={
                      classes.imgRaised +
                      " " +
                      classes.imgRounded +
                      " " +
                      classes.imgFluid
                    }
                  />
                </a>
              </Link>
              <Link href={`${publicRuntimeConfig.appContext}`}>
                <Button color="primary" size="lg" simple>
                  View profile page
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(exampleStyle)(SectionExamples);
