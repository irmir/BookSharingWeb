import { useEffect } from 'react'
import { connect, Provider } from 'react-redux'
import { Router, BrowserRouter } from 'react-router-dom'
import { store } from './redux/store'

import {AuthCard} from './components/cards/AuthCard.js'
import {Header} from './components/common/Header.js'
import {MainPage} from './components/pages/MainPage.js'

function App () {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app container">
          <Header />
          <MainPage />
        </div>
      </BrowserRouter>
    </Provider >
  );
}

export default App
