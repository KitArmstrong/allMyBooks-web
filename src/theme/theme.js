import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#4caf50',
    },
  },
  status: {
    danger: 'orange',
  },
});