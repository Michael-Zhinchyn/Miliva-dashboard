import { Header } from "../../components/Management-Layout/Header";
import { NavBar } from "../../components/Management-Layout/NavBar";
import { Main } from "../../components/Management-Layout/Main";

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
