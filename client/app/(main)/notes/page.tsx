"use client";
import React, { FC, useState } from "react";
import Heading from "../../utils/Heading";
import Protected from "../../hooks/useProtected";
import { useSelector } from "react-redux";
import Notes from "../../components/Notes/Notes";

type Props = {};

const page: FC<Props> = (props) => {

  return (
    <div>
      <Protected>
        <Heading
          title="Notes"
          description="Notematesync description"
          keywords="notes,books,notes pdf"
        />
        <Notes />
      </Protected>
    </div>
  );
};

export default page;
