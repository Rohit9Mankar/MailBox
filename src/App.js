import SignUpForm from './SignUpPage/SignUpPage';
import { Route, Switch } from 'react-router-dom';
import Compose from './ComposeMail/ComposeMail';
import Inbox from './components/Inbox/Inbox';
import InboxViewMail from './components/Inbox/InboxViewMail';
import Sentbox from './components/SentBox/SentBox';


function App() {
  return (

    <Switch>
      <Route path='/' exact>
        <SignUpForm />
      </Route>
      <Route path='/main' exact>
        <Inbox />
      </Route>
      <Route path='/compose' exact>
        <Compose />
      </Route>
      <Route path='/sentbox' exact>
        <Sentbox />
      </Route>
      <Route path='/viewMail' exact>
        <InboxViewMail />
      </Route>


    </Switch>





  );
}

export default App;
