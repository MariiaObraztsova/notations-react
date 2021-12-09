import React from 'react';
import { Notion } from '../../types';

type Props = {
  notions: Notion[],
}

export const NotionsList: React.FC<Props> = ({ notions }) => {
  return (
    <ul>
      <h1>
        Notions list
      </h1>
      {notions.map(notion => (
        <li key={notion.id}>
          <h2>
            {notion.title}
          </h2>
          {notion.body}
        </li>
      ))}
    </ul>
  )
}