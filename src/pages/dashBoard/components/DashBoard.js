import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Switch } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import dashboardRoutes from './dashboardRoutes';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReportPrtformance from '../../ReportPrtformance';
import CaptureMonitoring from '../../CaptureMonitoring';
const drawerWidth = 240;

const theme_override = createMuiTheme({
	overrides: {
		MuiDrawer: {
			paper: {
				height: '980px'
			}
		},
		DashBoard: {
			toolbar: {
				justifyContent: 'space-between'
			}
		}
	}
});

const styles = (theme) => ({
	dashboard_root: {
		display: 'flex'
	},
	titleNav: {
		fontWeight: 'bold',
		paddingRight: '30px'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create([ 'width', 'margin' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create([ 'width', 'margin' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 36
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap'
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		overflowX: 'hidden',
		width: theme.spacing.unit * 7 + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing.unit * 9 + 1
		}
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar
	},
	content: {
		flexGrow: 1
	}
});
const MonitorRoutes = [
	{
		name: 'Capture Monitoring',
		url: '/capture_monitoring',
		icon: 'fa fa-desktop'
	},
	{
		name: 'Report Performance',
		url: '/report_performance',
		icon: 'fa fa-glass'
	}
];
const routes = [
	{
		path: '/bubblegum',
		sidebar: () => <div>ReportPrtformance</div>,
		main: () => <ReportPrtformance />
	},
	{
		path: '/shoelaces',
		sidebar: () => <div>CaptureMonitoring</div>,
		main: () => <CaptureMonitoring />
	}
];
const DashBoard = (props) => {
	const { classes, theme } = props;
	const [ open, setOpen ] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Router>
			<div className={classes.dashboard_root}>
				<MuiThemeProvider theme={theme_override}>
					<CssBaseline />
					<AppBar
						position="fixed"
						className={classNames(classes.appBar, {
							[classes.appBarShift]: open
						})}
					>
						<Toolbar disableGutters={!open}>
							<IconButton
								color="inherit"
								aria-label="Open drawer"
								onClick={handleDrawerOpen}
								className={classNames(classes.menuButton, {
									[classes.hide]: open
								})}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant="h6" color="inherit" noWrap>
								Basic Component
							</Typography>
						</Toolbar>
					</AppBar>
					<Drawer
						variant="permanent"
						className={classNames(classes.drawer, {
							[classes.drawerOpen]: open,
							[classes.drawerClose]: !open
						})}
						classes={{
							paper: classNames({
								[classes.drawerOpen]: open,
								[classes.drawerClose]: !open
							})
						}}
						open={open}
					>
						<div className={classes.toolbar}>
							<span className={classes.titleNav}>PROJECT</span>
							<IconButton onClick={handleDrawerClose}>
								{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
							</IconButton>
						</div>
						<Divider />
						<ul style={{ listStyleType: 'none', padding: 0 }}>
							<li>
								<Link to="/bubblegum">Report Performance</Link>
							</li>
							<li>
								<Link to="/shoelaces">Capture Monitoring</Link>
							</li>
						</ul>
						{/* <List> */}
						{/* {MonitorRoutes.map((item, index) => (
								<ListItem
									button
									key={item}
									onClick={() => {
										console.log(item);
									}}
								>
									<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
									<ListItemText primary={item.name} />
								</ListItem>
							))} */}
						{/* {routes.map((route, index) => (
							<Route key={index} path={route.path} exact={route.exact} component={route.sidebar} />
						))} */}
						{/* </List> */}
					</Drawer>
					<main className={classes.content}>
						{routes.map((route, index) => (
							// Render more <Route>s with the same paths as
							// above, but different components this time.
							<Route key={index} path={route.path} exact={route.exact} component={route.main} />
						))}
					</main>
				</MuiThemeProvider>
			</div>
		</Router>
	);
};
export default withStyles(styles, { withTheme: true })(DashBoard);
