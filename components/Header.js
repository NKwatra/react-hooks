import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Container,
  Switch,
} from "@material-ui/core";
import { Menu, GitHub } from "@material-ui/icons";
import { useContext, useState } from "react";
import ThemeContext from "../utils/context";

export default function Header(props) {
  const [switchChecked, setSwitchChecked] = useState(
    props.siteTheme === "dark"
  );
  const theme = useContext(ThemeContext);
  let customClasses = makeStyles({
    rootPage: {
      backgroundColor: theme.page,
      color: theme.text,
      padding: "40px",
      paddingTop: "100px",
    },
    root: {
      backgroundColor: theme.appbar,
      color: theme.text,
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      paddingLeft: "2rem",
    },
    switchRoot: {
      marginRight: "2rem",
      width: "42px",
      height: "26px",
      padding: "0",
    },
    switchBase: {
      padding: 1,
      color: "#000000",
      "&$checked": {
        transform: "translateX(16px)",
        color: "#ffffff",
        "& + $track": {
          backgroundColor: "#000000",
          opacity: 1,
          border: "none",
        },
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      backgroundColor: "#ffffff",
      opacity: 1,
    },
    checked: {},
    focusVisible: {},
  })();
  return (
    <Container
      disableGutters
      maxWidth={false}
      classes={{ root: customClasses.rootPage }}
    >
      <AppBar classes={{ root: customClasses.root }}>
        <Toolbar>
          <IconButton onClick={() => props.setOpen(true)}>
            <Menu fontSize="large" style={{ color: theme.text }} />
          </IconButton>
          <Typography variant="h5" classes={{ root: customClasses.title }}>
            {props.name}
          </Typography>
          <Switch
            checked={switchChecked}
            onChange={(evt) => {
              setSwitchChecked(evt.target.checked);
              props.updateSiteTheme(evt.target.checked ? "dark" : "light");
              if (typeof window !== undefined) {
                window.localStorage.setItem(
                  "react_hooks_theme",
                  evt.target.checked ? "dark" : "light"
                );
              }
            }}
            classes={{
              root: customClasses.switchRoot,
              switchBase: customClasses.switchBase,
              thumb: customClasses.thumb,
              track: customClasses.track,
              checked: customClasses.checked,
            }}
            color="default"
          />
          <a href="https://www.github.com/nkwatra">
            <GitHub fontSize="large" style={{ color: theme.text }} />
          </a>
        </Toolbar>
      </AppBar>
      {props.children}
    </Container>
  );
}
