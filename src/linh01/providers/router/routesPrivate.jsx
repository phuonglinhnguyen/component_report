import { Page404, DashboardPage, ReportPrtformancePage, CaptureMonitoringPage } from '../../views';
export default [
	{
		name: 'capture-monitoring',
		exact: true,
		path: '/capture_monitoring',
		component: CaptureMonitoringPage
	},
	{
		name: 'report-performance',
		exact: true,
		path: '/report_performance',
		component: ReportPrtformancePage
	},
	{
		name: 'home',
		exact: true,
		path: '/',
		component: DashboardPage
	},
	{
		name: 'home',
		exact: true,
		path: '/home',
		component: DashboardPage
	},
	{
		name: 'page404',
		component: Page404
	}
];
