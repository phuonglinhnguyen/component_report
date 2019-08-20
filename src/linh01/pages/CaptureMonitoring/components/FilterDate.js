import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styles: any = (theme: any) => {
	return {
		textSelect: {
			width: '200px',
			marginRight: '20px'
		}
	};
};

const FilterDate = (props) => {
	const {
		classes,
		setFromDateSearch,
		setToDateSearch,
		fromDateSearch,
		toDateSearch,
	} = props;


	const onSearchFromDate = (e) => {
		let value = e.target.value;
		setFromDateSearch(value);
	};

	const onSearchToDate = (e) => {
		const value = e.target.value;
		setToDateSearch(value);
	};

	return (
		<div>
		
			<TextField
				label="From"
				name="fromDate"
				type="date"
				margin="dense"
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
				margin="dense"
				onChange={onSearchToDate}
				value={toDateSearch}
				InputLabelProps={{
					shrink: true
				}}
			/>
		</div>
	);
};
export default withStyles(styles, { withTheme: true })(FilterDate);
