import React from 'react'
import ReactDOM from 'react-dom'
import { CompaniesTable } from './components/companies_table'
import { NewCompanyForm } from './components/new_company_form'

const Homepage = () => (
  <div class="container">
    <div class="header row mt-5 mb-4">
      <h1>Company Manager</h1>
    </div>
    <div class="row">
      <div class="col-9">
        <CompaniesTable></CompaniesTable>
      </div>
    
      <div class="col-3">
        <NewCompanyForm></NewCompanyForm>
      </div>
    </div>
  </div>
)

document.addEventListener(`DOMContentLoaded`, () => {
  ReactDOM.render(
    <Homepage />,
    document.querySelector(`#companies-table`),
  )
})
