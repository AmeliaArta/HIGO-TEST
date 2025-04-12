describe('Language Switcher Test', () => { //Melakukan pengecekan terhadap Wording
    it('should switch to Bahasa Indonesia', () => {
      cy.visit('https://higo.id');
  
      // Klik tombol ID/EN
      //cy.contains('span', 'ID').click();
      // Klik Bahasa Indonesia dari dropdown
      //cy.contains('span', 'Bahasa Indonesia').click();

          // Klik pemicu dropdown dulu (label dengan span "ID" yang visible)
          cy.get('label[for="navigation-language"]').first().click();
      
          // Tunggu sampai opsi dropdown muncul
          cy.contains('span', 'Bahasa Indonesia').should('be.visible').click();
  
      // Verifikasi kalau Bahasa Indonesia aktif
      cy.contains('Hubungi HIGO').should('be.visible');
      cy.contains('Layanan HIGO').should('be.visible');
      cy.contains('Tentang HIGO').should('be.visible');
      //cy.contains('Blog').should('not.be.visible');
      //cy.contains('Digital Reports').should('not.be.visible');
    });
  });