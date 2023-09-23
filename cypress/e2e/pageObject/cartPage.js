class CartPage {
  constructor() {
    this.productNameCell = "td.product-name a";
    this.productRow = "tr.woocommerce-cart-form__cart-item";
    this.productPriceCell ="td.product-price span.woocommerce-Price-amount bdi";
    this.productQuantityCell = "td.product-quantity input.qty";
    this.productSubTotalCell ="td.product-subtotal span.woocommerce-Price-amount bdi";
  }

  validateProductsInCart(productName, price, quantity, subtotal) {
    cy.contains(this.productNameCell, productName)
      .parents(this.productRow)
      .within(($row) => {
        cy.get(this.productPriceCell).invoke("text").should("eq", price);

        cy.get(this.productQuantityCell).invoke("val").should("eq", quantity);

        cy.get(this.productSubTotalCell).invoke("text").should("eq", subtotal);
      });
  }
}

export default CartPage;
