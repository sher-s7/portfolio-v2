const theme = {
  breakpoints: ["640px", "1024px", "1440px"],
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
    "5.5rem", // 6
    "6.4rem", // 7
    "9.6rem" // 8
  ],
  styles: {
    root: {
      lineHeight: 1
    }
  },
  lineHeights: {
    body: 1,
    heading: 1.3
  },
  letterSpacings: {
    main: "-0.04em"
  },
  colors: {
    text: "#fff",
    gradient: "#a2a2a2",
    background: "#000",
    light: "rgba(255,255,255,0.1)"
  },
  text: {
    default: {
      fontFamily: "body",
      fontWeight: "body",
      fontSize: 1,
      letterSpacing: "main",
      color: "text",
      textDecoration: "none"
    },
    heading: {
      display: "inline",
      fontSize: [6, 7, 8],
      letterSpacing: "main",
      textAlign: "center",
      backgroundColor: "text",
      background: (theme) =>
        `linear-gradient(90deg, ${theme.colors.text} 40%, ${theme.colors.gradient} 100%)`,
      MozBackgroundClip: "text",
      backgroundClip: "text",
      textFillColor: "transparent",
      MozTextFillColor: "transparent"
    },
    h2: {
      variant: "text.heading",
      fontSize: [5, 6, 7]
    },
    small: {
      letterSpacing: "main",
      fontFamily: "body",
      fontWeight: "light",
      fontSize: [1, 2]
    }
  },
  links: {
    primary: {
      fontFamily: "monospace",
      fontWeight: "body",
      fontSize: [1, 2],
      textDecoration: "none",
      color: "text"
    }
  },
  buttons: {
    primary: {
      fontFamily: "monospace",
      fontWeight: "body",
      fontSize: [1, 2],
      textDecoration: "none",
      color: "text",
      backgroundColor: "transparent",
      border: "none",
      lineHeight: "body",
      cursor: "pointer"
    },
    clear: {
      fontFamily: "body",
      color: "text",
      backgroundColor: "transparent",
      border: "none",
      lineHeight: "body",
      cursor: "pointer",
      letterSpacing: "main",
      padding: 0
    }
  }
};

export default theme;
