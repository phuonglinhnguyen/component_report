import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Badge from '@material-ui/core/Badge';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { getDataClassify } from '../../../../providers/data/mockData/task';
import Users from './Dialogs/Users';
const styles: any = (theme: any) => {
	return {
		rowDetail: {
			width: '20%'
		},
		rowSmall: {
			width: '10%'
		},
		btnAssign: {
			fontSize: '10px'
		}
	};
};

const theme = createMuiTheme({
	overrides: {
		MuiBadge: {
			colorPrimary: {
				backgroundColor: '#4caf50'
			}
		}
	}
});
const DetailCapture = (props) => {
	const { classes } = props;
	const data = getDataClassify();
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const [ selectedUser, setSelectedUser ] = React.useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleDelete = () => {
		alert('You clicked the delete icon.');
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	return (
		<div>
			<MuiThemeProvider theme={theme}>
				<Paper style={{ overflow: 'auto' }}>
					<Table>
						<TableHead style={{ background: 'lightgray' }}>
							<TableRow>
								<TableCell className={classes.rowSmall}>No.</TableCell>
								<TableCell align="center" className={classes.rowDetail}>
									Task ID
								</TableCell>
								<TableCell align="center" className={classes.rowDetail}>
									Task Name
								</TableCell>
								<TableCell align="center" className={classes.rowDetail}>
									File Path
								</TableCell>
								<TableCell align="center" className={classes.rowDetail}>
									User
								</TableCell>
								<TableCell align="center" className={classes.rowDetail}>
									Action
								</TableCell>
							</TableRow>
						</TableHead>
					</Table>
				</Paper>
				<Paper style={{ overflow: 'auto', height: '300px' }}>
					<Table style={{ tableLayout: 'fixed' }}>
						<TableBody>
							{data.map((item, index) => {
								return (
									<TableRow>
										<TableCell className={classes.rowSmall}>{index + 1}</TableCell>
										<TableCell align="center" className={classes.rowDetail}>
											{item.taskID}
										</TableCell>
										<TableCell align="center" className={classes.rowDetail}>
											{item.task_name}
										</TableCell>
										<TableCell align="center" className={classes.rowDetail}>
											P:/119_161116_002_505208/Images/0050_20190604
										</TableCell>
										<TableCell align="center" className={classes.rowDetail}>
											<Badge color="primary" variant="dot">
												<Chip icon={<FaceIcon />} label={item.user} onDelete={handleDelete} className={classes.chip} />
											</Badge>
										</TableCell>
										<TableCell align="center" className={classes.rowDetail}>
											<Button
												aria-describedby={id}
												className={classes.btnAssign}
												variant="contained"
												onClick={handleClick}
											>
												Assign
											</Button>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Paper>
				<Popover
					id={id}
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center'
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center'
					}}
				>
					<Users selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
				</Popover>
			</MuiThemeProvider>
		</div>
	);
};
export default withStyles(styles, { withTheme: true })(DetailCapture);
