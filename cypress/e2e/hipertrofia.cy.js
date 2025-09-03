describe("Tela de login do fórum Hipertrofia", function () {
  beforeEach(function () {
    cy.visit("https://www.hipertrofia.org/forum")
  })

  it("Deve fazer login com sucesso", function () {
    // Clica no botão 'Entrar' para abrir o formulário
    cy.contains("Entrar").first().click()

    // Aguarda os campos aparecerem
    cy.get('input[name="auth"]').should("be.visible").type("marcela-barreira@tuamaeaquelaursa.com")
    cy.get('input[name="password"]').should("be.visible").type("~9E;E9=+U;$g_r3")

    // Clica no botão de login específico
    cy.get('button[name="_processLogin"][value="usernamepassword"]').should("be.visible").click()

    cy.url().should("include", "?_fromLogin=1")

  })
})
