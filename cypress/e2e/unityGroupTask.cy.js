import ShopPage from "./pageObject/shopPage";
import UtilitiesPage from "./pageObject/utilitiesPage";
import CartPage from "./pageObject/cartPage";

describe("Add Product to Cart", () => {
  const url = Cypress.env("url");
  const shopPage = new ShopPage();
  const utilitiesPage = new UtilitiesPage();
  const cartPage = new CartPage();
  before(() => {
    cy.visit(url);
    utilitiesPage.checkTabTitle("Homepage");
  });

  it("Add 1 product to cart and validate", () => {
    utilitiesPage.clickOnCategory("Sklep");
    utilitiesPage.checkTabTitle("Sklep");
    shopPage.addProductToCart("Test Product 2");
    shopPage.goToCart("Test Product 2");
    utilitiesPage.checkTabTitle("Koszyk");
    cartPage.validateProductsInCart("Test Product 2", "$10.00", "1", "$10.00");
  });
});
