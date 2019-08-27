import ReportPrtformance from '../../ReportPrtformance';
import CaptureMonitoring from '../../CaptureMonitoring';
import TestViewBPMN from '../../testViewBPMN';
import { getProjects } from '../../../../providers/data/mockData/projects';
const projects = getProjects();

const dashboardRoutes = [
	{ path: '/dashboard/test', exact: true, component: CaptureMonitoring },
	// { path: '/dashboard/report_performance', exact: true,  component: ReportPrtformance },
];

export default dashboardRoutes;
