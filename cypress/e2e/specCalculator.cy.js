describe('template spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Sumar 2+3", () => {
    cy.get("#2").click()
    cy.get('[id="+"]').click()
    cy.get('[id="3"]').click()
    cy.get('[id="="]').click()
    cy.get('[id="text"]').contains("2+3")
    cy.get('[id="solution"]').contains("5")
  });


  it("Restar -22+10", () => {
    cy.get("#-").click()
    cy.get("#2").click()
    cy.get("#2").click()
    cy.get('[id="+"]').click()
    cy.get('[id="1"]').click()
    cy.get('[id="0"]').click()
    cy.get('[id="="]').click()
    cy.get('[id="text"]').contains("-22+10")
    cy.get('[id="solution"]').contains("-12")
  });

  it("Operacion combinada -22+10x3-10/2", () => {
    cy.get("#-").click()
    cy.get("#2").click()
    cy.get("#2").click()
    cy.get('[id="+"]').click()
    cy.get('[id="1"]').click()
    cy.get('[id="0"]').click()
    cy.get("#x").click()
    cy.get("#3").click()
    cy.get("#-").click()
    cy.get("#1").click()
    cy.get("#0").click()
    cy.get('[id="/"]').click()
    cy.get("#2").click()
    cy.get('[id="="]').click()
    cy.get('[id="text"]').contains("-22+10x3-10/2")
    cy.get('[id="solution"]').contains("3")
  });

  it("Decimales 7/4", () => {
    cy.get("#7").click()
    cy.get('[id="/"]').click()
    cy.get("#4").click()
    
    cy.get('[id="="]').click()
    cy.get('[id="text"]').contains("7/4")
    cy.get('[id="solution"]').contains("1.75")
    
  });

})