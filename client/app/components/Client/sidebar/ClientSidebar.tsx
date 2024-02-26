import { Switch, Typography } from "@mui/material";
import React, { FC } from "react";
import { BsCalendar } from "react-icons/bs";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
  MenuItemStyles,
} from "react-pro-sidebar";
import { Badge } from "./Badges";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarHeader } from "./SidebarHeader";
import { FiBarChart } from "react-icons/fi";
import { CgShoppingCart } from "react-icons/cg";
import { FaDiamond } from "react-icons/fa6";
import { RiInkBottleFill } from "react-icons/ri";
import { SlGlobeAlt } from "react-icons/sl";
import { GrServices } from "react-icons/gr";
import { CiBookmark } from "react-icons/ci";
import { useTheme } from "next-themes";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { ProfileBadges } from "./ProfileBadges";
import { NotificationBox } from "./NotificationBox";
import { AddBox } from "./AddBox";

interface Props {
  component: any;
}
const SideNavbar: FC<Props> = ({ component }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [broken, setBroken] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "16px",
      fontWeight: 500,
    },

    icon: {
      color: "#0098e5",
      [`&.${menuClasses.disabled}`]: {
        color: "#9fb6cf",
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor: "transparent",
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: "#0098e5",
      },
      "&:hover": {
        color: "#9fb6cf",
      },
    },

    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
      color: theme === "light" ? "#000" : "#fff",
    }),
  };

  return (
    <div className="flex h-screen">
      {/* Fixed Header */}
      <header className="w-full text-white fixed top-0 left-0 z-80">
        {/* header  */}
        <div className=" dark:bg-opacity-50 bg-white dark:bg-gradient-to-b  dark:from-gray-900 dark:to-black w-full h-[70px] x-[80] border-0 dark:border-[#ffffff1c] shadow-md transition duration-500 px-5">
          <div className="w-full m-auto h-full ">
            <div className="w-full h-[70px] flex items-center justify-between p-3">
              <div className="flex items-center h-full">
                <GiHamburgerMenu
                  size={20}
                  onClick={
                    broken
                      ? () => setToggled(!toggled)
                      : () => setCollapsed(!collapsed)
                  }
                  className="text-black dark:text-white cursor-pointer !ms-0 !me-6"
                />
                <div>
                  <Link
                    href={"/"}
                    className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}
                  >
                    NMS
                  </Link>
                </div>
                <div className="ms-40 max-md:ms-0">

                <AddBox/>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex space-x-6">
                  <NotificationBox/>
                  <ProfileBadges/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Fixed Sidebar */}
      <div className=" fixed left-0 top-[4.5rem] bottom-0 z-10">
        <div className="flex flex-col  ">
          {/* sidebar  */}
          <Sidebar
            collapsed={collapsed}
            toggled={toggled}
            onBackdropClick={() => setToggled(false)}
            onBreakPoint={setBroken}
            breakPoint="md"
            backgroundColor={theme === "light" ? "white" : "transparent"}
            className="h-full !fixed border-r-2"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              {broken && (
                <SidebarHeader
                  broken={broken}
                  style={{ marginBottom: "24px", marginTop: "16px" }}
                />
              )}
              <div style={{ flex: 1, marginBottom: "32px" }}>
                <div style={{ padding: "0 24px", marginBottom: "8px" }}>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    style={{
                      opacity: collapsed ? 0 : 0.7,
                      letterSpacing: "0.5px",
                    }}
                    className="text-black dark:text-white !mt-4"
                  >
                    General
                  </Typography>
                </div>
                <Menu menuItemStyles={menuItemStyles}>
                  <SubMenu
                    label="Charts"
                    icon={<FiBarChart />}
                    suffix={
                      <Badge variant="danger" shape="circle">
                        6
                      </Badge>
                    }
                  >
                    <MenuItem> Pie charts</MenuItem>
                    <MenuItem> Line charts</MenuItem>
                    <MenuItem> Bar charts</MenuItem>
                  </SubMenu>
                  <SubMenu label="Maps" icon={<SlGlobeAlt />}>
                    <MenuItem> Google maps</MenuItem>
                    <MenuItem> Open street maps</MenuItem>
                  </SubMenu>
                  <SubMenu label="Theme" icon={<RiInkBottleFill />}>
                    <MenuItem> Dark</MenuItem>
                    <MenuItem> Light</MenuItem>
                  </SubMenu>
                  <SubMenu label="Components" icon={<FaDiamond />}>
                    <MenuItem> Grid</MenuItem>
                    <MenuItem> Layout</MenuItem>
                    <SubMenu label="Forms">
                      <MenuItem> Input</MenuItem>
                      <MenuItem> Select</MenuItem>
                      <SubMenu label="More">
                        <MenuItem> CheckBox</MenuItem>
                        <MenuItem> Radio</MenuItem>
                      </SubMenu>
                    </SubMenu>
                  </SubMenu>
                  <SubMenu label="E-commerce" icon={<CgShoppingCart />}>
                    <MenuItem> Product</MenuItem>
                    <MenuItem> Orders</MenuItem>
                    <MenuItem> Credit card</MenuItem>
                  </SubMenu>
                </Menu>

                <div
                  style={{
                    padding: "0 24px",
                    marginBottom: "8px",
                    marginTop: "32px",
                  }}
                >
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    style={{
                      opacity: collapsed ? 0 : 0.7,
                      letterSpacing: "0.5px",
                    }}
                    className="text-black dark:text-white"
                  >
                    Extra
                  </Typography>
                </div>

                <Menu menuItemStyles={menuItemStyles}>
                  <Link href={"/a"}>
                    <MenuItem
                      icon={<BsCalendar />}
                      suffix={<Badge variant="success">New</Badge>}
                    >
                      Calendar
                    </MenuItem>
                  </Link>
                  <MenuItem icon={<CiBookmark />}>Documentation</MenuItem>
                  <MenuItem disabled icon={<GrServices />}>
                    Examples
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </Sidebar>
        </div>
      </div>

      {/* Main content that can be scrolled */}
      <div
        className={`flex-1 overflow-y-auto p-4 ${
          collapsed ? "ml-[5.5rem]" : "ml-64"
        }  max-md:ml-0 pt-[5.5rem] text-black duration-300`}
      >
        <main className="">{component}</main>
      </div>
    </div>
  );
};

export default SideNavbar;
