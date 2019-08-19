import ReportPrtformance from '../../ReportPrtformance';
import CaptureMonitoring from '../../CaptureMonitoring';
import TestViewBPMN from '../../testViewBPMN';

const dashboardRoutes = [
	{ path: '/dashboard/capture_monitoring', exact: true, name: 'Capture Monitoring', component: CaptureMonitoring },
	{ path: '/dashboard/report_performance', exact: true, name: 'Report Performance', component: ReportPrtformance },
	{ path: '/dashboard/test_bpmn_viewer', exact: true, name: 'Test Bpmn Viewer', component: TestViewBPMN }
];

export default dashboardRoutes;
