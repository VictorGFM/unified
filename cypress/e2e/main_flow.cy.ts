describe('Main Flow', () => {
  it('runs the main flow', () => {
    cy.visit('/')
    cy.get('[data-cy="header-button-notifications"]').click()
    cy.get('[data-cy="notificaiton-card-0"]').click()

    cy.get('[data-cy="social-media-button-facebook"]').click()
    cy.get('[data-cy="social-media-button-instagram"]').click()
    cy.get('[data-cy="social-media-button-unified"]').click()

    cy.get('[data-cy="header-button-messages"]').click()
    cy.get('[data-cy="message-search-bar"]').type('au au au')
    cy.get('[data-cy="contact-card-1"]').click()
    cy.get('[data-cy="chat-social-media-button-twitter"]').click()
    cy.get('[data-cy="chat-social-media-button-facebook"]').click()
    cy.get('[data-cy="send-message-bar"]').type(':D').type('{enter}')
    cy.get('[data-cy="message-search-bar"]').clear()

    cy.get('[data-cy="header-button-contacts"]').click()
    cy.get('[data-cy="contact-search-bar"]').type('Alfredo')

    cy.get('[data-cy="header-button-groups"]').click()
    cy.get('[data-cy="groups-search-bar"]').type('Grupo dos Canários')

    cy.get('[data-cy="header-button-home"]').click()
    cy.get('[data-cy="filter-button"]').click()
    cy.get('[data-cy="home-search-filter"]').type('post')
    cy.get('[data-cy="filter-option-posts-1"]').click()
    cy.get('[data-cy="home-search-filter"]').clear()
    cy.get('[data-cy="filter-option-groups-0"]').click()
    cy.get('[data-cy="filter-button"]').click()
  })
})
