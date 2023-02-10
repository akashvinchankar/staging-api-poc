import React from 'react';
import { useFetchSchedulesQuery } from '../../features/campaign/schedulesSlice';
import moment from 'moment';
import './Campaigns.css';
// import { persistor } from '../../app/store';

const IDs = [230080, 230081, 233776, 233778];

const Schedules = () => {
  const handleReload = () => {
    window.location.reload();
    // persistor.purge();
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Fulfilled Time Stamp</th>
          </tr>
        </thead>
        <tbody>
          {IDs.map((id) => (
            <ChildComponent key={id} id={id} />
          ))}
        </tbody>
      </table>

      <button
        onClick={() => {
          // persistor.purge();
        }}
      >
        Purge Storage
      </button>
      <button
        onClick={() => {
          handleReload();
        }}
      >
        Reload
      </button>
    </div>
  );
};

const ChildComponent = ({ id }: { id: number }) => {
  const { data, fulfilledTimeStamp } = useFetchSchedulesQuery(id);

  return (
    <tr>
      <td>{id}</td>
      <td style={{ color: data ? 'initial' : 'grey', opacity: data ? 1 : 0.5 }}>
        {data ? data.advertisement : id}
      </td>
      <td style={{ color: data ? 'initial' : 'grey', opacity: data ? 1 : 0.5 }}>
        {data ? data.position : id}
      </td>
      <td>
        {data && moment(fulfilledTimeStamp).format('MM/DD/YYYY, h:mm:ss a')}
      </td>
    </tr>
  );
};

export default Schedules;
