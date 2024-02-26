import styled from '@emotion/styled';
import React from 'react';
import Link from "next/link";

const StyledPackageBadges = styled.div`
  margin: 0 -5px;
  a {
    margin: 0 5px;
  }
`;

export const PackageBadges = () => {
  return (
    <StyledPackageBadges>
      <p>
        <Link href={"/"}>
          <img
            src="https://img.shields.io/github/license/azouaoui-med/react-pro-sidebar?style=flat-square"
            alt="License"
          />
        </Link>
        <Link href={"/"}>
          <img
            src="https://img.shields.io/npm/dependency-version/react-pro-sidebar/peer/react?style=flat-square"
            alt="Peer"
          />
        </Link >
        <Link href={"/"}>
          <img
            src="https://img.shields.io/npm/dt/react-pro-sidebar?style=flat-square"
            alt="Download"
          />
        </Link>
        <Link href={"/"}>
          <img
            src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social"
            alt="Stars"
          />
        </Link>
        <Link href={"/"}>
          <img
            src="https://img.shields.io/github/forks/azouaoui-med/react-pro-sidebar?style=social"
            alt="Forks"
          />
        </Link>
      </p>
    </StyledPackageBadges>
  );
};