import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import wegotripLogo from "../assets/wegotripLogo.svg";
import styled from "styled-components";

const pages = [
  "Отчеты",
  "Туры",
  "Отзывы",
  "Справочный центр",
  "Профиль и реквизиты",
];

const Logo = styled.img`
  width: 85px;
  height: 41px;
`;

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#fafafa",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }} disableGutters>
        <Box sx={{ p: 0, paddingLeft: 4 }}>
          <Logo src={wegotripLogo} />
        </Box>
        <Box
          sx={{ right: 0, flexGrow: 0, display: { xs: "flex", md: "none" } }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="info"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;

// import wegotripLogo from "../assets/wegotripLogo.svg";
// import { COLORS } from "../const/colors";

// const Header = styled.div`
//   height: 100px;
//   background: ${COLORS.MAIN};
//   align-items: center;
//   display: flex;

//   @media (max-width: 380px) {
//     height: 60px;
//   }
// `;

// const Logo = styled.img`
//   width: 85px;
//   height: 41px;

//   @media (max-width: 380px) {
//     width: 40px;
//   }
// `;

// const ContainerHeader = styled.div`
//   display: flex;
//   width: 100%;
//   margin: 0 32px 0 32px;
//   flex-direction: row;
//   align-items: center;
//   text-align: center;
//   justify-content: space-between;

//   @media (max-width: 380px) {
//     margin: 0 20px 0 20px;
//   }
// `;

// export const ScreenHeader = () => {
//   return (
//     <Header>
//       <ContainerHeader>
//         <Logo src={wegotripLogo} />
//       </ContainerHeader>
//     </Header>
//   );
// };
