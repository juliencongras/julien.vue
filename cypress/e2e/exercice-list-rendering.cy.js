describe('Test sur le Composant (Page) List rendering', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/corrections/list_rendering')
    });
    it("Affiche le titre de la page", () => {
    cy.get("h2").should("contain.text", "WatchList 🎬 (Films à voir + v-if+v-for) - Mode : Composition");
  });

  it("Ajoute un film sur la watchlist", () => {
    cy.get('input').type("This is a movie");
    cy.get('button').click();
    cy.get('ul').should("contain.text", "This is a movie");
  });

  it("Supprime un film de la watchlist", () => {
    cy.get('input').type("This is a movie");
    cy.get('button').click();
    cy.contains('.badge', "This is a movie").should('exist');
    cy.contains('.badge', "This is a movie").click();
    cy.contains('.badge', "This is a movie").should('not.exist');
  });
});