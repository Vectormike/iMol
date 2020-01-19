import React from 'react';

export default function TableHeader({ header }) {
  return (
    <div>
      <thead>
        <th>{header}</th>
      </thead>
    </div>
  );
}
