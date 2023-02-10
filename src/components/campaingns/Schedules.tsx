import React from 'react';
import { useFetchSchedulesQuery } from '../../features/campaign/schedulesSlice';
import moment from 'moment';
import './Campaigns.css';
// import { persistor } from '../../app/store';

// An array of schedule IDs
const IDs = [230080, 230081, 233776, 233778];

// The main component that returns a table to display schedules
const Schedules = () => {
  // A function to handle reloading the page
  const handleReload = () => {
    window.location.reload();
    // persistor.purge();
  };

  // Returns a table with headings and a body that maps over the IDs to display details
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Prefrential Position</th>
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

// A child component to display details for a single schedule
const ChildComponent = ({ id }: { id: number }) => {
  // Fetches the schedule details using the useFetchSchedulesQuery hook
  const { data, fulfilledTimeStamp } = useFetchSchedulesQuery(id);

  // Returns a table row to display the schedule details
  // If the data is available, the name position and prefrential position are displayed in initial color
  // If the data is not available, the id is displayed in grey with reduced opacity
  return (
    <tr>
      <td>{id}</td>
      <td style={{ color: data ? 'initial' : 'grey', opacity: data ? 1 : 0.5 }}>
        {data ? data.advertisement : id}
      </td>
      <td style={{ color: data ? 'initial' : 'grey', opacity: data ? 1 : 0.5 }}>
        {data ? data.position : id}
      </td>
      <td style={{ color: data ? 'initial' : 'grey', opacity: data ? 1 : 0.5 }}>
        {data ? data.preferential_position : id}
      </td>
      <td>
        {data && moment(fulfilledTimeStamp).format('MM/DD/YYYY, h:mm:ss a')}
      </td>
    </tr>
  );
};

export default Schedules;
