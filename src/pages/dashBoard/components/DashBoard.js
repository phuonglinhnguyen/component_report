import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MonitorRoutes from '../routes/MonitorRoutes';
import dashboardRoutes from '../routes/dashboardRoutes';
import Detail from './Detail';

const drawerWidth = 240;

const theme_override = createMuiTheme({
	overrides: {
		MuiDrawer: {
			paper: {
				height: '850px',
				top: 'none'
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
	testList: {
		fontWeight: 'bold',
		cursor: 'pointer',
		transition: 'background 0.1s ease-in',
		'&:hover': {
			background: 'lightgray'
		}
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		background: '#3c4858',
		color: 'wheat'
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: 0
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: drawerWidth
	},
	itemLink: {
		textDecoration: 'none',
		color: 'wheat',
		'&:hover': {
			color: 'white'
		}
	},
	nested: {
		paddingLeft: '40px',
		fontWeight: 'bold'
	}
});

const DashBoard = (props) => {
	const { classes, theme } = props;
	const [ open, setOpen ] = React.useState(false);
	const [ open1, setOpen1 ] = React.useState(false);
	return (
		<BrowserRouter>
			<div className={classes.root}>
				<MuiThemeProvider theme={theme_override}>
					<CssBaseline />
					<div style={{ background: 'bottom', width: '100%' }}>
						<Toolbar disableGutters={!open}>
							<IconButton
								color="inherit"
								aria-label="Open drawer"
								onClick={() => setOpen(true)}
								className={classNames(classes.menuButton, open && classes.hide)}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant="h6" color="inherit" noWrap style={{ fontWeight: 'bold' }}>
								MONITORING
							</Typography>
						</Toolbar>
					</div>
					<Drawer
						className={classes.drawer}
						variant="persistent"
						anchor="left"
						open={open}
						classes={{
							paper: classes.drawerPaper
						}}
					>
						<div className={classes.drawerHeader}>
							<span style={{ fontWeight: 'bold', paddingRight: '20px' }}>PROJECTS</span>
							<IconButton
								onClick={() => {
									setOpen(false);
								}}
							>
								{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
							</IconButton>
						</div>
						<Divider />
						<List>
							{MonitorRoutes.map((item, index) => {
								return (
									<div>
										<ListItem
											className={classes.testList}
											onClick={() => {
												setOpen1(!open1);
											}}
										>
											{open1 ? <ExpandLess /> : <ExpandMore />}
											<Link to={item.url} key={index} className={classes.itemLink}>
												{item.name}
											</Link>
										</ListItem>
										<Collapse in={open1} timeout="auto" unmountOnExit>
											<List component="div" disablePadding>
												{item.children.map((ex, i) => {
													return (
														<ListItem button className={classes.nested}>
															<Link to={ex.url} key={i} className={classes.itemLink}>
																{ex.name}
															</Link>
														</ListItem>
													);
												})}
											</List>
										</Collapse>
									</div>
								);
							})}
						</List>
					</Drawer>
					<main
						className={classNames(classes.content, {
							[classes.contentShift]: open
						})}
					>
						<Switch>
							{dashboardRoutes.map((route, index) => {
								return (
									<Route
										key={index}
										path={route.path}
										exact={route.exact}
										name={route.name}
										component={route.component}
									/>
								);
							})}
						</Switch>
						<Detail />
					</main>
					<div>test</div>
				</MuiThemeProvider>
			</div>
		</BrowserRouter>
	);
};
export default withStyles(styles, { withTheme: true })(DashBoard);
