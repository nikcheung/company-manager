import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { fetchCompany } from '../lib/companies_api_client'

const Company = () => {
  const { id } = useParams()
  const [company, setCompany] = useState({})

  const history = useHistory();
  const goHome = () => history.push(`/`);

  const onEditClicked = () => history.push({ pathname: `/company/${id}/edit`, state: { company } });

  useEffect(() => {
    fetchCompany(id).then(response => setCompany(response))
  }, [id])

  return (
    <div>
      <div>
        <div>
          Name: {company.name}
        </div>
        <div>
          Location: {company.location}
        </div>
        <div>
          Industry: {company.industry}
        </div>
      </div>
      <div>
        <button className="btn btn-secondary mr-3" onClick={goHome}>Back</button>
        <button className="btn btn-primary" onClick={onEditClicked}>Edit</button>
      </div>
    </div>
  )
}

export { Company }