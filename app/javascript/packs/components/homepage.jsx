import React from 'react'
import { CompaniesTable } from './companies_table'
import { CompanyForm } from './company_form'

const Homepage = () => (
  <>
    <div className="row">
      <div className="col-9">
        <CompaniesTable />
      </div>
    
      <div className="col-3">
        <CompanyForm />
      </div>
    </div>
  </>
)

export { Homepage }