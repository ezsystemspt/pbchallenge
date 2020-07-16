import React from 'react';

export default function TableRows(props) {
  if (!props.data.length) {
    return (
      <tr>
        <td colSpan='3'>No data to show.</td>
      </tr>
    );
  }

  return props.data.map(row => {
    return (
      <tr>
        <td>{row.firstName}</td>
        <td>{row.lastName}</td>
        <td>{row.phoneNumber}</td>
      </tr>
    );
  });
}
