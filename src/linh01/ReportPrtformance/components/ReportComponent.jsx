import React, { useState } from 'react';
import { get, filter, map } from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FilterComponent from './FilterComponent';
import moment from 'moment';
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
	const [ workTypeSearch, setWorkTypeSearch ] = useState('');
	const [ layoutSearch, setLayoutSearch ] = useState('');
	const [ locationSearch, setLocationSearch ] = useState('');
	const [ sectionSearch, setSectionSearch ] = useState('');
	const [ stepSearch, setStepSearch ] = useState('');
	const [ fromDateSearch, setFromdDateSearch ] = useState('');
	const [ toDateSearch, setToDateSearch ] = useState('');

	//filter
	const filterData = (data, field, strSearch) => {
		const strSearchLowercase = strSearch ? String(strSearch).toLowerCase() : '';
		return filter(data, (item) => {
			const fieldTextLowercase = item[field] ? String(item[field]).toLowerCase() : '';
			if (!fieldTextLowercase) return false;
			return fieldTextLowercase.indexOf(strSearchLowercase) + 1;
		});
	};

	const filterDatetime = (exportsArray, beginDatetime, endDatetime) => {
		const beginTime = beginDatetime ? moment(beginDatetime).valueOf() : null;
		const endTime = endDatetime ? moment(endDatetime).valueOf() : null;
		return exportsArray.filter((exportConfig) => {
			const captureTime = moment(exportConfig.capture_date).valueOf();
			if (beginTime && endTime) {
				return beginTime <= captureTime && captureTime <= endTime;
			} else if (beginTime) {
				return captureTime >= beginTime;
			} else if (endTime) {
				return captureTime <= endTime;
			} else {
				return true;
			}
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

	let workTypeFilteredData = groupNameFilteredData;
	if (workTypeSearch) {
		workTypeFilteredData = filterData(groupNameFilteredData, 'work_type', workTypeSearch);
	}

	let layoutFilteredData = workTypeFilteredData;
	if (layoutSearch) {
		layoutFilteredData = filterData(workTypeFilteredData, 'layout', layoutSearch);
	}

	let locationFilteredData = layoutFilteredData;
	if (locationSearch) {
		locationFilteredData = filterData(layoutFilteredData, 'location', locationSearch);
	}
	let sectionFilteredData = locationFilteredData;
	if (sectionSearch) {
		sectionFilteredData = filterData(locationFilteredData, 'section', sectionSearch);
	}
	let stepFilteredData = sectionFilteredData;
	if (stepSearch) {
		stepFilteredData = filterData(sectionFilteredData, 'step', stepSearch);
	}

	let dateFilteredData = stepFilteredData;
	dateFilteredData = filterDatetime(stepFilteredData, fromDateSearch, '');

	let dateToDateFilteredData = dateFilteredData;
	dateToDateFilteredData = filterDatetime(dateFilteredData, fromDateSearch, toDateSearch);

	//sum
	const amount = map(stepFilteredData, 'total_amount', []);
	const time = map(stepFilteredData, 'total_time', []);
	const speed = map(stepFilteredData, 'total_speed', []);
	const target_speed = map(stepFilteredData, 'target_speed', []);

	let sum_amount = 0;
	let sum_time = 0;
	let sum_speed = 0;
	let sum_target_speed = 0;

	for (let i = 0; i < amount.length; i++) {
		sum_amount += amount[i];
	}

	for (let i = 0; i < time.length; i++) {
		sum_time += time[i];
	}

	for (let i = 0; i < speed.length; i++) {
		sum_speed += speed[i];
	}

	for (let i = 0; i < target_speed.length; i++) {
		sum_target_speed += target_speed[i];
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
							<TableCell align="center" className={classes.rowMedium}>
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
						{dateToDateFilteredData.map((item, index) => {
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
									<TableCell align="center" className={classes.rowMedium}>
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
			<div style={{ background: 'lightgray' }}>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell>Sum</TableCell>
							<div style={{ width: '20%', float: 'right' }}>
								<TableCell className={classes.rowSum} align="right">
									{sum_amount ? sum_amount : 0}
								</TableCell>
								<TableCell className={classes.rowSum} align="right">
									{sum_time ? sum_time.toFixed(3) : 0}
								</TableCell>
								<TableCell className={classes.rowSum} align="right">
									{sum_speed ? sum_speed.toFixed(3) : 0}
								</TableCell>
								<TableCell className={classes.rowSum} align="right">
									{sum_target_speed ? sum_target_speed.toFixed(2) : 0}
								</TableCell>
							</div>
						</TableRow>
					</TableBody>
				</Table>
			</div>
			<FilterComponent
				dateToDateFilteredData={dateToDateFilteredData}
				reports={reports}
				setPrjNameSearch={setPrjNameSearch}
				prjNameSearch={prjNameSearch}
				setUserNameSearch={setUserNameSearch}
				userNameSearch={userNameSearch}
				setFullNameSearch={setFullNameSearch}
				fullNameSearch={fullNameSearch}
				setGroupNameSearch={setGroupNameSearch}
				groupNameSearch={groupNameSearch}
				workTypeSearch={workTypeSearch}
				setWorkTypeSearch={setWorkTypeSearch}
				layoutSearch={layoutSearch}
				setLayoutSearch={setLayoutSearch}
				setLocationSearch={setLocationSearch}
				locationSearch={locationSearch}
				sectionSearch={sectionSearch}
				setSectionSearch={setSectionSearch}
				stepSearch={stepSearch}
				setStepSearch={setStepSearch}
				fromDateSearch={fromDateSearch}
				setFromdDateSearch={setFromdDateSearch}
				toDateSearch={toDateSearch}
				setToDateSearch={setToDateSearch}
			/>
		</div>
	);
};
export default withStyles(styles, { withTheme: true })(ReportComponent);
