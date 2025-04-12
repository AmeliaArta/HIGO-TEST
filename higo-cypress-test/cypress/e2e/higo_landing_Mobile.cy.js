  describe('Menu Navigasi tidak bisa di scroll pada mobile landscape', () => {
    it('Menu navigasi seharusnya bisa di scroll sampai ke menu Hubungi HIGO', () => {
      cy.viewport(740, 360);
      cy.visit('https://higo.id');
  
      cy.get('label[for="header-navigation"]')
        .filter(':visible')
        .first()
        .click({ force: true });
  
      cy.wait(1000);
  
      // Scroll global windownya
      cy.window().scrollTo('bottom', { duration: 1000 });
  
      cy.contains('Hubungi HIGO').should('be.visible');
    });
  });

