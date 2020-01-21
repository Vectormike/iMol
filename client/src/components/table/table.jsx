import React, { useState } from 'react';
import TableHeader from './table-header';
import TableRow from './table-row';

// const data = [
//   [Name, Price],
//   [1, 2]
// ];

const Table = () => {
  return (
    <div>
      <table>
        <TableHeader header='Name' />
        <tbody>
          <TableRow row='HEy' />
        </tbody>
      </table>
    </div>
  );
};
export default Table;
