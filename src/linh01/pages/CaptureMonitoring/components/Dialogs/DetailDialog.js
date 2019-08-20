import React from 'react';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import DetailCapture from './../DetailCapture';
const styles: any = (theme: any) => {
	return {};
};
const theme = createMuiTheme({
	overrides: {
		MuiDialog: {
			paperWidthSm: {
				maxWidth: '100%'
			}
		},
		MuiDialogContent: {
			root: {
				width: '1200px',
				height: '500px'
			}
		}
	}
});

const DetailDialog = (props) => {
	const { open, setOpen } = props;
	return (
		<MuiThemeProvider theme={theme}>
			<Dialog open={open} onClose={() => setOpen(false)}>
				<DialogTitle id="alert-dialog-title">{'Detail'}</DialogTitle>
				<DialogContent>
					<DetailCapture />
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpen(false)} color="primary" autoFocus>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</MuiThemeProvider>
	);
};
export default withStyles(styles, { withTheme: true })(DetailDialog);
