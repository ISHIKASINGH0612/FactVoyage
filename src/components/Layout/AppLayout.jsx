import { Outlet } from "react-router-dom";
import { Footers } from "../UI/Footer";
import { Headers } from "../UI/Headers";

export const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footers />
    </>
  );
};

// import { Outlet } from "react-router-dom";

// export const AppLayout = () => {
//   return (
//     <>
//       <Outlet />
//     </>
//   );
// };


