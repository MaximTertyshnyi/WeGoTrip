import { appRoutes } from "./app/routing";
import { NotFoundErrorScreen } from "./screens/NotFoundErrorScreen";
import { useRoutes } from "react-router-dom";

const AppRoot = () => {
  const routeElement = useRoutes(appRoutes);

  return routeElement || <NotFoundErrorScreen />;
};

export { AppRoot };
