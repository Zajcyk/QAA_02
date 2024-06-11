describe('httpbin.org API Tests', () => {
  // Test 1: GET request
  it('GET request to /get', () => {
    cy.request('GET', 'https://httpbin.org/get')
      .its('status')
      .should('eq', 200);
  });

  // Test 2: POST request
  it('POST request to /post', () => {
    cy.request('POST', 'https://httpbin.org/post', { key: 'value' })
      .its('body.json')
      .should('deep.equal', { key: 'value' });
  });

  // Test 3: Sending standard headers
  it('Sending User-Agent header', () => {
    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/headers',
      headers: {
        'User-Agent': 'CypressTestAgent'
      }
    })
      .its('body.headers.User-Agent')
      .should('eq', 'CypressTestAgent');
  });

  // Test 4: Sending custom headers
  it('Sending custom header', () => {
    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/headers',
      headers: {
        'X-Custom-Header': 'CustomValue'
      }
    })
      .its('body.headers["X-Custom-Header"]')
      .should('eq', 'CustomValue');
  });

  // Test 5: Sending query parameters
  it('Sending query parameters', () => {
    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/get',
      qs: {
        param1: 'value1',
        param2: 'value2'
      }
    })
      .its('body.args')
      .should('deep.equal', {
        param1: 'value1',
        param2: 'value2'
      });
  });

  // Test 6: Sending random query parameters
  it('Sending random query parameters', () => {
    const randomValue = Math.random().toString(36).substring(7);
    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/get',
      qs: {
        random: randomValue
      }
    })
      .its('body.args.random')
      .should('eq', randomValue);
  });

  // Test 7: Checking response body
  it('Checking response body', () => {
    cy.request('GET', 'https://httpbin.org/get')
      .its('body.url')
      .should('eq', 'https://httpbin.org/get');
  });

  // Test 8: check 404 response
  const request = {
    url: 'https://httpbin.org/non-existing-url',
    failOnStatusCode: false
  };

  it('Response code should be 404', () => {
    cy.request(request).then(response => {
      const status = response.status;

      assert.equal(404, status);
    })
  }) 

    // Test 9: check 200 response
it('response code should be 200', () => {
    cy.request('https://httpbin.org').then(response => {
      const status = response.status;

      assert.equal(200, status);
    })
  })

  // Test 10: check 405 response
  const request2 = {
    method: 'GET',
    url: 'https://httpbin.org/post',
    failOnStatusCode: false
  };

  it('response code should be 405', () => {
    cy.request(request2).then(response => {
      assert.equal(405, response.status);
    })
  })
  

})