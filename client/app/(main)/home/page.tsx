"use client";
import React, { FC, useState } from "react";
import Heading from "../../utils/Heading";
import Protected from "../../hooks/useProtected";
import Home from "@/app/components/Client/home/Home";

type Props = {};

const page: FC<Props> = (props) => {

  return (
    <div>
      <Protected>
        <Heading
          title="Home"
          description="Notematesync description"
          keywords="notes,books,notes pdf"
        />
        <Home />
      </Protected>
    </div>
  );
};

export default page;
