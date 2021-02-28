import React from 'react'
import PropTypes from 'prop-types'

const CompanyTableRow = (company) => {
  return (
    <tr>
      <td>{company.name}</td>
      <td>{company.location}</td>
      <td>{company.industry}</td>
    </tr>
  )
}

CompanyTableRow.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  industry: PropTypes.string
}

export { CompanyTableRow }