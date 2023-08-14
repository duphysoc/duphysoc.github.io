import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// Define your global styles
const styles = {
  global: props => ({
    body: {
      bg: mode('#FFFFFF', '#202020')(props), // Set background color to white in light mode and dark gray in dark mode
      color: mode('black', 'white')(props), // Set text color to black in light mode and white in dark mode
      fontFamily: 'sans-serif', // Use a sans-serif font for the entire website
    },
  }),
};

// Define your color mode configuration
const config = {
  initialColorMode: 'dark', // Start in dark mode by default
  useSystemColorMode: true, // Respect the user's system preference for light or dark mode
};

// Define your custom font styles if needed
const fonts = {
  heading: 'Roboto', // Use the Roboto font for headings
  body: 'Open Sans', // Use the Open Sans font for body text
};

// Create your custom theme by combining your styles, color mode config, and fonts
export const myTheme = extendTheme({ config, styles, fonts });
