import { Drawer, List, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import NavbarItem from "../components/NavbarItem";
import NavItemExpandable from "./NavItemExpandable";
import { Close } from "@material-ui/icons";
import styles from "../styles/navigation.module.css";
import ThemeContext from "../utils/context";

const basicHookOptions = ["useState", "useEffect", "useContext"];
const additionalHooksOptions = [
  "useReducer",
  "useCallback",
  "useMemo",
  "useRef",
  "useImperativeHandle",
  "useLayoutEffect",
  "useDebugValue",
];
const mainOptions = [
  "Introduction",
  { label: "Basic Hooks", options: basicHookOptions },
  { label: "Additional Hooks", options: additionalHooksOptions },
];

export default function Navigation(props) {
  const theme = useContext(ThemeContext);
  let customClasses = makeStyles({
    root: {
      backgroundColor: theme.background,
    },
    paper: {
      backgroundColor: theme.background,
    },
    paperAnchorLeft: {
      backgroundColor: theme.background,
    },
    modal: {
      backgroundColor: theme.background,
    },
  })();

  return (
    <>
      <Drawer
        anchor="left"
        open={props.open}
        className={styles.drawer}
        classes={{ ...customClasses }}
      >
        {props.open ? (
          <Close
            fontSize="large"
            onClick={() => props.setOpen(false)}
            className={styles.close}
            style={{ color: theme.text }}
          />
        ) : null}
        <List
          component="nav"
          className={styles.marginTop}
          classes={{ root: customClasses.root }}
        >
          {mainOptions.map((option, index) =>
            index === 0 ? (
              <NavbarItem
                key={option}
                label={option}
                href="/"
                active={props.active === "Introduction"}
              />
            ) : (
              <NavItemExpandable
                {...option}
                key={option.label}
                active={
                  option.options.includes(props.active) ? props.active : null
                }
              />
            )
          )}
        </List>
      </Drawer>
    </>
  );
}
