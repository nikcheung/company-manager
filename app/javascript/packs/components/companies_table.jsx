import React, { useEffect, useState } from 'react'

const CompaniesTable = () => {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    fetchCompanies().then((result) => setCompanies(result))
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Industry</th>
        </tr>
      </thead>
      <tbody>
        {companies.map(company => <CompanyTableRow company={company}></CompanyTableRow>)}
      </tbody>
    </table>
  )
}

export { CompaniesTable }