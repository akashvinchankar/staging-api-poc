import React from 'react';
import { useFetchSchedulesNameQuery } from '../../features/campaign/seperateSlices/schdeulesNameSlice';
import { useFetchSchedulesDaysQuery } from '../../features/campaign/seperateSlices/scheduleDaysSlice';
import './Campaigns.css';

const IDs = [230080, 230081];

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
  const { data: schName } = useFetchSchedulesNameQuery(id);
  const { data: schDays } = useFetchSchedulesDaysQuery(id);

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
