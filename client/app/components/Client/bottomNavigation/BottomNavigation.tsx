'use client'
import React from 'react'
import { BottomNavigation } from '@mui/material';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FaBook } from "react-icons/fa6";
import Paper from '@mui/material/Paper';
import { HiHome } from "react-icons/hi2";
import { HiUserGroup } from "react-icons/hi";
import { BsCalendarEventFill } from "react-icons/bs";

type Props = {}

const BottomNavigationBar = (props: Props) => {
    const [value, setValue] = React.useState(0);
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} className='sm:hidden z-10'>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className='!bg-white dark:!text-white dark:bg-opacity-50 dark:bg-gradient-to-b  dark:from-gray-900 dark:to-black dark:!border-slate-800 border-1'
    >
      <BottomNavigationAction label="Home" icon={<HiHome /> } />
      <BottomNavigationAction label="Notes" icon={<FaBook />} />
      <BottomNavigationAction label="Communities" icon={<HiUserGroup />} />
      <BottomNavigationAction label="Events" icon={<BsCalendarEventFill />} />
    </BottomNavigation>
  </Paper>
  )
}

export default BottomNavigationBar