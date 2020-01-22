import React from 'react';

export default function TableHeader({ header }) {
  const heads = header.map((head, i) => <th key={i}>{head}</th>);

  return (
    <div>
      <thead>{heads}</thead>
    </div>
  );
}
