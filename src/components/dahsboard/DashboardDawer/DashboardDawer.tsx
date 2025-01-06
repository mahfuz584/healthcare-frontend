"use client";
import BrandLogo from "@/components/shared/BrandLogo";
import { Menu, MenuItem, Skeleton, Stack } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { CSSObject, styled, Theme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";
import { FaAngleDown } from "react-icons/fa";
import { RiMenuFold2Fill, RiMenuFoldFill } from "react-icons/ri";
import { useGetInfoApiQuery } from "redux/api/genericEndPoints";
import { removeUser } from "services/auth.service";
import { toast } from "sonner";
import SidebarOptions from "./SidebarOptions";
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function DashboardDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openDropdown = Boolean(anchorEl);
  const { data: { data: userInfo = {} } = {}, isLoading } = useGetInfoApiQuery({
    url: "/user/me",
  });

  const handleLogout = () => {
    removeUser();
    router.push("/login");
    toast.success("Logout Successfully");
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
            ]}
          >
            {open ? <RiMenuFoldFill /> : <RiMenuFold2Fill />}
          </IconButton>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            spacing={2}
            alignItems="center"
            sx={{
              width: "100%",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                }}
                noWrap
                component="div"
              >
                {isLoading ? "Loading..." : `Hi, ${userInfo.name}`}
              </Typography>
              <Typography>Welcome to the MediFax Dashboard</Typography>
            </Box>
            <Box
              sx={{
                "& img": {
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                  borderRadius: "50%",
                },
              }}
            >
              {isLoading ? (
                <>
                  <Skeleton
                    variant="rectangular"
                    width={"40px"}
                    height={"40px"}
                    sx={{
                      borderRadius: "50%",
                    }}
                  />
                </>
              ) : (
                <Box>
                  <IconButton
                    id="basic-button"
                    aria-controls={openDropdown ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openDropdown ? "true" : undefined}
                    onClick={handleClick}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Image
                      src={userInfo?.profilePhoto}
                      alt="Remy Sharp"
                      width={1000}
                      height={1000}
                    />
                    <FaAngleDown size={15} color="#fff" />
                  </IconButton>
                </Box>
              )}
            </Box>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openDropdown}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{
                "& .MuiPaper-root": {
                  left: "1282px !important",
                  width: "120px",
                },
                "& .MuiMenuItem-root": {
                  justifyContent: "center",
                },
              }}
            >
              <Box>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleLogout();
                  }}
                >
                  LogOut
                </MenuItem>
              </Box>
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            display: "flex",
            alignItems: "center",
            mr: 3,
            height: open ? "100px" : "130px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: open ? "0%" : "6%",
              left: "0%",
              bottom: "0%",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <BrandLogo color="#000" text={open ? true : false} />
          </Box>
        </DrawerHeader>
        <Divider />
        <SidebarOptions />
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: open ? `calc(100% - ${drawerWidth}px)` : `calc(100% - 72px)`,
          transition: "width 0.3s",
          overflowX: "hidden",
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
