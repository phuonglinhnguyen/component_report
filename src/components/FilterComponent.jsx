import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';

const styles: any = (theme: any) => {
	return {
		control: {
			background: 'lavender',
			padding: '20px'
		},
		bodyFilter: {
			margin: '20px',
			display: 'flex'
		},
		titleFilter: {
			fontSize: '15px',
			fontWeight: 'bold'
		},
		btnSearch: {
			float: 'right',
			background: 'pink',
			margin: '10px'
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
	const { classes, setPrjNameSearch, setUserNameSearch,setFullNameSearch ,setGroupNameSearch,setLocationSearch} = props;
	const {prjNameSearch, userNameSearch, fullNameSearch, groupNameSearch, locationSearch} = props;
	const [ location, setLocation ] = useState('');
	const [ workType, setWorkType ] = useState('');
	const locations = [ { label: 'HCM', value: 'hcm' }, { label: 'CTB', value: 'ctb' } ];
	const workTypes = [
		{ label: 'In WorkShift', value: 'in workshift' },
		{ label: 'Out WorkShift', value: 'out workshift' },
		{ label: 'Overtime', value: 'overtime' }
	];
	let searchTimeout = null;

	const onSearchPrj = (e) => {
		const value = e.target.value;
		setPrjNameSearch(value);
	};

	const onSearchUser = (e) => {
		const value = e.target.value;
			setUserNameSearch(value); 
	};

	const onSearchFullname= (e) => {
		const value = e.target.value;
			setFullNameSearch(value);
	};

	const onSearchGroupname= (e) => {
		const value = e.target.value;
			setGroupNameSearch(value);
	};

	// const onSearchType = (e) => {
	// 	const value = e.target.value;
	// 		setLocationSearch(value);
	// };

	const onSearchLocation = (e) => {
		const value = e.target.value;
			setLocationSearch(value);
	};

	return (
		<div>
			<div className={classes.control}>
				<span className={classes.titleFilter}>Filter</span>
				<Button className={classes.btnSearch}>Export</Button>
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
					<TextField name="layout" label="Layout" margin="dense" className={classes.textField} variant="outlined" />
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
						select
						name="work_type"
						className={classes.textSelect}
						variant="outlined"
						label="Work Type"
						margin="dense"
						// onChange={onSearchType}
						value={workType}
					>
						{workTypes.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
					<div>
						<TextField
							label="From"
							type="date"
							defaultValue="2017-05-24"
							className={classes.textField}
							// onChange={onSearch}
							InputLabelProps={{
								shrink: true
							}}
						/>
						<TextField
							label="To"
							type="date"
							defaultValue="2017-05-24"
							className={classes.textField}
							InputLabelProps={{
								shrink: true
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default withStyles(styles, { withTheme: true })(FilterComponent);
