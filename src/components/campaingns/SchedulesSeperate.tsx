import React from 'react';
import { useFetchSchedulesNameQuery } from '../../features/campaign/seperateSlices/schdeulesNameSlice';
import { useFetchSchedulesDaysQuery } from '../../features/campaign/seperateSlices/scheduleDaysSlice';
import './Campaigns.css';

// IDs is an array of schedules IDs
const IDs = [230080, 230081, 233776, 233778];

const SchedulesSeperate = () => {
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
  // getting data for name and days for a schedule through seprate hooks
  const { data: schName } = useFetchSchedulesNameQuery(id);
  const { data: schDays } = useFetchSchedulesDaysQuery(id);

  // Returns a table row to display the schedule details
  // If the data is available, the name and days are displayed in initial color
  // If the data is not available, the id is displayed in grey with reduced opacity
  return (
    <tr>
      <td>{id}</td>
      <td
        style={{
          color: schName ? 'initial' : 'grey',
          opacity: schName ? 1 : 0.5,
        }}
      >
        {schName ? schName?.name : id}
      </td>
      <td
        style={{
          color: schDays ? 'initial' : 'grey',
          opacity: schDays ? 1 : 0.5,
        }}
      >
        {schDays ? schDays?.days : id}
      </td>
    </tr>
  );
};

export default SchedulesSeperate;
