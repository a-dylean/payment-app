import { createTheme } from '@mui/material';

export const backgroundColor = '#f7f6f3';
export const lightGrey = '#dedede';
export const orange = '#cb5540';
export const header = '#f0f1ed';

export const theme = createTheme({
  palette: {
    primary: {
      main: orange,
      light: orange,
    },
    secondary: {
      main: orange,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 1163,
      md: 1163,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Work Sans',
    },
    h1: {
      fontSize: '2.5rem',
      color: orange,
      fontWeight: "bold" 
    },
    h5: {
      fontSize: '1.2rem',
      fontWeight: "bold"
    },
    h6: {
      fontSize: '1.2rem',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
              body {
                background-color: ${backgroundColor};
                word-break: break-word;
              }
            `,
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          marginTop: '3rem',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          height: 'auto',
          borderRadius: '0.5rem',
          width: 'auto',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          display: 'block',
          padding: '0.5rem',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 0,
          paddingRight: '0.5rem',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: orange,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: orange,
          },
          fontWeight: 700,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: header,
          borderBottom: `1px solid ${lightGrey}`,
          padding: '0 1rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: orange,
          },
          '&:hover': {
            backgroundColor: orange,
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          color: orange,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '& .MuiSlider-thumb': {
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
              boxShadow: 'inherit',
            },
          },
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          padding: 0
        }
      }
    }
  },
});
