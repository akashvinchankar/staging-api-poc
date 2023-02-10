import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Campaigns.css'

const CampaignsLayout = () => {
  return (
    <div>
      <h4>Caching Data POC</h4>
      <nav>
        <ul>
          <li>
            <Link to="/campaigns">Campaigns</Link>
          </li>
          <li>
            <Link to="/campaigns/schedules">Schedules</Link>
          </li>
          <li>
            <Link to="/campaigns/schdeulesSeperate">Schedules Seperate</Link>
          </li>
          <li>
            <Link to="/campaigns/schdeulesDynamic">Schedules Dynamic</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default CampaignsLayout;
