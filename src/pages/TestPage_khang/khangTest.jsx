import React from 'react';
import SuggestForDay from '../../components/SuggestForDay/SuggestForDay';
import Chart from '../../components/Chart/Chart';

export default function TestPage() {
  const listSuggest = [
    {
      title: 'This is title',
      content: 'Hello world',
      time: new Date(),
    },
    {
      title: 'Hello world',
      content: 'sdfbhsdhjfbs',
      time: new Date(),
    },
  ];
  return (
    <div style={{ padding: 40 }}>
      {/* <SuggestForDay listSuggest={listSuggest} /> */}
      <Chart />
    </div>
  );
}
