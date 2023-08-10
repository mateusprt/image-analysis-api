const { describe, test, expect } = require('@jest/globals')
const requestMock = require('../moks/request.json')
const aws = require('aws-sdk')
aws.config.update({
  region: 'us-east-1'
})
const { main } = require('../../src')

describe('Image analyser test suite', () => {
  test('it should analyse successfully the image returning the results', async() => {
    const expected = {
      statusCode: 200,
      body: "A imagem tem\n99.93% de ser do tipo Abissínio\n99.93% de ser do tipo animal\n99.93% de ser do tipo gato\n99.93% de ser do tipo mamífero\n99.93% de ser do tipo animal de estimação"
    }
    const result = await main(requestMock)

    expect(result).toStrictEqual(expected)
  })

  test('given an empty queryString it should return status code 400', async () => {
    const expected = { statusCode: 400, body: 'an IMG is required!' }
    const result = await main({ queryStringParameters: {} })

    expect(result).toStrictEqual(expected)
  })

  test('given an invalide imageURL it should return 500', async() => {
    const expected = { statusCode: 500, body: 'Internal Server Error' }
    const result = await main({
      queryStringParameters: {
        imageUrl: 'test'
      }
    })

    expect(result).toStrictEqual(expected)
  })
})