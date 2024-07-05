import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Helmet } from 'react-helmet'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Helmet>
      <title>Hector's Portfilio</title>
      <meta name="title" content="Hector's Portfilio" />
      <meta name="description" content="Hector's collection of projects " />
      <meta name="keywords" content="portfolio,hector,projects,github" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />

    </Helmet>
    <App />
  </React.StrictMode>,
)
