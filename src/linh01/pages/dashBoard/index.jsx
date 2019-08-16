import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { CssBaseline, Button } from '@material-ui/core';
import { DashboardStyle } from './assets';
import { Translate } from 'react-redux-i18n';
import { PageDecorator, getDataObject, redirectApp } from '@dgtx/coreui';
import reducer from './redux/reducers';
import * as types from './redux/actions';
import { onTest } from './redux/actionCreators';
import compose from 'recompose/compose';
import DashBoard from './components/DashBoard';
export interface LayoutDefautProps {
	classes: any,
	theme?: any,
	groups?: any,
	selectItemGroupTree?: (...args: any[]) => void | any
}
class Dashboard extends React.Component<LayoutDefautProps, any> {
	handleConnectReportPerformance = () => {
		redirectApp('/report_performance');
	};

	handleConnectCaptureMonitoring = () => {
		redirectApp('/capture_monitoring');
	};

	render() {
		const { classes, test, onTest } = this.props;
		const keyTranslate = types.KEY_TRANSLATE;
		return (
			<div className={classes.root}>
				{/* <CssBaseline />
				<Button onClick={onTest}>TEST DASHBOARD</Button>
				<div style={test ? { color: 'red' } : { color: 'blue' }}>
					<Translate value={`${keyTranslate}.test_connect_store`} />
				</div>
				<Button onClick={this.handleConnectReportPerformance}>REPORT PERFORMANCE</Button>
				<Button onClick={this.handleConnectCaptureMonitoring}>CAPTURE MONITORING</Button> */}
        <DashBoard />
			</div>
		);
	}
}
export default compose(
	PageDecorator({
		resources: [ reducer ],
		actions: {
			onTest
		},
		mapState: (state) => ({
			test: getDataObject(`resources.${types.NAME_REDUCER}.data.test`, state.core) || false
		})
	}),
	withStyles(DashboardStyle, { withTheme: true })
)(Dashboard);
