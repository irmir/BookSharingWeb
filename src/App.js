// import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { store } from './redux/store'


import { AdminPage } from './components/pages/admin-page/AdminPage'
import { MainRoutes } from './components/MainRoutes.js'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/admin" component={AdminPage} />
            <Route component={MainRoutes} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider >
  );
}

export default App
