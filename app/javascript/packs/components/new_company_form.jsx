import React from 'react'
import { createCompany } from '../lib/companies_api_client'
import { useFormField } from '../hooks/use_form_field'

const NewCompanyForm = () => {
  const nameField = useFormField("")
  const locationField = useFormField("")
  const industryField = useFormField("")

  function submit() {
    createCompany({ name: nameField.value, location: locationField.value, industry: industryField.value })
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
      <button className="btn btn-primary" onClick={submit}>Create Company</button>
    </form>
  )
}

export { NewCompanyForm }