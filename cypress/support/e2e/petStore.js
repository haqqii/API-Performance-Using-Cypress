describe('Create User - POST', () => {
    it('Create User', () => {
        let body = {
            "id": 0,
            "username": Cypress.env('username'),
            "firstName": "hhe",
            "lastName": "hoo",
            "email": "hehe123@gmail.com",
            "password": Cypress.env('password'),
            "phone": "12134",
            "userStatus": 0
        }
        console.log(body)
        cy.request('POST', '/user', body).as('createUser');
        cy.get('@createUser').then(user => {
            expect(user.status).to.eq(200);
        });
    })
    const loginUser = {
        method: 'GET',
        url: '/user/login',
        qs: {
            username: Cypress.env('username'),
            password: Cypress.env('password')
        }
    }
    it('Login registered User', () => {
        cy.request(loginUser).as('loginUser');
        cy.get('@loginUser').then(login => {
            expect(login.status).to.equal(200);
        })
    })
})