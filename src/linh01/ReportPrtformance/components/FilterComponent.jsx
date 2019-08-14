import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import moment from 'moment';
const styles: any = (theme: any) => {
	return {
		control: {
			background: 'grey',
			display: 'flex',
			justifyContent: 'space-between'
		},
		bodyFilter: {
			margin: '20px',
			display: 'flex'
		},
		titleFilter: {
			fontSize: '18px',
			fontWeight: 'bold',
			padding: '20px'
		},
		btnExport: {
			float: 'right',
			background: '#3c4858',
			margin: '10px',
			color: '#fff',
			fontWeight: 'bold',
			'&:hover': {
				background: '#ffa000'
			}
		},
		textField: {
			marginRight: '20px',
			marginBottom: '20px'
		},
		textSelect: {
			width: '200px',
			marginRight: '20px'
		}
	};
};

const FilterComponent = (props) => {
	const {
		classes,
		dateToDateFilteredData,
		setPrjNameSearch,
		setUserNameSearch,
		setFullNameSearch,
		setGroupNameSearch,
		setLocationSearch,
		setLayoutSearch,
		setWorkTypeSearch,
		setSectionSearch,
		setStepSearch,
		setFromdDateSearch,
		setToDateSearch
	} = props;

	const {
		prjNameSearch,
		userNameSearch,
		fullNameSearch,
		groupNameSearch,
		locationSearch,
		layoutSearch,
		workTypeSearch,
		sectionSearch,
		stepSearch,
		fromDateSearch,
		toDateSearch
	} = props;

	const locations = [ { label: 'HCM', value: 'hcm' }, { label: 'CTB', value: 'ctb' } ];

	const workTypes = [
		{ label: 'In WorkShift', value: 'in workshift' },
		{ label: 'Out WorkShift', value: 'out workshift' },
		{ label: 'Overtime', value: 'overtime' }
	];

	const onSearchPrj = (e) => {
		const value = e.target.value;
		setPrjNameSearch(value);
	};

	const onSearchUser = (e) => {
		const value = e.target.value;
		setUserNameSearch(value);
	};

	const onSearchFullname = (e) => {
		const value = e.target.value;
		setFullNameSearch(value);
	};

	const onSearchLayout = (e) => {
		const value = e.target.value;
		setLayoutSearch(value);
	};

	const onSearchGroupname = (e) => {
		const value = e.target.value;
		setGroupNameSearch(value);
	};

	const onSearchType = (e) => {
		const value = e.target.value;
		setWorkTypeSearch(value);
	};

	const onSearchLocation = (e) => {
		const value = e.target.value;
		setLocationSearch(value);
	};

	const onSearchSection = (e) => {
		const value = e.target.value;
		setSectionSearch(value);
	};

	const onSearchStep = (e) => {
		const value = e.target.value;
		setStepSearch(value);
	};

	const onSearchFromDate = (e) => {
		const value = e.target.value;
		setFromdDateSearch(value);
	};

	const onSearchToDate = (e) => {
		const value = e.target.value;
		setToDateSearch(value);
	};
	const id = new Date();
	//export
	const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
	const fileExtension = '.xlsx';
	const fileName = 'test' + id;

	const exportToCSV = (dateToDateFilteredData, fileName) => {
		const ws = XLSX.utils.json_to_sheet(dateToDateFilteredData);
		const wb = { Sheets: { data: ws }, SheetNames: [ 'data' ] };
		const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
		const data = new Blob([ excelBuffer ], { type: fileType });
		FileSaver.saveAs(data, fileName + fileExtension);
	};

	return (
		<div>
			<div className={classes.control}>
				<span className={classes.titleFilter}>Filter</span>
				<Button className={classes.btnExport} onClick={(e) => exportToCSV(dateToDateFilteredData, fileName)}>
					Export
				</Button>
			</div>
			<div className={classes.bodyFilter}>
				<div>
					<TextField
						name="project_name"
						label="Project Name"
						margin="dense"
						className={classes.textField}
						variant="outlined"
						value={prjNameSearch}
						onChange={onSearchPrj}
					/>
					<TextField
						name="username"
						label="Username"
						margin="dense"
						className={classes.textField}
						variant="outlined"
						value={userNameSearch}
						onChange={onSearchUser}
					/>
					<TextField
						name="fullname"
						label="Full Name"
						margin="dense"
						className={classes.textField}
						variant="outlined"
						value={fullNameSearch}
						onChange={onSearchFullname}
					/>
					<TextField
						name="group_name"
						label="Group Name"
						margin="dense"
						className={classes.textField}
						variant="outlined"
						value={groupNameSearch}
						onChange={onSearchGroupname}
					/>
					<TextField
						select
						name="work_type"
						className={classes.textSelect}
						variant="outlined"
						label="Work Type"
						margin="dense"
						onChange={onSearchType}
						value={workTypeSearch}
					>
						{workTypes.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
					<TextField
						select
						name="location"
						className={classes.textSelect}
						variant="outlined"
						label="Location"
						margin="dense"
						onChange={onSearchLocation}
						value={locationSearch}
					>
						{locations.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
					<TextField
						name="layout"
						label="Layout"
						margin="dense"
						className={classes.textField}
						variant="outlined"
						value={layoutSearch}
						onChange={onSearchLayout}
					/>
					<TextField
						name="section"
						label="Section"
						margin="dense"
						className={classes.textField}
						variant="outlined"
						value={sectionSearch}
						onChange={onSearchSection}
					/>
					<TextField
						name="step"
						label="Step"
						margin="dense"
						className={classes.textField}
						variant="outlined"
						value={stepSearch}
						onChange={onSearchStep}
					/>
					<TextField
						label="From"
						name="fromDate"
						type="date"
						className={classes.textField}
						onChange={onSearchFromDate}
						value={fromDateSearch}
						InputLabelProps={{
							shrink: true
						}}
					/>
					<TextField
						label="To"
						type="date"
						name="toDate"
						className={classes.textField}
						onChange={onSearchToDate}
						value={toDateSearch}
						InputLabelProps={{
							shrink: true
						}}
					/>
				</div>
			</div>
		</div>
	);
};
export default withStyles(styles, { withTheme: true })(FilterComponent);
