import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import RenderTable from './component/RenderTable';
import Form from './component/Form';
import FormUpdate from './component/FormUpdate';

const Routes = () => {

  return (
    <main>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/" component={RenderTable} />
        <Route exact path="/" component={Form} />
        <Route path="/form-update/:id" render={(props) => <FormUpdate {...props} />} />
      </Switch>
    </main>
  )
}

export default Routes;