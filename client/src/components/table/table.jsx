import React from 'react';
import TableHeader from './table-header';
import TableRow from './table-row';

const Table = () => {
  return (
    <div>
      <table>
        <TableHeader header='Hi' />
        <tbody>
          <TableRow row='HEy' />
        </tbody>
      </table>
    </div>
  );
};
export default Table;
