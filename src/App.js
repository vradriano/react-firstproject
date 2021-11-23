import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

import Home from './pages/Home'
import CustomersList from './pages/Customers/List'
import CustomersRegister from './pages/Customers/Register'

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
        <Route path="/customers/add">
          <TemplatePage title="Cadastro De Clientes" Component={CustomersRegister} />
        </Route>
        <Route path="/customers">
          <TemplatePage title="Lista de Clientes" Component={CustomersList} />
          </Route>
        <Route path="/">
          <TemplatePage title="Página Inicial" Component={Home} />
        </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  );
}

export default App;
