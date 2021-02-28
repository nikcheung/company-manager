import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { deleteCompany } from '../lib/companies_api_client'

const CompanyTableRow = ({ company }) => {
  const [deleted, setDeleted] = useState(false)
  
  function onDeleteClicked() {
    deleteCompany(company.id)
      .then(() => setDeleted(true))
      .catch(() => alert(`Failed to delete "${company.name}"`))
  }

  return deleted || (
    <tr>
      <td>{company.name}</td>
      <td>{company.location}</td>
      <td>{company.industry}</td>
      <td><button className="btn btn-danger" onClick={onDeleteClicked}>&times;</button></td>
    </tr>
  )
}

CompanyTableRow.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  industry: PropTypes.string
}

export { CompanyTableRow }