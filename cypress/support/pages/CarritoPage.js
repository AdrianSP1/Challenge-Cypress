export class CarritoPage {
    constructor () {
        this.producto1 = '[data-test="add-to-cart-sauce-labs-backpack"]';
        this.producto2 = '[data-test="add-to-cart-sauce-labs-bike-light"]';
        this.carritoIcono = '[data-test="shopping-cart-link"]';
        this.carritoItems = '[data-test="shopping-cart-badge"]';  
        this.remover = '[data-test="remove-sauce-labs-backpack"]';
        this.itemCart= '[data-test="inventory-item-name"]'
    }

    agregarProductosAlCarrito(){
        cy.get(this.producto1).click();
        cy.get(this.carritoItems).should('have.text', '1');
        cy.get(this.producto2).click();
        cy.get(this.carritoItems).should('have.text', '2');
  
    }

    removerProductoDelCarrito(){
        cy.get(this.producto1).click();
        cy.get(this.carritoIcono).click();
        cy.get(this.itemCart).should('have.length', 1);
        cy.get(this.remover).click();
        cy.get(this.itemCart).should('have.length', 1);/// este paso no funciona correctamente se espera que el carrito quede vacio , para que funcione correctamente debe ser 0 es parte del desafio de hacer fallar un test case
    }
}       