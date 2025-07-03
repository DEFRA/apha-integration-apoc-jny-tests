import { Cph } from '../responseprocessor/cph'
import { Given, When, Then } from '@cucumber/cucumber'
import {
  // token,
  strProcessor,
  holdingsendpointKeys,
  responseCodes
} from '../utils/token'
import axios from 'axios'
import { expect } from 'chai'

const expectedCphTypes = ['permanent', 'temporary', 'emergency']
const expectedType = 'holdings'
const baseUrl = 'https://apha-integration-bridge.dev.cdp-int.defra.cloud'

// const clintId = '5okrvdfifbgh0la867o1610gj2'
// const secretId = '1cerfiie9ov0d1ic57qc9i9gespudo2fufnetp5buor2gscgmq8n'

//  response = await axios.get(endpoint, {
//   headers: {
//     Authorization: `Bearer ${tokenGen}`
//   }
// })
// let tokenGen = ''
let response = ''
let cleanStr = ''
// Given(/^the auth token$/, async () => {
//   tokenGen = await token(clintId, secretId)
// })

Given(
  /^the user submits a CPH request with CPH number (.+)$/,
  async function (cphNumber) {
    cleanStr = strProcessor(cphNumber)

    const endpoint = `${baseUrl}/${expectedType}/${cleanStr}`
    try {
      response = await axios.get(endpoint)
    } catch (error) {
      response = error.response
    }
  }
)

When(/^the request is processed by the system$/, async function () {
  // Checking the response is return or not
  expect(response).to.not.equal(null)
  expect(response).to.not.equal(undefined)
})

Then(
  /^the API should return the details for the specified CPH number (.+)$/,
  async function (expectedCphNumber) {
    const status = strProcessor(expectedCphNumber)
    expect(response.status).to.equal(responseCodes.ok)

    const resData = response.data.data
    expect(resData).to.have.property(holdingsendpointKeys.TYPE)
    expect(resData).to.have.property(holdingsendpointKeys.ID)
    expect(resData).to.have.property(holdingsendpointKeys.CPHTYPE)

    const cphResponseData = new Cph(response.data.data)
    // Verifying that the API response includes type as 'holdings'
    expect(cphResponseData.getType()).to.equal(expectedType)
    // Verifying that the API response includes id with CPH number
    expect(cphResponseData.getId()).to.equal(cleanStr)
    const expectedCphTypeValidation = expectedCphTypes.filter(
      (expectedType) =>
        expectedType.toUpperCase() ===
        cphResponseData.getCphType().toUpperCase()
    )

    // Verifying that the API response includes only valid 'cphType' values: 'permanent', 'temporary', or 'emergency'
    expect(expectedCphTypeValidation).to.have.length.above(0)
    expect(cphResponseData.getCphType().toUpperCase()).to.equal(status)
  }
)

Then(
  /^endpoint return unsuccessful response code (.+)$/,
  async (statusCode) => {
    const actualResponse = response.data
    expect(response.status.toString()).to.equal(
      statusCode.replace(/['"]+/g, '')
    )
    expect(actualResponse).to.have.property(holdingsendpointKeys.MSG)
    expect(actualResponse).to.have.property(holdingsendpointKeys.CODE)
    expect(actualResponse).to.have.property(holdingsendpointKeys.ERRORS)
    expect(actualResponse.message).to.equal(
      holdingsendpointKeys.HOLDING_NOT_FOUND
    )
    expect(actualResponse.code).to.equal(holdingsendpointKeys.NOT_FOUND)
    expect(actualResponse.errors.length).to.equal(0)
  }
)

Then(
  /^endpoint must return unsuccessful error response (.+)$/,
  async (expectedMessage) => {
    const actualResponse = response.data
    expect(response.status).to.equal(responseCodes.badRequest)
    expect(actualResponse).to.have.property(holdingsendpointKeys.MSG)
    expect(actualResponse).to.have.property(holdingsendpointKeys.CODE)
    expect(actualResponse).to.have.property(holdingsendpointKeys.ERRORS)
    const errorMeesage = actualResponse.errors[0]
    expect(errorMeesage).to.have.property(holdingsendpointKeys.CODE)
    expect(errorMeesage).to.have.property(holdingsendpointKeys.MSG)
    expect(errorMeesage).to.have.property(holdingsendpointKeys.COUNTYID)
    expect(errorMeesage).to.have.property(holdingsendpointKeys.PARISHID)
    expect(errorMeesage).to.have.property(holdingsendpointKeys.HOLDINGSID)
    expect(errorMeesage.code).to.equal(holdingsendpointKeys.VALIDATION_ERROR)
    const cleanedMessage = expectedMessage.replace(/^"|"$/g, '')
    expect(errorMeesage.message).to.equal(cleanedMessage)
    expect(actualResponse.errors.length).to.equal(1)
    const cpharray = cleanStr.split('/')
    expect(errorMeesage.countyId).to.equal(cpharray[0])
    expect(errorMeesage.parishId).to.equal(cpharray[1])
    expect(errorMeesage.holdingsId).to.equal(cpharray[2])
  }
)
