import { Page404, DashboardPage, ReportPrtformancePage } from "../../views";
export default [
  {
    name: "report-performance",
    exact: true,
    path: "/report_performance",
    component: ReportPrtformancePage
  },
  {
    name: "home",
    exact: true,
    path: "/",
    component: DashboardPage
  },
  {
    name: "home",
    exact: true,
    path: "/home",
    component: DashboardPage
  },
  {
    name: "page404",
    component: Page404
  }
];