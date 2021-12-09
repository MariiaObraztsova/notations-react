import React, { useEffect, useState } from 'react';
import { getAllNotions } from './api/api';
import './App.css';
import './generalStyles.css';
import { Notion } from './types';

import { NotionsList } from './components/NotionsList/NotionsList';

const App: React.FC = () => {
  const [ notions, setNotions ] = useState<Notion[]>([]);

  useEffect(() => {
    const loadNotions = async () => {
      const notionsFromServer = await getAllNotions();

      setNotions(notionsFromServer);
    };

    loadNotions();
  })
  return (
    <div className="App">
      <header className="App__header">
        <div className="App__form">
          {/* <NewNotionForm /> */}
        </div>
      </header>

      <main className="App__main">
        <div className="App__sidebar">
          <NotionsList notions={notions} />
        </div>

        <div className="App__content">
          {/* {selectedNotionId > 0 && (
            <MovieDetails
              notionId={selectedNotionId}
              notions={notions}
            />
          )} */}
        </div>
      </main>
    </div>
  );
}

export default App;
