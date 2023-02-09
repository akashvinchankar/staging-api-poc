import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Campaigns from './components/campaingns/Campaigns';
import CampaignsLayout from './components/campaingns/CampaignsLayout';
import Schedules from './components/campaingns/Schedules';
import PageNotFound from './components/campaingns/PageNotFound';
import SchedulesSeperate from './components/campaingns/SchedulesSeperate';

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route element={<Navigate to="/campaigns" />} index />
        <Route element={<CampaignsLayout />} path="campaigns">
          <Route element={<Campaigns />} index />
          <Route element={<Schedules />} path="schedules" />
          <Route element={<SchedulesSeperate />} path="schdeulesSeperate" />
        </Route>
      </Route>
      <Route element={<PageNotFound />} path="*" />
    </Routes>
  </BrowserRouter>
);
