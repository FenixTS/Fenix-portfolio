import { createTheme } from '@mui/material/styles';

export const colorSchemes = {
  default: {
    primary: '#2196f3',
    secondary: '#f50057',
    background: '#ffffff',
    text: '#333333',
  },
  dark: {
    primary: '#90caf9',
    secondary: '#f48fb1',
    background: '#121212',
    text: '#ffffff',
  },
  ocean: {
    primary: '#00bcd4',
    secondary: '#ff4081',
    background: '#f5f5f5',
    text: '#263238',
  },
  forest: {
    primary: '#4caf50',
    secondary: '#ff9800',
    background: '#fafafa',
    text: '#1b5e20',
  },
  sunset: {
    primary: '#ff5722',
    secondary: '#ffc107',
    background: '#fff3e0',
    text: '#bf360c',
  },
  midnight: {
    primary: '#3f51b5',
    secondary: '#e91e63',
    background: '#1a237e',
    text: '#ffffff',
  },
  spring: {
    primary: '#8bc34a',
    secondary: '#ff5722',
    background: '#f1f8e9',
    text: '#33691e',
  },
  autumn: {
    primary: '#795548',
    secondary: '#ffd54f',
    background: '#efebe9',
    text: '#3e2723',
  },
  winter: {
    primary: '#607d8b',
    secondary: '#b2dfdb',
    background: '#eceff1',
    text: '#263238',
  },
  summer: {
    primary: '#ff9800',
    secondary: '#4caf50',
    background: '#fff8e1',
    text: '#e65100',
  },
};

export const fontFamilies = {
  default: 'Roboto, sans-serif',
  elegant: 'Playfair Display, serif',
  modern: 'Poppins, sans-serif',
  classic: 'Times New Roman, serif',
  clean: 'Open Sans, sans-serif',
  bold: 'Montserrat, sans-serif',
  tech: 'Source Code Pro, monospace',
  friendly: 'Quicksand, sans-serif',
  professional: 'Lato, sans-serif',
  artistic: 'Dancing Script, cursive',
};

export const createCustomTheme = (colorScheme: keyof typeof colorSchemes, fontFamily: keyof typeof fontFamilies) => {
  return createTheme({
    palette: {
      primary: {
        main: colorSchemes[colorScheme].primary,
      },
      secondary: {
        main: colorSchemes[colorScheme].secondary,
      },
      background: {
        default: colorSchemes[colorScheme].background,
        paper: colorSchemes[colorScheme].background,
      },
      text: {
        primary: colorSchemes[colorScheme].text,
      },
    },
    typography: {
      fontFamily: fontFamilies[fontFamily],
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 500,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 500,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.7,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.7,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            padding: '8px 24px',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
  });
}; 