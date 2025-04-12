describe('Pop Up Error Tampil saat menggunakan email yang Valid', () => {
it('Seharusnya Pop Up Invalid Email tidak tampil', () => {
    cy.visit('https://higo.id/digital-reports');
  
    cy.contains('Dapatkan Report').first().click();
  
    // mengisi field
    cy.get('input[name="firstName"]').type('Amelia');
    cy.get('input[name="lastName"]').type('Arta');
    cy.get('input[name="email"]').type('ameliaarta567@gmail.com');
    cy.get('input[name="phone"]').type('0895612220038');
    cy.get('input[name="company"]').type('HIGO');
    cy.get('#jobTitle-input').type('QA Engineer');
    
    //menunggu button Dapatkan Report Enable
    cy.get('button[type="submit"]').should('not.be.disabled').click();
  
    // klik button Dapatkan Report
    cy.contains('DAPATKAN REPORT').click();
  
    // Verifikasi tidak ada error popup
    cy.contains('Invalid Email').should('not.exist');
  });
});

