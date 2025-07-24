import { Header } from "../../components/ManagementLayout/Header";
import { NavBar } from "../../components/ManagementLayout/NavBar";
import { Main } from "../../components/ManagementLayout/Main";

const ManagementLayout = () => {
  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* NAVBAR */}
      <NavBar />

      {/* CONTENT */}
      <Main />
    </div>
  );
};

export default ManagementLayout;
