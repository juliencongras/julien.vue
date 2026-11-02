describe('Test sur le Composant (Page) Dynamic Styling', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/corrections/dynamic_styling')
    });
    it("Affiche le titre de la page", () => {
    cy.get("h3").should("contain.text", "Dynamic Styling (Class)");
  });

  it("Affiche le nom sur les cartes", () => {
    cy.get(".card").eq(0).should("contain.text", "Carte 1 via style");
    cy.get(".card").eq(1).should("contain.text", "Carte 2 via style");
    cy.get(".card").eq(2).should("contain.text", "Carte 3 via class");
    cy.get(".card").eq(3).should("contain.text", "Carte 4 via class");
  });

  it("Affiche les couleurs par défautdéfaut sur les cartes 1 et 2", () => {
    cy.get(".card").eq(0).should("have.css", "background-color", "rgb(0, 255, 255)"); //Cyan
    cy.get(".card").eq(1).should("have.css", "background-color", "rgb(238, 130, 238)"); // Violet
  });

  it("N'applique pas les classes CSS class1 et class2 sur les cartes 3 et 4", () => {
    cy.get(".card").eq(2).should("not.have.class", "class1"); // Class1
    cy.get(".card").eq(3).should("not.have.class", "class2"); // Class2
  });

  it("bascule la couleur de la Carte 1 au clic (aqua <-> rouge)", () => {
    const card1 = cy.contains("Carte 1 via style").closest(".card");
    // Clic -> passe au rouge (rgb(255, 0, 0))
    card1.click().should("have.css", "background-color", "rgb(255, 0, 0)"); // Rouge
    // Second clic -> redevient aqua
    card1.click().should("have.css", "background-color", "rgb(0, 255, 255)");//Aqua
  });

  it("bascule la couleur de la Carte 2 au clic (violet <-> vert)", () => {
    const card2 = cy.contains("Carte 2 via style").closest(".card");
    // Clic -> passe au vert (rgb(0, 128, 0))
    card2.click().should("have.css", "background-color", "rgb(0, 128, 0)"); // Vert
    // Second clic -> redevient violet
    card2.click().should("have.css", "background-color", "rgb(238, 130, 238)");// Violet
  });

  it("ajoute et retire la classe .class1 sur la Carte 3", () => {
    const card3 = cy.contains("Carte 3 via class").closest(".card");
    // Clic -> classe ajoutée + vérification du style appliqué par la classe
    card3.click();
    card3.should("have.class", "class1");
    card3.should("have.css", "font-style", "italic");
    card3.should("have.css", "background-color", "rgb(255, 165, 0)"); // Orange
    // Second clic -> classe retirée
    card3.click();
    card3.should("not.have.class", "class1");
  });

  it("ajoute et retire la classe .class2 sur la Carte 4", () => {
    const card4 = cy.contains("Carte 4 via class").closest(".card");
    // Clic -> classe ajoutée
    card4.click();
    card4.should("have.class", "class2");
    card4.should("have.css", "background-color", "rgb(127, 255, 0)"); // chartreuse
    // Second clic -> classe retirée
    card4.click();
    card4.should("not.have.class", "class2");
  });

    it('doit verifier que le status de la réponse de l API est 200', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon') // Remplacez par l'URL de votre API
            .its('status')
            .should('equal', 200);
    });

        it('Devrait mesurer le temps de réponse de l API (inf à 2000ms)', () => {
        const url = 'https://pokeapi.co/api/v2/pokemon';
        const startTime = performance.now(); // Démarre le chrono / Départ du test

        cy.request('GET', url).then((response) => {
            const endTime = performance.now(); // Arrête le chronom
            const duration = endTime - startTime; // Calcule la durée
            expect(duration).to.be.lessThan(2000); // Vérifie que le temps de réponse est inférieur à 2000 ms
        });
    });

    it("Devrait vérifier BULBASAUR en premier", () => {
        cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon').as('getPokemon');
        // cy.wait('@getPokemon');
        cy.get('#pokeListe p').eq(0).should('have.text', 'bulbasaur');
    });

    it('Devrait vérifier que la réponse contient les champs attendus name et url', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon').then((response) => {
            expect(response.body).to.have.property('results'); // Vérifie que 'results' est présent
            expect(response.body.results[0]).to.have.all.keys('name', 'url'); // Vérifie les clés de ce premier Pokémon
        });
    });
});