import axios from 'axios'

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
      // expect(error.response.status).to.equal(403)
      // expect(error.response.data.error).to.equal('invalid_client')
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
  UNAUTH_MESSAGE: 'Access Denied',

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
