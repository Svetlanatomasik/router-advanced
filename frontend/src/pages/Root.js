import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet /> {/* this defines where the content of the child routes should be rendered. */}
      </main>
    </>
  );
};

export default RootLayout;
