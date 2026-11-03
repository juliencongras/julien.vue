describe('Test sur le Composant (Page) List rendering', () => {
    beforeEach(() => {
        cy.visit('https://library.mithridatem.fr/')
    });

    before(() => {
        cy.fixture("example.json").then(function (testData) {
            this.testData = testData.user;
            cy.log(testData);
        })
    })
    
    it("Users", function () {
        this.testData.forEach((user) => {
            cy.log(user.name)
            cy.log(user.prenom)
            cy.log(user.mail)
            cy.log(user.password)
        })
    })

    it("Inscription d'un utilisateur", () => {
        cy.contains('a', "Inscription").click();
        cy.get('form').within(($form) => {
            cy.get('input[name="firstname"]').type(testData[0].prenom)
            cy.get('input[name="lastname"]').type(testData[0].name)
            cy.get('input[name="email"]').type(testData[0].mail)
            cy.get('input[name="password"]').type(testData[0].password)
            cy.get('input[name="confirm-password"]').type(testData[0].password)
            cy.contains('button', "Inscription").click();
        })
    });

    it("Connexion d'un utilisateur", () => {
        cy.contains('a', "Connexion").click();
        cy.get('form').within(($form) => {
            cy.get('input[name="email"]').type(testData[0].mail)
            cy.get('input[name="password"]').type(testData[0].password)
            cy.contains('button', "Se connecter").click();
        })
    });

    it("Mise à jour du profil utilisateur", () => {
        
    });

    it("Ajouter une catégorie", () => {
        
    });
});