class ShopPage {
  constructor() {
    this.products = "li.product";
    this.goToCartBtn = "a.added_to_cart"
    this.procutTitle = "h2.woocommerce-loop-product__title"
    this.addToCartBtn =".ajax_add_to_cart"
  }

  goToCart(productName) {
    cy.get(this.products)
      .contains(productName)
      .scrollIntoView()
      .parent()
      .find(this.goToCartBtn)
      .click();
  }

  addProductToCart(productName) {
    cy.get(this.products).each(($el) => {
      const textProduct = $el.find(this.procutTitle).text();
      if (textProduct === productName) {
        cy.wrap($el).find(this.addToCartBtn).click();
      }
    });
  }
}
export default ShopPage;
