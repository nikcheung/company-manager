import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Company } from './components/company'
import { Homepage } from './components/homepage'
import { CompanyForm } from './components/company_form'

const App = () => (
  <Router>
    <div className="container">
      <div className="header row mt-5 mb-4">
        <h1>Company Manager</h1>
      </div>
      <Route path="/" exact component={Homepage}/>
      <Route path="/company/:id" exact component={Company}/>
      <Route path="/company/:id/edit" component={CompanyForm}/>
    </div>
  </Router>
)

document.addEventListener(`DOMContentLoaded`, () => {
  ReactDOM.render(
    <App />,
    document.querySelector(`#main`),
  )
})

export { App }