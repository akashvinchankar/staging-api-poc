import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CampaignsLayout = () => {
  return (
    <div>
      <h4>Data will be displayed here</h4>
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
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default CampaignsLayout;
