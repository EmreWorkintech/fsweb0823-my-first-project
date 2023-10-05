/* global cy */

describe("Counter Page Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=counter-page]").click();
  });

  //beforeEach, beforeAll, afterEach, afterAl

  it("should open counter page", () => {
    //Arrange
    //cy.visit("http://localhost:3000");

    //Act
    //cy.get("[data-cy=counter-page]").click();
    //Assert

    cy.url().should("include", "counter");
  });

  describe("Increase Testleri", () => {
    it("should increase the counter by 1", () => {
      //Arrange
      //cy.visit("http://localhost:3000");
      //cy.get("[data-cy=counter-page]").click();

      //Act
      cy.get("[data-cy=increase]").click();

      //Assert
      cy.get("[data-cy=counter-display]").contains("Counter: 1");
    });

    it("should increase the counter by 5", () => {
      //Arrange
      //cy.visit("http://localhost:3000");
      //cy.get("[data-cy=counter-page]").click();

      //Act
      const button = cy.get("[data-cy=increase]");

      /*
      döngü ile yapsak?
      button.click();
      button.click();
      button.click();
      button.click();
      button.click();
      */

      for (let i = 1; i <= 5; i++) {
        button.click();
      }

      //Assert
      cy.get("[data-cy=counter-display]").contains("Counter: 5");
    });
  });

  describe("decrease Testleri", () => {
    it("should show 1 after increase 2 and decrease 1", () => {
      //Arrange
      //cy.visit("http://localhost:3000");
      //cy.get("[data-cy=counter-page]").click();

      //Act
      cy.get("[data-cy=increase]").click();
      cy.get("[data-cy=increase]").click();
      cy.get("[data-cy=decrease]").click();

      //Assert
      cy.get("[data-cy=counter-display]").contains("Counter: 1");
    });
  });
});

describe("Users Page Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=users-page]").click();
  });

  it("should open users page", () => {
    //Arrange
    //cy.visit("http://localhost:3000");

    //Act
    //cy.get("[data-cy=counter-page]").click();
    //Assert

    cy.url().should("include", "users");
  });
});

describe("User Page Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=users-page]").click();
  });

  it("should open first user page", () => {
    //Arrange
    //cy.visit("http://localhost:3000");

    //Act
    //cy.get("[data-cy=counter-page]").click();
    //Assert

    cy.contains("george.bluth@reqres.in").click();
    cy.url().should("include", "users/1");
  });
});

describe("Add User Page Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=add-user-page]").click();
  });
  describe("Hata Testleri", () => {
    it("should get name error", () => {
      //Arrange
      const nameInput = cy.get("[name=first_name]");
      //Act
      nameInput.type("em");
      //Assert
      cy.get("[data-cy=name-error]").contains(
        "Must be at least 3 characters long."
      );
    });

    it("should get name error", () => {
      //Arrange
      const nameInput = cy.get("[name=first_name]");
      //Act
      nameInput.type("em");
      //Assert
      cy.get("button").should("be.disabled");
    });
  });

  describe("Success Testleri", () => {
    beforeEach(() => {
      //Arrange
      const nameInput = cy.get("[name=first_name]");
      const lastNameInput = cy.get("[name=last_name]");
      const radio = cy.get("[name=position]");
      const eposta = cy.get("[name=email]");
      const password = cy.get("[name=password]");
      const checkbox = cy.get("[name=agreement]");
      const select = cy.get("[name=gender]");
      const age = cy.get("[name=age]");
      //Act
      nameInput.type("Emre");
      lastNameInput.type("Şahiner");
      eposta.type("Emre@wit.com");
      password.type("Em1234*****");
      age.type(45);
      radio.check("hr");
      checkbox.check();
      select.select("male");
    });

    it("should set button enabled", () => {
      //Assert
      cy.get("button").should("not.be.disabled");
    });

    it("should send form", () => {
      //act
      cy.get("[data-cy='submit-form-button']").click();

      //assert
      cy.get("[name=first_name]").should("have.value", "");
    });
  });
});

describe("Add User Page Testleri", () => {
  beforeEach(() => {
    cy.visit("https://workintech.com.tr");
  });
  describe("Hata Testleri", () => {
    it.only("should get name error", () => {
      cy.get(
        "#nav > div > div.w-full.flex.justify-between.items-center.px-4.md:px-0 > div:nth-child(1) > a"
      ).click();
    });
  });
});
