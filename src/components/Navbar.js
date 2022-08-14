import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNav className="navbar">
      <a className="logo" href="/">
        Codify
      </a>
      <ul className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  &.navbar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 18px 0;
    background: lightgray;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 999;

    .nav-list {
      display: flex;
      align-items: center;
      list-style-type: none;

      li {
        padding: 0 16px;
      }
    }

    .logo {
      text-decoration: none;
      font-size: 24px;
      font-weight: bold;
    }
  }
`;

export default Navbar;
