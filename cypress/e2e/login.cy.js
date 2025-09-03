describe("Tela de login de teste (Kaique Covo)", function () {
  beforeEach(function () {
    cy.visit("https://kaiquecovo.github.io/pagina-para-teste-e2e")
  })

  it("Deve fazer login com sucesso", function () {
    cy.get("#username").type("admin")
    cy.get("#password").type("1234")
    cy.get("button").click()

    cy.url().should("include", "sucesso.html")
    cy.contains("Você logou com sucesso").should("be.visible")
  })

  it("Deve falhar o login", function () {
    cy.get("#username").type("usuario_errado")
    cy.get("#password").type("senha_errada")
    cy.get("button").click()

    cy.get("#errorMessage").should("contain", "Usuário ou senha incorretos")
  })
})

