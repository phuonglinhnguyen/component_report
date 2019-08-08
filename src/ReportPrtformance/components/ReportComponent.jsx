import React from 'react';
import { get } from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
const styles: any = (theme: any) => {
	return {
    rowSmall:{
      width:'50px',
      padding: '10px'
    },
    rowLarge:{
      width:'200px',
      padding: '10px'
    },
    rowMedium:{
      width:'100px',
      padding: '10px'
    }
	};
};
const ReportComponent = (props) => {
	const { classes, data } = props;
	const reports = get(data, 'data', []);

	return (
		<div>
			<Paper style={{ overflow: 'auto' }}>
				<Table>
					<TableHead>
						<TableRow >
							<TableCell className={classes.rowSmall}>No.</TableCell>
							<TableCell align='center' className={classes.rowLarge}>Project Name</TableCell>
							<TableCell align='center' className={classes.rowSmall}>Username</TableCell>
							<TableCell align='center' className={classes.rowLarge}>Full Name</TableCell>
							<TableCell align='center' className={classes.rowLarge}>Group Name</TableCell>
							<TableCell align='center' className={classes.rowMedium}>Work Type</TableCell>
							<TableCell align='center' className={classes.rowSmall}>Location</TableCell>
							<TableCell align='center' className={classes.rowSmall}>Layout</TableCell>
							<TableCell align='center' className={classes.rowMedium}>Section</TableCell>
							<TableCell align='center' className={classes.rowMedium}>Step</TableCell>
							<TableCell align='center' className={classes.rowMedium}>Capture Date</TableCell>
              <TableCell align='center' className={classes.rowLarge}>Unit</TableCell>
							<TableCell align='center' className={classes.rowSmall}>Total Amount</TableCell>
							<TableCell align='center' className={classes.rowSmall}>Total Time (m)</TableCell>
							<TableCell align='center' className={classes.rowSmall}>Total Speed (m)</TableCell>
							<TableCell align='right' className={classes.rowSmall}>Target Speed</TableCell>
						</TableRow>
					</TableHead>
				</Table>
			</Paper>
			<Paper style={{ overflow: 'auto', height: '730px' }}>
				<Table style={{ tableLayout: 'fixed' }}>
					<TableBody>
						{reports.map((item, index) => {
							return (
								<TableRow>
									<TableCell className={classes.rowSmall}>{index + 1}</TableCell>
									<TableCell align='center' className={classes.rowLarge}>{item.project_name}</TableCell>
									<TableCell align='center' className={classes.rowSmall}>{item.username}</TableCell>
									<TableCell align='center' className={classes.rowLarge}>{item.fullname}</TableCell>
									<TableCell align='center' className={classes.rowLarge}>{item.group_name}</TableCell>
									<TableCell className={classes.rowMedium}>{item.work_type}</TableCell>
									<TableCell align='center' className={classes.rowSmall}>{item.location}</TableCell>
									<TableCell align='center' className={classes.rowSmall}>{item.layout}</TableCell>
									<TableCell align='center' className={classes.rowMedium}>{item.section}</TableCell>
									<TableCell align='center' className={classes.rowMedium}>{item.step}</TableCell>
									<TableCell className={classes.rowMedium}>{item.capture_date}</TableCell>
                  <TableCell align='center' className={classes.rowLarge}>{item.unit}</TableCell>
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
		</div>
	);
};
export default withStyles(styles, { withTheme: true })(ReportComponent);
