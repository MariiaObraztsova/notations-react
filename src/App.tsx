import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App__header">
        <div className="App__form">
          {/* <NewNotionForm /> */}
        </div>
      </header>

      <main className="App__main">
        {/* <NotionsList /> */}

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
