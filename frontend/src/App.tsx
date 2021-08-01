import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.page'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage.page'));
const LogInPage = lazy(() => import('./pages/LogInPage/LogInPage.page'));
const PublisherProfilePage = lazy(() => import('./pages/PublisherProfilePage/PublisherProfilePage.page'));

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        </Route>
        <Route path="/register">
          <Suspense fallback={<div>Loading...</div>}>
            <RegisterPage />
          </Suspense>
        </Route>
        <Route path="/log-in">
          <Suspense fallback={<div>Loading...</div>}>
            <LogInPage />
          </Suspense>
        </Route>
        <Route path="/publisher-profile-page">
          <Suspense fallback={<div>Loading...</div>}>
            <PublisherProfilePage />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
