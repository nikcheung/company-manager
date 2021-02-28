import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { deleteCompany } from '../lib/companies_api_client'

const CompanyTableRow = ({ company }) => {
  const history = useHistory()

  const showCompany = (event) => {
    if (Array.from(event.target.classList).includes(`js-delete`)) {
      return
    }
    history.push(`/company/${company.id}`)
  }

  const [deleted, setDeleted] = useState(false)
  
  function onDeleteClicked() {
    deleteCompany(company.id)
      .then(() => setDeleted(true))
      .catch(() => alert(`Failed to delete "${company.name}"`))
  }

  return deleted || (
    <tr onClick={showCompany}>
      <td>{company.name}</td>
      <td>{company.location}</td>
      <td>{company.industry}</td>
      <td><button className="btn btn-danger js-delete" onClick={onDeleteClicked}>&times;</button></td>
    </tr>
  )
}

export { CompanyTableRow }