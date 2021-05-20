import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Categoria from './pages/Categoria'

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>Meu site legal</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>

            <li>
              <Link to="/sobre">Quem somos</Link>
            </li>

            <li>
              <Link to="/categoria?tipo=noticia">Notícias</Link>
            </li>
            <li>
              <Link to="/categoria?tipo=viagem">Viagens</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/sobre"><Sobre /></Route>
        <Route exact path="quem-somos">
          <Redirect to="/sobre" />
        </Route>
        <Route path="/categoria/"><Categoria /></Route>
        <Route path="*">
          <h1>Página não encontrada :(</h1>
        </Route>
      </Switch>

      <hr />
      <footer>Todos os direitos reservados... </footer>
    </BrowserRouter>
  )
}

export default App;