import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as ImIcons from 'react-icons/im'

import FavoritesProp from './components/Favourite/FavoritesProp';
import LeaderboardProp from './components/Leaderboard/LeaderboardProp';
import HistoryProp from './components/History/HistoryProp';
import ChooseRole from './components/ChooseRole/ChooseRole';
import CampaignList from './components/CampaignList/CampaignList';
import CreateCampaign from './components/CreateCampaign/CreateCampaign';



export const DonorRoutes = [
  {
    title: 'Leaderboard',
    path: '/leaderboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    component: <LeaderboardProp/>,
    layout:'/donor'
  },
  {
    title: 'Favorites',
    path: '/favorites',
    icon: <AiIcons.AiFillHeart />,
    cName: 'nav-text',
    component: <FavoritesProp/>,
    layout:'/donor'
  },
  {
    title: 'History',
    path: '/history',
    icon: <ImIcons.ImHistory />,
    cName: 'nav-text',
    component: <HistoryProp/>,
    layout:'/donor'
  },
  {
    title: 'Logout',
    path: '/donor',
    icon: <ImIcons.ImExit/>,
    cName: 'nav-text',
    component: <ChooseRole/>,
    layout:'/login'
  },
];

export const CsrpartnerRoutes = [
  {
    title: 'Campaign history',
    path: '/campaignhistory',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    component:<CampaignList/>,
    layout:'/csrpartner'
  },
  {
    title:'Create campaign',
    path: '/createcampaign',
    icon: <AiIcons.AiOutlinePlus/>,
    cName: 'nav-text',
    component: <CreateCampaign/>,
    layout:'/csrpartner'
  },
  {
    title: 'Logout',
    path: '/csrpartner',
    icon: <ImIcons.ImExit/>,
    cName: 'nav-text',
    component: <ChooseRole/>,
    layout:'/login'
  },
  
]
