import { createContext } from "react";

const ThemeContext=createContext('light');
//moving between components should bw done by link nav not url nor a not to render the whole app and back to the default value of the cntext
export default ThemeContext;