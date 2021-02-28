import React from 'react'
import { createCompany, updateCompany } from '../lib/companies_api_client'
import { useFormField } from '../hooks/use_form_field'
import { useLocation, useHistory } from "react-router-dom";

const CompanyForm = () => {
  const location = useLocation()
  const history = useHistory()
  const existingCompany = location.state?.company

  const nameField = useFormField(existingCompany?.name)
  const locationField = useFormField(existingCompany?.location)
  const industryField = useFormField(existingCompany?.industry)

  const buttonText = existingCompany ? `Update Company` : `Create Company`

  function submit(event) {
    const params = { name: nameField.value, location: locationField.value, industry: industryField.value }
    if (existingCompany) {
      updateCompany({ id: existingCompany.id, ...params }).then(() => history.push(`/`))
    } else {
      createCompany(params)
    }
    event.preventDefault()
  }

  return (
    <form>
      <div className="form-group">
        <label>Name:
          <input className="form-control" type="text" {...nameField}></input>
        </label>
      </div>
      <div className="form-group">
        <label>Location:
          <input className="form-control" type="text" {...locationField}></input>
        </label>
      </div>
      <div className="form-group">
        <label>Industry:
          <input className="form-control" type="text" {...industryField}></input>
        </label>
      </div>
      <button className="btn btn-primary" onClick={submit}>{buttonText}</button>
    </form>
  )
}

export { CompanyForm }