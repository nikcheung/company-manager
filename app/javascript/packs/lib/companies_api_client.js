import { companies_path, company_path } from 'routes';

const headers = {
  "X-CSRF-Token": window.csrfToken,
  "Content-Type": "application/json"
}

function fetchCompanies() {
  return fetch(companies_path()).then(response => response.json())
}

function fetchCompany() {
  return fetch(company_path()).then(response => response.json())
}

function createCompany(attributes) {
  return fetch(companies_path(), {
    method: `POST`,
    body: JSON.stringify(attributes),
    headers: headers
  })
}

function deleteCompany(id) {
  return fetch(company_path(id), {
    method: `DELETE`,
    headers: headers
  })
}

export { fetchCompanies, fetchCompany, createCompany, deleteCompany }