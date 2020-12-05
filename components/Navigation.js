import { Drawer, List } from "@material-ui/core";
import { useState } from "react";
import NavbarItem from "../components/NavbarItem";
import NavItemExpandable from "./NavItemExpandable";
import { Menu, Close } from "@material-ui/icons";
import styles from "../styles/navigation.module.css";

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
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? null : (
        <Menu
          className={styles.hamburger}
          fontSize="large"
          onClick={() => setOpen(true)}
        />
      )}
      <Drawer anchor="left" open={open} className={styles.drawer}>
        {open ? (
          <Close
            fontSize="large"
            onClick={() => setOpen(false)}
            className={styles.close}
          />
        ) : null}
        <List component="nav" className={styles.marginTop}>
          {mainOptions.map((option, index) =>
            index === 0 ? (
              <NavbarItem key={option} label={option} href="/" />
            ) : (
              <NavItemExpandable {...option} key={option.label} />
            )
          )}
        </List>
      </Drawer>
    </>
  );
}
