import React from 'react';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

const TabContainer = (props) => {
	console.log(props);

	return <div>{props.children}</div>;
};

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper
	},
	detail: {
		width: '100%',
		height: '300px',
		background: 'pink',
		position: 'absolute'
	}
});

const Detail = (props) => {
	const { classes } = props;
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event, value) => {
		setValue(value);
	};

	return (
		<div className={classes.detail}>
			<div className={classes.root}>
				<AppBar position="static">
					<Tabs value={value} onChange={handleChange}>
						<Tab label="Tasks" />
						<Tab label="Incidents" />
						<Tab label="Fails" />
					</Tabs>
				</AppBar>
				{value === 0 && <TabContainer>Tasks</TabContainer>}
				{value === 1 && <TabContainer>Incidents</TabContainer>}
				{value === 2 && <TabContainer>Fails</TabContainer>}
			</div>
		</div>
	);
};
export default withStyles(styles, { withTheme: true })(Detail);
