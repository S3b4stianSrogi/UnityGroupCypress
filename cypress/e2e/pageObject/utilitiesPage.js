class UtilitiesPage {
  constructor() {
    this.navBar = ".wp-block-page-list";
    this.activeTabTitle = "h1";
  }

  clickOnCategory(categoryName) {
    cy.get(this.navBar).contains(categoryName).should("be.visible").click();
  }

  checkTabTitle(title) {
    cy.get("h1").contains(title).should("be.visible");
  }
}
export default UtilitiesPage;
