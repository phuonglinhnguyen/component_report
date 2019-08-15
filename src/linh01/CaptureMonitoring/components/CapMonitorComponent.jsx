import React, { useState } from 'react';
import { get } from 'lodash';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
const styles: any = (theme: any) => {
	return {
		rowSmall: {
			width: '5%',
			padding: '10px'
		},
		rowLarge: {
			width: '18%',
			padding: '10px'
		},
		rowMedium: {
			width: '10%',
			padding: '10px'
		},
		ass: {
			width: '40px'
		}
	};
};
const theme = createMuiTheme({
	overrides: {
		MuiTableCell: {
			root: {
				padding: '10px'
			}
		}
	}
});
const CapMonitorComponent = (props) => {
	const { classes, data } = props;
	const captureMonitors = get(data, 'data', []);

	const [ page, setPage ] = useState(0);
	const [ rowsPerPage, setRowsPerPage ] = useState(25);
	//==Rows Per Page
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(event.target.value);
	};

	return (
		<div className={classes.report}>
			<MuiThemeProvider theme={theme}>
				<Paper style={{ overflow: 'auto' }}>
					<Table>
						<TableHead style={{ background: 'lightgray' }}>
							<TableRow>
								<TableCell style={{ width: '20px' }}>No.</TableCell>
								<TableCell align="center" className={classes.rowSmall}>
									Imported Date
								</TableCell>
								<TableCell align="center" className={classes.rowLarge}>
									File Path
								</TableCell>
								<TableCell align="center" className={classes.rowMedium}>
									Batch Name
								</TableCell>
								<TableCell align="right" className={classes.rowSmall}>
									Imported Amount
								</TableCell>
								<TableCell align="right" className={classes.rowSmall}>
									Classify
								</TableCell>
								<TableCell align="right" className={classes.rowSmall}>
									OMR
								</TableCell>
								<TableCell align="right" className={classes.rowSmall}>
									Invoice Header
								</TableCell>
								<TableCell align="right" className={classes.rowSmall}>
									Invoice Item
								</TableCell>
								<TableCell align="right" className={classes.rowSmall}>
									Verify Hold/Bad
								</TableCell>
								<TableCell align="right" className={classes.rowSmall}>
									Finished Capture
								</TableCell>
								<TableCell align="right" className={classes.rowSmall}>
									Available for QC
								</TableCell>
								<TableCell align="right" className={classes.rowSmall}>
									Finished QC
								</TableCell>
								<TableCell align="right" className={classes.rowSmall}>
									Available for QC Approval
								</TableCell>
								<TableCell align="right" className={classes.rowSmall}>
									Finished QC Approval
								</TableCell>
								<TableCell align="right" className={classes.rowSmall}>
									Available For Export
								</TableCell>
								<TableCell align="right" className={classes.rowSmall}>
									Finished Export
								</TableCell>
								<TableCell align="right" className={classes.rowSmall}>
									Exported Date
								</TableCell>
							</TableRow>
						</TableHead>
					</Table>
				</Paper>
				<Paper style={{ overflow: 'auto', height: '675px' }}>
					<Table style={{ tableLayout: 'fixed' }}>
						<TableBody>
							{captureMonitors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => {
								return (
									<TableRow>
										<TableCell style={{ width: '20px' }}>{index + 1}</TableCell>
										<TableCell align="right" className={classes.ass}>
											{item.import_date}
										</TableCell>
										<TableCell align="center" style={{ width: '140px' }}>
											{item.file_path}
										</TableCell>
										<TableCell
											align="center"
											style={{
												width: '60px',
												padding: '10px'
											}}
										>
											{item.batch_name}
										</TableCell>
										<TableCell align="right" className={classes.ass}>
											{item.imported_amount}
										</TableCell>
										<TableCell align="right" className={classes.ass}>
											{item.classify}
										</TableCell>
										<TableCell align="right" className={classes.ass}>
											{item.omr}
										</TableCell>
										<TableCell align="right" className={classes.ass}>
											{item.invoice_header}
										</TableCell>
										<TableCell align="right" className={classes.ass}>
											{item.invoice_item}
										</TableCell>
										<TableCell align="right" className={classes.ass}>
											{item.verify}
										</TableCell>
										<TableCell align="right" className={classes.ass}>
											{item.finished_capture}
										</TableCell>
										<TableCell align="right" className={classes.ass}>
											{item.available_QC}
										</TableCell>
										<TableCell align="right" className={classes.ass}>
											{item.finished_QC}
										</TableCell>
										<TableCell align="right" className={classes.ass}>
											{item.available_QC_Approval}
										</TableCell>
										<TableCell align="right" className={classes.ass}>
											{item.finished_QC_Approval}
										</TableCell>
										<TableCell align="right" className={classes.ass}>
											{item.available_export}
										</TableCell>
										<TableCell className={classes.ass} align="right">
											{item.finished_export}
										</TableCell>
										<TableCell className={classes.ass} align="right">
											{item.export_date}
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Paper>
				<TablePagination
					style={{ background: '#fff', position: 'fixed', bottom: '20px', width: '100%' }}
					rowsPerPageOptions={[ 5, 10, 25 ]}
					component="div"
					count={captureMonitors.length}
					rowsPerPage={rowsPerPage}
					page={page}
					backIconButtonProps={{
						'aria-label': 'Previous Page'
					}}
					nextIconButtonProps={{
						'aria-label': 'Next Page'
					}}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</MuiThemeProvider>
		</div>
	);
};
export default withStyles(styles, { withTheme: true })(CapMonitorComponent);
