"use client";
import React, { FC, useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Protected from "../hooks/useProtected";
import { useSelector } from "react-redux";
import Profile from "../components/Profile/Profile";
import SideNavbar from "../components/Client/sidebar/ClientSidebar";

type Props = {};

const page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div>
        <Heading
          title={`${user?.name} profile`}
          description="Notematesync description"
          keywords="notes,books,notes pdf"
        />

        <div className="flex h-screen">
          {/* Fixed Header */}
          <header className="w-full bg-gray-800 text-white p-4 fixed top-0 left-0 z-10">
            Header
          </header>
          {/* Fixed Sidebar */}
          <div className="w-64 bg-gray-200 p-4 fixed left-0 top-16 bottom-0 z-10">
            Sidebar
          </div>
          <div className="flex-1 overflow-y-auto p-4 ml-64 pt-16 text-black">
            {/* Main content that can be scrolled */}
            <div>
              {/* Your content goes here */}
              
            </div>
          </div>
        </div>
        <>
      

      {/* all components here */}
     
    </>
    </div>
  );
};

export default page;
