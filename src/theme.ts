import {createTheme} from '@mui/material/styles'

const __DEFAULT_FONTS__ = `Open Sans, -apple-system, BlinkMacSystemFont,
'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
'Segoe UI Symbol'`
const __PRIMARY_COLOR__ = '#24272B'
const __SECONDARY_COLOR__ = '#F0B10D'
const __ERROR_COLOR__ = '#E95675'
const __SUCCESS_COLOR__ = '#00B098'
const __WARNING_COLOR__ = '#F0B10D'
const __DEFAULT_BG__ = '#f6f6f6'
const __SUBTITLE2_COLOR__ = '#9C9C9C'

const themeVar = createTheme({})
// @ts-ignore
const theme = createTheme({
  palette: {
    primary: {
      main: __PRIMARY_COLOR__,
      contrastText: '#fff',
    },
    secondary: {
      main: __SECONDARY_COLOR__,
    },
    error: {
      main: __ERROR_COLOR__,
    },
    success: {
      main: __SUCCESS_COLOR__,
      contrastText: '#fff',
    },
    background: {
      default: __DEFAULT_BG__,
    },
    warning: {
      main: __WARNING_COLOR__
    },
    action: {
      disabledBackground: __SUBTITLE2_COLOR__,
      // disabled: __TEXT_COLOR_DISABLED__
    },
    text: {
      // main: __TEXT_COLOR_DISABLED__
    }
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    fontFamily: __DEFAULT_FONTS__,
    button: {
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '0.6875rem'
    },
    h1: {
      /**
       * Pixel to rem here https://www.ninjaunits.com/converters/pixels/pixels-rem/
       */
      fontSize: '1.875rem', // 30px
      fontWeight: 700,
      color: '#000',
    },
    h2: {
      fontSize: '1.25rem', // 20px
      fontWeight: 600,
      color: '#000',
    },
    h3: {
      fontSize: '1rem', // 16px
      fontWeight: 600,
      color: '#000',
    },
    subtitle1: {
      fontSize: '0.75rem', // 12px
      fontWeight: 600,
      color: '#000',
    },
    subtitle2: {
      fontSize: '0.75rem', // 12px
      fontWeight: 600,
      color: __SUBTITLE2_COLOR__,
    },
    body1: {
      fontSize: '0.875rem', // 14px
      color: __PRIMARY_COLOR__,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem', // 14px
      color: '#9C9C9C',
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.625rem', // 10px
      fontWeight: 400,
      color: '#515151',
    }
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 30
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
        color: 'primary',
      },
      styleOverrides: {
        root: {
          fontSize: 13,
          fontWeight: 600,
        },
      }
    },
    // .css-106jfzn-MuiInputBase-root-MuiOutlinedInput-root
    // @ts-ignore
    MuiLoadingButton: {
      defaultProps: {
        loadingPosition: 'start'
      },
      styleOverrides: {
        loadingIndicator: {
          position: 'initial',
          marginRight: '8px',
        }
      }
    },
    // MuiCardContent: {
    //   styleOverrides: {
    //     root: {
    //       padding: 12,
    //       "&:last-child": {
    //         paddingBottom: 12
    //       }
    //     }
    //   }
    // },
    // MuiFormLabel: {
    //   styleOverrides: {
    //     root: {
    //       marginTop: -10
    //     }
    //   }
    // },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: __DEFAULT_BG__,
        }
      }
    },
    // MuiButtonBase: {
    //   defaultProps: {
    //     disableRipple: true
    //   }
    // },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            fontStyle: 'italic',
          },
        }
      }
      // .css-1qhv4jv-MuiInputBase-input-MuiOutlinedInput-input
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        size: 'small',
      }
    },
    MuiSelect: {
      defaultProps: {
        size: 'small',
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          [themeVar.breakpoints.up('md')]: {
            marginTop: '20px',
          },
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        shrink: {
          [themeVar.breakpoints.up('md')]: {
            fontSize: '19px',
            // top: '-16px',
            top: '-16px',
            // top: '-20px',
            left: '-13px',
            // backgroundColor: 'white',
          },
          [themeVar.breakpoints.down('md')]: {
            marginTop: '-10px'
          },
        },
        outlined: {
          '&$shrink': {
            transform: 'translate(0px, 0px) scale(0.75)',
          },
        },
      },
      // InputLabelProps={{ shrink: shrink1 }}
    },
    MuiCardHeader: {
      styleOverrides: {
        action: {
          marginTop: -5,
          marginBottom: -5
        },
        title: {
          fontSize: 16,
          fontWeight: 600,
          color: '#000'
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0
        },
        multiline: {
          width: '100%'
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
          '& .MuiListItem-button': {
            transition: 'all .2s',

            '& > .MuiSvgIcon-root': {
              minWidth: 34
            },
            '& .MuiTouchRipple-root': {
              opacity: 0.2
            }
          },
        },

      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
        }
      }
    },
    MuiTablePagination: {
      styleOverrides: {
        input: {
          display: 'none',
          [themeVar.breakpoints.up('sm')]: {
            display: 'flex'
          }
        },
        selectLabel: {
          display: 'none',
          [themeVar.breakpoints.up('sm')]: {
            display: 'flex'
          }
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          [themeVar.breakpoints.down('md')]: {

          }
        }
      }
    },
  },
});

export default theme;