const theme = {
  breakpoints: ["640px", "1024px"],
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: 'Inter, "Avenir Next", sans-serif',
    monospace: '"IBM Plex Mono", Menlo, monospace'
  },
  fontWeights: {
    light: 200,
    body: 300,
    heading: 600,
    bold: 600
  },
  fontSizes: [
    "1.2rem", // 0
    "1.6rem", // 1
    "2.1rem", // 2
    "2.4rem", // 3
    "4rem", // 4
    "4.6rem", // 5
    "6.4rem", // 6
    "9.6rem" // 7
  ],
  styles: {
    root: {
      lineHeight: 1
    }
  },
  lineHeights: {
    body: 1,
    heading: 1
  },
  letterSpacings: {
    main: "-0.04em"
  },
  colors: {
    text: "#fff",
    textGrey: "#A1A1A1",
    gradient: "#a2a2a2",
    background: "#000"
  },
  text: {
    heading: {
      display: "inline",
      fontSize: [5, 6, 7],
      letterSpacing: "main",
      textAlign: "center",
      backgroundColor: "text",
      background: (theme) =>
        `linear-gradient(90deg, ${theme.colors.text} 40%, ${theme.colors.gradient} 100%)`,
      "-moz-background-clip": "text",
      "background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      "-moz-text-fill-color": "transparent"
    },
    h2: {
      variant: "text.heading",
      fontSize: "46px"
    },
    small: {
      color: "textGrey",
      letterSpacing: "main",
      fontFamily: "body",
      fontWeight: "light",
      fontSize: [1, 2]
    }
  }
};

export default theme;
