import axios from "axios"
const cleanMobileAPI = axios.create({
  baseURL: "https://clean-mobile-1207-d-16406-prod.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_customtext_list(action) {
  return cleanMobileAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read(action) {
  return cleanMobileAPI.get(`/api/v1/customtext/${action.id}/`)
}
function api_v1_customtext_update(action) {
  return cleanMobileAPI.put(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customtext_partial_update(action) {
  return cleanMobileAPI.patch(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_list(action) {
  return cleanMobileAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read(action) {
  return cleanMobileAPI.get(`/api/v1/homepage/${action.id}/`)
}
function api_v1_homepage_update(action) {
  return cleanMobileAPI.put(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_partial_update(action) {
  return cleanMobileAPI.patch(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_login_create(action) {
  return cleanMobileAPI.post(`/api/v1/login/`)
}
function api_v1_pet_list(action) {
  return cleanMobileAPI.get(`/api/v1/pet/`)
}
function api_v1_pet_create(action) {
  return cleanMobileAPI.post(`/api/v1/pet/`, null, { data: action.data })
}
function api_v1_pet_read(action) {
  return cleanMobileAPI.get(`/api/v1/pet/${action.id}/`)
}
function api_v1_pet_update(action) {
  return cleanMobileAPI.put(`/api/v1/pet/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_pet_partial_update(action) {
  return cleanMobileAPI.patch(`/api/v1/pet/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_pet_delete(action) {
  return cleanMobileAPI.delete(`/api/v1/pet/${action.id}/`)
}
function api_v1_signup_create(action) {
  return cleanMobileAPI.post(`/api/v1/signup/`, null, { data: action.data })
}
function rest_auth_login_create(action) {
  return cleanMobileAPI.post(`/rest-auth/login/`, null, { data: action.data })
}
function rest_auth_logout_list(action) {
  return cleanMobileAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(action) {
  return cleanMobileAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(action) {
  return cleanMobileAPI.post(`/rest-auth/password/change/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_create(action) {
  return cleanMobileAPI.post(`/rest-auth/password/reset/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_confirm_create(action) {
  return cleanMobileAPI.post(`/rest-auth/password/reset/confirm/`, null, {
    data: action.data
  })
}
function rest_auth_registration_create(action) {
  return cleanMobileAPI.post(`/rest-auth/registration/`, null, {
    data: action.data
  })
}
function rest_auth_registration_verify_email_create(action) {
  return cleanMobileAPI.post(`/rest-auth/registration/verify-email/`, null, {
    data: action.data
  })
}
function rest_auth_user_read(action) {
  return cleanMobileAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(action) {
  return cleanMobileAPI.put(`/rest-auth/user/`, null, { data: action.data })
}
function rest_auth_user_partial_update(action) {
  return cleanMobileAPI.patch(`/rest-auth/user/`, null, { data: action.data })
}
export const apiService = {
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_pet_list,
  api_v1_pet_create,
  api_v1_pet_read,
  api_v1_pet_update,
  api_v1_pet_partial_update,
  api_v1_pet_delete,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
