import {
  ListItem,
  ListItemText,
  Typography,
  makeStyles,
} from "@material-ui/core";
import styles from "../styles/navbar_item.module.css";
import { useContext } from "react";
import ThemeContext from "../utils/context";

export default function NavbarItem(props) {
  const theme = useContext(ThemeContext);
  let customClasses = makeStyles({
    button: {
      backgroundColor: theme.background,
    },
    root: {
      backgroundColor: theme.background,
    },
  });
  return (
    <>
      <ListItem
        button
        component="a"
        href={props.href}
        classes={{ ...customClasses }}
      >
        <ListItemText
          className={props.padded ? styles.padded : ""}
          classes={{ root: customClasses.root }}
        >
          <Typography
            variant="h6"
            gutterBottom
            style={{ color: props.active ? theme.active : theme.text }}
          >
            {props.label}
          </Typography>
        </ListItemText>
      </ListItem>
    </>
  );
}
