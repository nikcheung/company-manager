import React, { useEffect, useState } from 'react'
import { fetchCompanies } from '../lib/companies_api_client'
import { CompanyTableRow } from './company_table_row'
import { Search } from './search'

const CompaniesTable = () => {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    fetchCompanies().then((result) => setCompanies(result))
  }, [])

  return (
    <>
      <div className="row">
        <Search setCompanies={setCompanies} />
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Industry</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(company => <CompanyTableRow company={company} key={company.id}></CompanyTableRow>)}
        </tbody>
      </table>
    </>
  )
}

export { CompaniesTable }