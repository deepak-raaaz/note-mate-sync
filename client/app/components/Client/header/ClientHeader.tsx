"use client";
import React, { FC} from "react";


type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
};

const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
  

  return (
    <div className="w-full relative">
      
    </div>
  );
};

export default Header;
