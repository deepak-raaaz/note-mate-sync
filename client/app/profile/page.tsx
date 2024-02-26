"use client";
import React, { FC } from "react";
import Heading from "../utils/Heading";
import Protected from "../hooks/useProtected";
import { useSelector } from "react-redux";
import Profile from "../components/Profile/Profile";
import SideNavbar from "../components/Client/sidebar/ClientSidebar";

type Props = {};

const page: FC<Props> = (props) => {
  const { user } = useSelector((state: any) => state.auth);
  return (
    <div>
      <Protected>
        <Heading
          title={`${user?.name} profile`}
          description="Notematesync description"
          keywords="notes,books,notes pdf"
        />
        <SideNavbar component={<Profile />} />
      </Protected>
    </div>
  );
};

export default page;
