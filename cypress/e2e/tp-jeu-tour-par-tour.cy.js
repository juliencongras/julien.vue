describe('Test sur le Composant (Page) List rendering', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/tp/jeu_tour_par_tour')
    });
    it("Affiche le titre de la page", () => {
    cy.get("h1").should("contain.text", "TP : Jeu tour par tour");
  });

  it("Clique sur le bouton attaque", () => {
    cy.contains('.btn', "Attaque").click();
    cy.contains('ul', "Player Ataque").should('exist');
  });

  it("Clique sur le bouton attaque spéciale", () => {
    cy.contains('.btn', "Attaque spéciale").click();
    cy.contains('ul', "Player lance une Attaque Spéciale !").should('exist');
  });

  it("Clique sur le bouton soin", () => {
    cy.contains('.btn', "Soin").click();
    cy.contains('ul', "Player se soigne").should('exist');
  });

  it("Clique sur le bouton abandonner", () => {
    cy.contains('.btn', "Abandonner").click();
    cy.get("h2").should("contain.text", "PERDU");
  });

});