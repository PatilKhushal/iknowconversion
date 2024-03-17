import React from 'react'
import ReactDOM from 'react-dom/client'
import RootLayout from './layout';
import Page from './page';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootLayout>
      <Page/>
    </RootLayout>
  </React.StrictMode>,
)
