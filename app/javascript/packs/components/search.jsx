import React from 'react'
import { fetchCompanies } from '../lib/companies_api_client'
import { useFormField } from '../hooks/use_form_field'

function parseSearchQuery(queryString) {
  const [parameter, value] = queryString.split(":")

  if (!value) {
    return { parameter: `name`, value: queryString }
  } else {
    return { parameter, value }
  }
}

const Search = ({ setCompanies }) => {
  const searchField = useFormField(``)

  function submit(event) {
    const query = parseSearchQuery(searchField.value)
    fetchCompanies(query)
      .then((result) => setCompanies(result))
      .catch(() => alert(`Malformed query.`))

    event.preventDefault()
  }

  return (
    <div className="row ml-3 mb-3">
      <form className="form-inline">
        <input type="text" className="form-control" {...searchField}></input>
        <button className="btn btn-primary" onClick={submit}>Search</button>
      </form>
    </div>
  )
}

export { Search }