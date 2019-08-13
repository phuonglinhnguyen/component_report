import React, { useState } from 'react';
import { get, isEmpty, filter } from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FilterComponent from './FilterComponent';

const styles: any = (theme: any) => {
	return {
		rowSmall: {
			width: '50px',
			padding: '10px'
		},
		rowLarge: {
			width: '200px',
			padding: '10px'
		},
		rowMedium: {
			width: '100px',
			padding: '10px'
		},
		rowSum: {
			width: '50px',
			padding: '15px'
		}
	};
};

const ReportComponent = (props) => {
	const { classes, data } = props;
	const reports = get(data, 'data', []);

	const [ prjNameSearch, setPrjNameSearch ] = useState('');
	const [ userNameSearch, setUserNameSearch ] = useState('');
	const [ fullNameSearch, setFullNameSearch ] = useState('');
	const [ groupNameSearch, setGroupNameSearch ] = useState('');
	const [ locationSearch, setLocationSearch ] = useState('');

	const filterData = (data, field, strSearch) => {
		const strSearchLowercase = strSearch.toLowerCase();
		return filter(data, (item) => {
			const fieldTextLowercase = item[field] || '';
			return fieldTextLowercase.indexOf(strSearchLowercase) + 1;
		});
	};

	let projectNameFilteredData = reports;
	if (prjNameSearch) {
		projectNameFilteredData = filterData(reports, 'project_name', prjNameSearch);
	}

	let userNameFilteredData = projectNameFilteredData;
	if (userNameSearch) {
		userNameFilteredData = filterData(projectNameFilteredData, 'username', userNameSearch);
	}

	let fullNameFilteredData = userNameFilteredData;
	if (fullNameSearch) {
		fullNameFilteredData = filterData(userNameFilteredData, 'fullname', fullNameSearch);
	}

	let groupNameFilteredData = fullNameFilteredData;
	if (groupNameSearch) {
		groupNameFilteredData = filterData(fullNameFilteredData, 'group_name', groupNameSearch);
	}

	let locationFilteredData = groupNameFilteredData;
	if (locationSearch) {
		locationFilteredData = filterData(groupNameFilteredData, 'location', locationSearch);
	}
	return (
		<div>
			<Paper style={{ overflow: 'auto' }}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell className={classes.rowSmall}>No.</TableCell>
							<TableCell align="center" className={classes.rowLarge}>
								Project Name
							</TableCell>
							<TableCell align="center" className={classes.rowSmall}>
								Username
							</TableCell>
							<TableCell align="center" className={classes.rowLarge}>
								Full Name
							</TableCell>
							<TableCell align="center" className={classes.rowLarge}>
								Group Name
							</TableCell>
							<TableCell align="center" className={classes.rowMedium}>
								Work Type
							</TableCell>
							<TableCell align="center" className={classes.rowSmall}>
								Location
							</TableCell>
							<TableCell align="center" className={classes.rowSmall}>
								Layout
							</TableCell>
							<TableCell align="center" className={classes.rowMedium}>
								Section
							</TableCell>
							<TableCell align="center" className={classes.rowMedium}>
								Step
							</TableCell>
							<TableCell align="center" className={classes.rowMedium}>
								Capture Date
							</TableCell>
							<TableCell align="center" className={classes.rowLarge}>
								Unit
							</TableCell>
							<TableCell align="center" className={classes.rowSmall}>
								Total Amount
							</TableCell>
							<TableCell align="center" className={classes.rowSmall}>
								Total Time (m)
							</TableCell>
							<TableCell align="center" className={classes.rowSmall}>
								Total Speed (m)
							</TableCell>
							<TableCell align="right" className={classes.rowSmall}>
								Target Speed
							</TableCell>
						</TableRow>
					</TableHead>
				</Table>
			</Paper>
			<Paper style={{ overflow: 'auto', height: '500px' }}>
				<Table style={{ tableLayout: 'fixed' }}>
					<TableBody>
						{locationFilteredData.map((item, index) => {
							return (
								<TableRow>
									<TableCell className={classes.rowSmall}>{index + 1}</TableCell>
									<TableCell align="center" className={classes.rowLarge}>
										{item.project_name}
									</TableCell>
									<TableCell align="center" className={classes.rowSmall}>
										{item.username}
									</TableCell>
									<TableCell align="center" className={classes.rowLarge}>
										{item.fullname}
									</TableCell>
									<TableCell align="center" className={classes.rowLarge}>
										{item.group_name}
									</TableCell>
									<TableCell className={classes.rowMedium}>{item.work_type}</TableCell>
									<TableCell align="center" className={classes.rowSmall}>
										{item.location}
									</TableCell>
									<TableCell align="center" className={classes.rowSmall}>
										{item.layout}
									</TableCell>
									<TableCell align="center" className={classes.rowMedium}>
										{item.section}
									</TableCell>
									<TableCell align="center" className={classes.rowMedium}>
										{item.step}
									</TableCell>
									<TableCell className={classes.rowMedium}>{item.capture_date}</TableCell>
									<TableCell align="center" className={classes.rowLarge}>
										{item.unit}
									</TableCell>
									<TableCell className={classes.rowSmall}>{item.total_amount}</TableCell>
									<TableCell className={classes.rowSmall}>{item.total_time}</TableCell>
									<TableCell className={classes.rowSmall}>{item.total_speed}</TableCell>
									<TableCell className={classes.rowSmall}>{item.target_speed}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</Paper>
			<Paper style={{ background: 'lightgray' }}>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell>Sum</TableCell>
							<div style={{ width: '20%', float: 'right' }}>
								<TableCell className={classes.rowSum} align="right">
									475
								</TableCell>
								<TableCell className={classes.rowSum} align="right">
									0.852
								</TableCell>
								<TableCell className={classes.rowSum} align="right">
									0.741
								</TableCell>
								<TableCell className={classes.rowSum} align="right">
									0
								</TableCell>
							</div>
						</TableRow>
					</TableBody>
				</Table>
			</Paper>
			<FilterComponent
				reports={reports}
				setPrjNameSearch={setPrjNameSearch}
				setUserNameSearch={setUserNameSearch}
				setFullNameSearch={setFullNameSearch}
				setGroupNameSearch={setGroupNameSearch}
				setLocationSearch={setLocationSearch}
			/>
		</div>
	);
};
export default withStyles(styles, { withTheme: true })(ReportComponent);
