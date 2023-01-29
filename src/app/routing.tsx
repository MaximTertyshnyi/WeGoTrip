import { ProfileScreen } from "../screens/ProfileScreen";
import { ReportsScreen } from "../screens/ReportsScreen";

export const appRoutes = [
  {
    path: "/profilescreen",
    element: <ProfileScreen />,
  },
  {
    path: "/reportsscreen",
    element: <ReportsScreen />,
  },
];
