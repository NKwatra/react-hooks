import { useContext, useState } from "react";
import styles from "../styles/effect_example.module.css";
import ThemeContext from "../utils/context";
import { Code } from "@material-ui/icons";
import { IconButton, Tooltip, Typography } from "@material-ui/core";

export default function Example(props) {
  const theme = useContext(ThemeContext);
  const [sourceCodeVisible, updateSourceCodeVisible] = useState(false);
  return (
    <div>
      <div>
        <Typography variant="h4">How it Works</Typography>
        <Typography paragraph>Some text up here</Typography>
      </div>
      <div
        className={styles.example_container}
        style={{ backgroundColor: theme.code }}
      >
        <iframe
          src={props.preview}
          className={styles.example}
          title="react-clock"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
        <Tooltip title={sourceCodeVisible ? "Hide code" : "Show code"}>
          <IconButton
            onClick={() => updateSourceCodeVisible(!sourceCodeVisible)}
            className={styles.expand}
          >
            <Code style={{ color: theme.text }} />
          </IconButton>
        </Tooltip>
        {sourceCodeVisible ? (
          <iframe
            src={props.editor}
            className={`${styles.example} ${styles.code} `}
            title="react-clock"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        ) : null}
      </div>
    </div>
  );
}
