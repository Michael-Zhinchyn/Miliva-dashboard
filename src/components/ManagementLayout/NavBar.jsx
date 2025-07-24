import { NavLink } from "react-router-dom";
import { NavBarContainer, NavLinkStyled } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink to="/management" end>
        {({ isActive }) => (
          <NavLinkStyled className={isActive ? "active" : ""}>
            Main
          </NavLinkStyled>
        )}
      </NavLink>

      <NavLink to="/management/drivers">
        {({ isActive }) => (
          <NavLinkStyled className={isActive ? "active" : ""}>
            Drivers
          </NavLinkStyled>
        )}
      </NavLink>

      <NavLink to="/management/trucks">
        {({ isActive }) => (
          <NavLinkStyled className={isActive ? "active" : ""}>
            Trucks
          </NavLinkStyled>
        )}
      </NavLink>

      <NavLink to="/management/trailers">
        {({ isActive }) => (
          <NavLinkStyled className={isActive ? "active" : ""}>
            Trailers
          </NavLinkStyled>
        )}
      </NavLink>

      <NavLink to="/management/staff">
        {({ isActive }) => (
          <NavLinkStyled className={isActive ? "active" : ""}>
            Staff
          </NavLinkStyled>
        )}
      </NavLink>
    </NavBarContainer>
  );
};
