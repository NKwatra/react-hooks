import {
  Collapse,
  ListItem,
  ListItemText,
  List,
  Typography,
} from "@material-ui/core";
import { ChevronRight, ExpandLess } from "@material-ui/icons";
import NavbarItem from "./NavbarItem";
import { useState, useContext } from "react";
import ThemeContext from "../utils/context";

export default function NavItemExpandable(props) {
  const [open, setOpen] = useState(props.active !== null);
  const theme = useContext(ThemeContext);
  return (
    <>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemText>
          <Typography variant="h6" style={{ color: theme.text }}>
            {props.label}
          </Typography>
        </ListItemText>
        {open ? (
          <ExpandLess style={{ color: theme.text }} />
        ) : (
          <ChevronRight style={{ color: theme.text }} />
        )}
      </ListItem>
      <Collapse in={open} timeout="auto">
        <List component="div">
          {props.options.map((option) => (
            <NavbarItem
              href={`/${option}`}
              label={option}
              key={option}
              padded
              active={option === props.active}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
}
