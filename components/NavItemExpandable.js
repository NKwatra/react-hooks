import {
  Collapse,
  ListItem,
  ListItemText,
  List,
  Typography,
} from "@material-ui/core";
import { ChevronRight, ExpandLess } from "@material-ui/icons";
import NavbarItem from "./NavbarItem";
import { useState } from "react";

export default function NavItemExpandable(props) {
  const [open, setOpen] = useState(props.active !== null);
  return (
    <>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemText>
          <Typography variant="h6">{props.label}</Typography>
        </ListItemText>
        {open ? <ExpandLess /> : <ChevronRight />}
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
