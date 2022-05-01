/// <reference types="cypress-xpath" />
/// <reference path="..\..\node_modules\cypress-xpath\src\index.d.ts" />

describe('cypress-xpath', () => {
    context('Test Cases', ()=>{
    beforeEach(() =>{
        cy.visit('https://skillsmatch.mdx.ac.uk/en/')
        cy.xpath("//input[@id='username']").type('Test Automation')
        cy.xpath("//input[@id='password']").type('najah285@edu')
        cy.xpath("//input[@value='Login']").click()
        })

    it('Searching',()=>{
        cy.xpath("//a[normalize-space()='Search']").click()
        cy.xpath("//span[@role='textbox']").type('')
        cy.xpath("//button[normalize-space()='Search']").click()

      
    });
})
})