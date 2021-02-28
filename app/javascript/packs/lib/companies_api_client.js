import { companies_path, company_path } from 'routes';

const headers = {
  "X-CSRF-Token": window.csrfToken,
  "Content-Type": "application/json"
}

function parse(response) {
  return response.json()
}

function getIndexUrl(query) {
  if (!query?.value) {
    return companies_path()
  } else {
    return `${companies_path()}/?parameter=${query.parameter}&value=${query.value}`
  }
}

function fetchCompanies(query) {
  const url = getIndexUrl(query)
  return fetch(url).then(parse)
}

function fetchCompany(id) {
  return fetch(company_path(id)).then(parse)
}

function createCompany(attributes) {
  return fetch(companies_path(), {
    method: `POST`,
    body: JSON.stringify(attributes),
    headers: headers
  }).then(parse)
}

function updateCompany(attributes) {
  return fetch(company_path(attributes.id), {
    method: `PATCH`,
    body: JSON.stringify(attributes),
    headers: headers
  }).then(parse)
}

function deleteCompany(id) {
  return fetch(company_path(id), {
    method: `DELETE`,
    headers: headers
  }).then(parse)
}

export { fetchCompanies, fetchCompany, createCompany, deleteCompany, updateCompany }