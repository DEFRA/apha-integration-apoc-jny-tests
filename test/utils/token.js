import axios from 'axios'
import { expect } from 'chai'

export const token = async (clientId, clientSecret) => {
  const tokenUrl =
    'https://apha-integration-bridge-c63f2.auth.eu-west-2.amazoncognito.com'
  const clientCredentials = `${clientId}:${clientSecret}`
  const encodedCredentials = Buffer.from(clientCredentials).toString('base64')

  const headers = {
    Authorization: `Basic ${encodedCredentials}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  const payload = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret
  })
  try {
    const response = await axios.post(`${tokenUrl}/oauth2/token`, payload, {
      headers
    })
    return response.data.access_token
  } catch (error) {
    if (error.response) {
      // The server responded with a status outside the 2xx range
      expect(error.response.status).to.equal(400)
      expect(error.response.data.error).to.equal('invalid_client')
    }
  }
}
// this function helps to remove extra spaces of the data coming through feature file
export const strProcessor = function (expectedCphNumber) {
  const encodedStr = expectedCphNumber
  const decodedStr = decodeURIComponent(encodedStr) // "12/345/6789"
  return decodedStr.replace(/^"|"$/g, '') // removes starting & ending quotes
}

// Below are the holdings expected response keys
export const holdingsendpointKeys = {
  STATUSCODE: 'statusCode',
  ERROR: 'error',
  UNAUTHORISED: 'Unauthorized',
  UNAUTH_MESSAGE: 'Token verification failed',

  CODE: 'code',
  MSG: 'message',
  COUNTYID: 'countyId',
  PARISHID: 'parishId',
  HOLDINGSID: 'holdingId',
  ERRORS: 'errors',
  TYPE: 'type',
  ID: 'id',
  CPHTYPE: 'cphType',
  HOLDING_NOT_FOUND: 'Holding not found',
  NOT_FOUND: 'NOT_FOUND',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  INVALID_PARAMETERS: 'Invalid request parameters',
  BAD_REQUEST: 'BAD_REQUEST'
}
// These are different API response codes
export const responseCodes = {
  ok: 200,
  badRequest: 400,
  notFound: 404
}

// eyJraWQiOiJKK2IrTsadsadsaElXc2kwZzVXZTM4NmRyTlhlUmdPQm1DUlhMM21ETmdHU2k2T1lJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1b2tydmRmaWZiZ2gwbGE4NjdvMTYxMGdqMiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXBoYS1pbnRlZ3JhdGlvbi1icmlkZ2UtcmVzb3VyY2Utc3J2XC9hY2Nlc3MiLCJhdXRoX3RpbWUiOjE3NTMxMDQyNjAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTIuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0yX3VWTTNXeUxRZCIsImV4cCI6MTc1MzEwNzg2MCwiaWF0IjoxNzUzMTA0MjYwLCJ2ZXJzaW9uIjoyLCJqdGkiOiI1ZjlmOGFiMi1jODllLTQxMGItOWEwOC0wYjFhNTNhZmYwZGEiLCJjbGllbnRfaWQiOiI1b2tydmRmaWZiZ2gwbGE4NjdvMTYxMGdqMiJ9.VgmTosXX9itYyU92ai1avnJj14vUnCBu5eDzvAXftSG1mPl0Fuy6OQ3CaP7KORygD5pXWWsJP6QPlI-zj8x9lRj-aIrTKc0c-SHDbvuzfKGHqJwvdxg97mef0EroT39q7YsMdC-HJTAK6k1loLG8W9nlNLAVXWsv9_KxgLiiReno6hEZ9nrYlfuTs_XfwGkqf8W1tcnAYmS5QWpjChqlQeR312SZQx
// eyJraWQiOiJKK2IrTsadsadsaElXc2kwZzVXZTM4NmRyTlhlUmdPQm1DUlhMM21ETmdHU2k2T1lJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1b2tydmRmaWZiZ2gwbGE4NjdvMTYxMGdqMiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXBoYS1pbnRlZ3JhdGlvbi1icmlkZ2UtcmVzb3VyY2Utc3J2XC9hY2Nlc3MiLCJhdXRoX3RpbWUiOjE3NTMxMDQyNjAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTIuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0yX3VWTTNXeUxRZCIsImV4cCI6MTc1MzEwNzg2MCwiaWF0IjoxNzUzMTA0MjYwLCJ2ZXJzaW9uIjoyLCJqdGkiOiI1ZjlmOGFiMi1jODllLTQxMGItOWEwOC0wYjFhNTNhZmYwZGEiLCJjbGllbnRfaWQiOiI1b2tydmRmaWZiZ2gwbGE4NjdvMTYxMGdqMiJ9.VgmTosXX9itYyU92ai1avnJj14vUnCBu5eDzvAXftSG1mPl0Fuy6OQ3CaP7KORygD5pXWWsJP6QPlI-zj8x9lRj-aIrTKc0c-SHDbvuzfKGHqJwvdxg97mef0EroT39q7YsMdC
// eyJraWQiOiJKK2IrTsadsadsaElXc2kwZzVXZTM4NmRyTlhlUmdPQm1DUlhMM21ETmdHU2k2T1lJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1b2tydmRmaWZiZ2gwbGE4NjdvMTYxMGdqMiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXBoYS1pbnRlZ3JhdGlvbi1icmlkZ2UtcmVzb3VyY2Utc3J2XC9hY2Nlc3MiLCJhdXRoX3RpbWUiOjE3NTMxMDQyNjAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTIuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0yX3VWTTNXeUxRZCIsImV4cCI6MTc1MzEwNzg2MCwiaWF0IjoxNzUzMTA0MjYwLCJ2ZXJzaW9uIjoyLCJqdGkiOiI1ZjlmOGFiMi1jODllLTQxMGItOWEwOC0wYjFhNTNhZmYwZGEiLCJjbGllbnRfaWQiOiI1b2tydmRmaWZiZ2gwbGE4NjdvMTYxMGdqMiJ9.VgmTosXX9itYyU92ai1avnJj14vUnCBu5eDzvAXftSG1mPl0Fuy6OQ3CaP7KORygD5pXWWsJP6QPlI-zj8x9lRj
// eyJraWQiOiJKK2IrTsadsadsaElXc2kwZzVXZTM4NmRyTlhlUmdPQm1DUlhMM21ETmdHU2k2T1lJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1b2tydmRmaWZiZ2gwbGE4NjdvMTYxMGdqMiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXBoYS1pbnRlZ3JhdGlvbi1icmlkZ2UtcmVzb3VyY2Utc3J2XC9hY2Nlc3MiLCJhdXRoX3RpbWUiOjE3NTMxMDQyNjAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTIuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0yX3VWTTNXeUxRZCIsImV4cCI6MTc1MzEwNzg2MCwiaWF0IjoxNzUzMTA0MjYwLCJ2ZXJzaW9uIjoyLCJqdGkiOiI1ZjlmOGFiMi1jODllLTQxMGItOWEwOC0wYjFhNTNhZmYwZGEiLCJjbGllbnRfaWQiOiI1b2tydmRmaWZiZ2gwbGE4NjdvMTYxMGdqMiJ
// // eyJraWQiOiJKK2IrTsadsadsaElXc2kwZzVXZTM4NmRyTlhlUmdPQm1DUlhMM21ETmdHU2k2T1lJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1b2tydmRmaWZiZ2gwbGE4NjdvMTYxMGdqMiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXBoYS1pbnRlZ3JhdGlvbi1icmlkZ2UtcmVzb3VyY2Utc3J2XC9hY2Nlc3MiLCJhdXRoX3RpbWUiOjE3NTMxMDQyNjAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTIuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0yX3VWTTNXeUxRZCIsImV4cCI6MTc1MzEwNzg2MCwiaWF0IjoxNzUzMTA0MjYwLCJ2ZXJzaW9uIjoyLCJqdGkiOiI1ZjlmOGFiMi1jODllLTQxMGItOWEwOC0wYjFhNTNhZmYwZGEiLCJjbGllbnRfaWQiOiI1b2tydmRmaWZiZ2gwbGE4NjdvMTYxMGdqMiJ9
// eyJraWQiOiJKK2IrTsadsadsaElXc2kwZzVXZTM4NmRyTlhlUmdPQm1DUlhMM21ETmdHU2k2T1lJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1b2tydmRmaWZiZ2gwbGE4NjdvMTYxMGdqMiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXBoYS1pbnRlZ3JhdGlvbi1icmlkZ2UtcmVzb3VyY2Utc3J2XC9hY2Nlc3MiLCJhdXRoX3RpbWUiOjE3NTMxMDQyNjAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTIuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0yX3VWTTNXeUxRZCIsImV4cCI6MTc1MzEwNzg2MCwiaWF0IjoxNzUzMTA0MjYwLCJ2ZXJzaW9uIjoyLCJqdGkiOiI1ZjlmOGFiMi1jODllLTQxMGItOWEwOC0wYjFhNTNhZmYwZGEiLCJ
// eyJraWQiOiJKK2IrTsadsadsaElXc2kwZzVXZTM4NmRyTlhlUmdPQm1DUlhMM21ETmdHU2k2T1lJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1b2tydmRmaWZiZ2gwbGE4Nj

// {
//   "sub": "5okrvdfifbgh0la867o1610gj2",
//   "token_use": "access",
//   "scope": "apha-integration-bridge-resource-srv/access",
//   "auth_time": 1753104260,
//   "iss": "https://cognito-idp.eu-west-2.amazonaws.com/eu-west-2_uVM3WyLQd",
//   "exp": 1753107860,
//   "iat": 1753104260,
//   "version": 2,
//   "jti": "5f9f8ab2-c89e-410b-9a08-0b1a53aff0da",
//   "client_id": "5okrvdfifbgh0la867o1610gj2"
// }
// {
//   "sub": "5okrvdfifbgh0la867o1610gj2",
//   "token_use": "access",
//   "scope": "apha-integration-bridge-resource-srv/access",
//   "auth_time": 1753104260,
//   "iss": "https://cognito-idp.eu-west-2.amazonaws.com/eu-west-2_uVM3WyLQd",
//   "exp": 1753107860,
//   "iat": 1753104260,
//   "version": 2,
//   "jti": "5f9f8ab2-c89e-410b-9a08-0b1a53aff0da",
//   "client_id": "5okrvdfifbgh0la867o1610gj2"
// }
