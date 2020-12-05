import { ListItem, ListItemText, Typography } from "@material-ui/core";
import styles from "../styles/navbar_item.module.css";

export default function NavbarItem(props) {
  return (
    <>
      <ListItem button component="a" href={props.href}>
        <ListItemText className={props.padded ? styles.padded : ""}>
          <Typography
            variant="h6"
            gutterBottom
            color={props.active ? "primary" : "initial"}
          >
            {props.label}
          </Typography>
        </ListItemText>
      </ListItem>
    </>
  );
}
