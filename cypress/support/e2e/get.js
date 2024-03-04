describe('Petstore Get Inventory Testing', () => {
    it('Get store Inventory - GET', () => {
        cy.request('/store/inventory').as('getInventory');
        cy.get('@getInventory').then(inventory => {
            expect(inventory.status).to.equal(200);
        })
    })
})