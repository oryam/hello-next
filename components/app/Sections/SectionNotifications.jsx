import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import SnackbarContent from "../../vendors/Snackbar/SnackbarContent.jsx";
import Clearfix from "../../vendors/Clearfix/Clearfix.jsx";
import notificationsStyles from "../../../static/jss/material-kit-react/views/componentsSections/notificationsStyles.jsx";

class SectionNotifications extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} id="notifications">
        <div className={classes.container}>
          <div className={classes.title}>
            <h3>Notifications</h3>
          </div>
        </div>
        <SnackbarContent
          message={
            <span>
              <b>INFO ALERT:</b> You've got some friends nearby, stop looking at
              your phone and find them...
            </span>
          }
          close
          color="info"
          icon="info_outline"
        />
        <SnackbarContent
          message={
            <span>
              <b>SUCCESS ALERT:</b> You've got some friends nearby, stop looking
              at your phone and find them...
            </span>
          }
          close
          color="success"
          icon="check"
        />
        <SnackbarContent
          message={
            <span>
              <b>WARNING ALERT:</b> You've got some friends nearby, stop looking
              at your phone and find them...
            </span>
          }
          close
          color="warning"
          icon="warning"
        />
        <SnackbarContent
          message={
            <span>
              <b>DANGER ALERT:</b> You've got some friends nearby, stop looking
              at your phone and find them...
            </span>
          }
          close
          color="danger"
          icon="info_outline"
        />
        <Clearfix />
      </div>
    );
  }
}

export default withStyles(notificationsStyles)(SectionNotifications);
