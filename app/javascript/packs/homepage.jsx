import React from 'react'
import ReactDOM from 'react-dom'
import { CompaniesTable } from './components/companies_table'

document.addEventListener(`DOMContentLoaded`, () => {
  ReactDOM.render(
    <CompaniesTable />,
    document.querySelector(`#companies-table`),
  )
})
