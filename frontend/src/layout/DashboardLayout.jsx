import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { HiHome } from "react-icons/hi";

import { Button } from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen relative flex flex-col gap-5">
      {/* Dashbord Layout top navbar Started */}
      <div className="w-full fixed top-0 h-20 px-10 py-6 bg-slate-50 border-b border-border z-50 backdrop-blur-md flex items-center justify-between">
        <Link className="object-contain" to="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="object-cover w-full h-auto"
          />
        </Link>
        <div className="flex items-center gap-6">
          <a href="#" className="text-lg font-medium text-[#576474]">
            Contact
          </a>
          <div className="w-auto">
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<FaCaretDown />}
                variant="outline"
                className="w-[180px]"
              >
                <div className="flex items-center gap-4">
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                    size="sm"
                    className="w-6"
                  />
                  <span className="text-sm font-medium"> Your Name</span>
                </div>
              </MenuButton>
              <MenuList>
                <MenuItem _hover={{ bg: "gray.400" }}>Account</MenuItem>
                <MenuItem _hover={{ bg: "gray.400" }}>Dashboard</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
      {/* Dashbord Layout top navbar Ended */}
      <div className="w-full flex">
        {/* Dashboard Layout Ledt Constant Sidebar */}
        <div className="w-[110px]  min-h-[90vh] fixed top-20 border-r border-border bg-slate-50 flex flex-col items-center justify-start py-10">
          <HiHome className="size-8 shrink-0 text-iconBg" />
        </div>

        {/* Dashboard Page components as Children */}
        <div className="w-[70%] bg-white min-h-[90vh] mt-20 ml-[120px] px-2 py-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
