// import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter } from 'react-router-dom'
import { store } from './redux/store'

import {Header} from './components/common/Header.js'
import { MainPage } from './components/pages/main-page/MainPage.js'
import { AccountPage } from './components/pages/AccountPage.js'
import { LibraryPage } from './components/pages/LibraryPage.js'
import { SettingsPage } from './components/pages/SettingsPage.js'
import { About } from './components/pages/About.js'
import { Footer } from './components/common/Footer'
import { useAuth } from './hooks/auth.hook'

function App () {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Route path="/" exact component={MainPage} />
          <Route path="/account"  component={AccountPage} />
          <Route path="/library"  component={LibraryPage} />
          <Route path="/settings"  component={SettingsPage} />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider >
  );
}

export default App
