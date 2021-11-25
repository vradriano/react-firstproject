import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'
import TemplateClean from './templates/Clean'

import CustomersList from './pages/Customers/List'
import CustomersRegister from './pages/Customers/Register'
import CustomersEdit from './pages/Customers/Edit'
import Login from './pages/Login'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <TemplateClean title="Acesso Restrito" Component={Login} />
          </Route>
          
          <TemplateDefault>
            <Route path="/customers/edit/:id">
              <TemplatePage title="Editar Clientes" Component={CustomersEdit} />
            </Route>
            <Route path="/customers/add">
              <TemplatePage title="Cadastro De Clientes" Component={CustomersRegister} />
            </Route>
            <Route path="/customers">
              <TemplatePage title="Lista de Clientes" Component={CustomersList} />
              </Route>
            <Route path="/">
              <TemplatePage title="Página Inicial" Component={Home} />
            </Route>
          </TemplateDefault>
        </Switch>
    </Router>
  );
}

export default App;
