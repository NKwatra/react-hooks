import Navigation from "../components/Navigation";
import ThemeContext, { siteThemes, theme } from "../utils/context";
import { useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const [siteTheme, setSiteTheme] = useState("dark");
  const [open, setOpen] = useState(false);

  return (
    <ThemeContext.Provider value={siteThemes[siteTheme]}>
      <Navigation active="Introduction" open={open} setOpen={setOpen} />
      <Header
        setOpen={setOpen}
        name="Introduction"
        updateSiteTheme={setSiteTheme}
      />
    </ThemeContext.Provider>
  );
}
