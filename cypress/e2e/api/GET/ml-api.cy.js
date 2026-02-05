    describe('ML API Tests', () =>  {
        it('Validar api departments ml', () => {
            cy.request({
                method: 'GET',
                url: 'https://www.mercadolibre.com.ar/menu/departments'}).then((response) => {
                    expect(response.status).to.eq(200);
                    cy.log(JSON.stringify(response.body));
                    expect(response.body).to.have.property('departments');
                    expect(response.body.departments).to.be.an('array');
                });
        });
    });