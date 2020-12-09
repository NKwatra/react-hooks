import Navigation from "../components/Navigation";
import ThemeContext, { siteThemes, theme } from "../utils/context";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Box, Typography, CircularProgress } from "@material-ui/core";

export default function Home() {
  const [siteTheme, setSiteTheme] = useState("dark");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window !== undefined) {
      setProgress(30);
      const currentTheme = window.localStorage.getItem(theme);
      setProgress(60);
      if (currentTheme !== null && siteTheme !== currentTheme)
        setSiteTheme(currentTheme);
      setProgress(100);
      setLoading(false);
    }
  }, []);

  return loading ? (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" value={progress} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(progress)}%`}</Typography>
      </Box>
    </Box>
  ) : (
    <ThemeContext.Provider value={siteThemes[siteTheme]}>
      <Navigation active="Introduction" open={open} setOpen={setOpen} />
      <Header
        setOpen={setOpen}
        name="Introduction"
        updateSiteTheme={setSiteTheme}
        siteTheme={siteTheme}
      />
    </ThemeContext.Provider>
  );
}
