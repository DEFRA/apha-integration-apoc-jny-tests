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
    throw new Error(
      `Error fetching token: ${error.response ? error.response.data : error.message}`
    )
  }
}

export const strProcessor = function (expectedCphNumber) {
  const encodedStr = expectedCphNumber
  const decodedStr = decodeURIComponent(encodedStr) // "12/345/6789"
  return decodedStr.replace(/^"|"$/g, '') // removes starting & ending quotes
}

export const holdingsendpointKeys = {
  CODE: 'code',
  MSG: 'message',
  COUNTYID: 'countyId',
  PARISHID: 'parishId',
  HOLDINGSID: 'holdingsId',
  ERRORS: 'errors',
  TYPE: 'type',
  ID: 'id',
  CPHTYPE: 'cphType',
  HOLDING_NOT_FOUND: 'Holding not found',
  NOT_FOUND: 'NOT_FOUND',
  VALIDATION_ERROR: 'VALIDATION_ERROR'
}

export const responseCodes = {
  ok: 200,
  badRequest: 400,
  notFound: 404
}

// console.log(
//   token(
//     '5okrvdfifbgh0la867o1610gj2',
//     '1cerfiie9ov0d1ic57qc9i9gespudo2fufnetp5buor2gscgmq8n'
//   )
// )
