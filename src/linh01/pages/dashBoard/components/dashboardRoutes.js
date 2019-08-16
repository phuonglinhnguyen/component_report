import React from 'react';

const CaptureMonitoring = React.lazy(() => import('../../CaptureMonitoring'));
const ReportPrtformance = React.lazy(() => import('../../ReportPrtformance'));

const dashboardRoutes = [
  { path: '/capture_monitoring', exact: true, name: 'Capture Monitoring', component: CaptureMonitoring },
  { path: '/report_performance', exact: true, name: 'Report Performance', component: ReportPrtformance },

];

export default dashboardRoutes;
