import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as ImIcons from 'react-icons/im'

export const Hambergur = [
  {
    title: 'Leaderboard',
    path: '/leaderboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Favorites',
    path: '/favorites',
    icon: <AiIcons.AiFillHeart />,
    cName: 'nav-text'
  },
  {
    title: 'History',
    path: '/history',
    icon: <ImIcons.ImHistory />,
    cName: 'nav-text'
  },
  
];