import styled from "@emotion/styled";
import React from "react";
import { Typography } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  broken: boolean;
}

const StyledSidebarHeader = styled.div`
  height: 50px;
  min-height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  > div {
    width: 100%;
    overflow: hidden;
  }
`;

const StyledLogo = styled.div<{ rtl?: boolean }>`
  width: 35px;
  min-width: 35px;
  height: 35px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  background-color: #009fdb;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  ${({ rtl }) =>
    rtl
      ? `
      margin-left: 10px;
      margin-right: 4px;
      `
      : `
      margin-right: 10px;
      margin-left: 4px;
      `}
`;

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  broken,
  ...rest
}) => {
  return (
    <StyledSidebarHeader {...rest}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {broken && (
          <Typography variant="subtitle1" fontWeight={700} color="#0098e5" className="text-center">
            NMS
          </Typography>
        )}
      </div>
    </StyledSidebarHeader>
  );
};
