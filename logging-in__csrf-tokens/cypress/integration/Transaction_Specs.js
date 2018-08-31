/// <reference types="Cypress" />
const str1 = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
const randomnumbers = () => Math.floor(Math.random() * 10000000);
const lrandomnumbers = () => Math.floor(Math.random() * 10000);	
const mrandomnumbers = () => Math.floor(Math.random() * 1000);
const srandomnumbers = () => Math.floor(Math.random() * 100);
let tname;
let tvalue;
let tltv;
let tproperties;
let tarea;
let mvalue;
let toccupancy;
let tgri;
let tyield;
let tconnections;
let tcestrev;
let ttestrev;
let compn;
let compalias;
let compph;
let compwebsite;
	describe('My First Test', function () {
		
		
						
	Cypress.Commands.add('loginByCSRF', (csrfToken) => {
	cy.request({
    method: 'POST',
    url: '/login', // baseUrl is prepended to url
    form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
    body: {
      emailid: 'anmol.sahi@oxanepartners.com',
      password: 'Oxane@123',
	  _csrf: csrfToken // insert this as part of form body
    }
	})
  })
  beforeEach(function(){
    cy.viewport(1366, 768)
  })
    it('Post Login, Transaction Creation: Create New Transaction', function(){		
		cy.request('/')
      .its('body')
      .then((body) => {
        // we can use Cypress.$ to parse the string body
        // thus enabling us to query into it easily
        const $html = Cypress.$(body)
        const csrf  = $html.find("input[name=_csrf]").val()

        cy.loginByCSRF(csrf)
          .then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body).to.include("Dashboard")
		cy.visit('/fund#!/homescreen')
			
			//Xenon Landing Page
			cy.get('.pr5')
			.should('be.visible').contains('Anmol Sahi')
			cy.get('[ui-sref="blotter"] > :nth-child(1) > .circle')
			.should('be.visible').click()
			//Add Transaction Page
			tname = `demo${randomnumbers()}`
			tvalue = `${randomnumbers()}`
			tltv = `${srandomnumbers()}`
			tproperties = `${srandomnumbers()}`
			tarea = `${lrandomnumbers()}`
			mvalue = `${randomnumbers()}`
			toccupancy = `${srandomnumbers()}`
			tgri = `${srandomnumbers()}`
			tyield = `${srandomnumbers()}/1000000`
			tconnections = `${srandomnumbers()}`
			tcestrev = `${lrandomnumbers()}`
			ttestrev = `${lrandomnumbers()}`
			compn = `Finance${randomnumbers()}`
			compalias = `FF${srandomnumbers()}`
			compph = `${randomnumbers()}`
			compwebsite = `www.${str1()}.com`
			cy.get('#addTransactionListDiv').click()
			//cy.get('.border > .noStyle > :nth-child(1)').click()
			//Add Deal Name
			cy.get('[ng-if="vm.showInfo"] > :nth-child(1) > :nth-child(2) > :nth-child(2) > .ng-pristine')
			.should('be.visible').type(tname)
			
			//Add Internal Strategy
			cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2) > .ng-pristine > .wid-100 > .ui-select-dropdown').contains('EU Mid-Mkt').click()
			cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2) > .ng-untouched > .wid-100 > .ui-select-dropdown > .search-container > .ui-select-search').type('EU Mid-Mkt')
			cy.get('.ui-select-highlight').click()
			//Add Mandates, here we are adding two Different Mandates
			//Adding First Mandate
			cy.get(':nth-child(4) > :nth-child(2) > .ng-pristine > .relative > .wid-100 > .ml-auto').click()
			cy.get('.absolute').contains('Transaction Management').click()
			cy.get('[ng-if="vm.showInfo"]').click()
			cy.get(':nth-child(4) > :nth-child(2) > .ng-pristine > .relative > .wid-100 > .ml-auto').click()
			cy.get('.absolute > :nth-child(1) > .wid-100').type('Asset Management')
			cy.get('.scroll-y > .wid-100 > .mr10').click()
			cy.get('[ng-if="vm.showInfo"]').click()
			//Adding Second Mandate
			cy.get(':nth-child(4) > :nth-child(2) > .ng-pristine > .relative > .wid-100 > .ml-auto').click()
			cy.get('.absolute').contains('Acquisition Management').click()
			cy.get('[ng-if="vm.showInfo"]').click()
			cy.get(':nth-child(4) > :nth-child(2) > .ng-pristine > .relative > .wid-100 > .ml-auto').click()
			cy.get('.absolute > :nth-child(1) > .wid-100').type('Financial Management')
			cy.get('.scroll-y > .wid-100 > .mr10').click()
			cy.get('[ng-if="vm.showInfo"]').click()
			//Add Clients, here we are adding two different clients
			//Adding First Client Name
			cy.get(':nth-child(5) > :nth-child(2) > .ng-pristine > .relative > .wid-100 > .ml-auto').click()
			cy.get('.absolute').contains('ABN Amro Group NV').click()
			cy.get('[ng-if="vm.showInfo"]').click()
			cy.get(':nth-child(5) > :nth-child(2) > .ng-pristine > .relative > .wid-100 > .ml-auto').click()
			cy.get('.absolute > :nth-child(1) > .wid-100').type('Augusta Ventures')
			cy.get('.scroll-y > :nth-child(1) > .mr10').click()
			cy.get('[ng-if="vm.showInfo"]').click()
			//Adding Second Client Name
			cy.get(':nth-child(5) > :nth-child(2) > .ng-pristine > .relative > .wid-100 > .ml-auto').click()
			cy.get('.absolute').contains('AGRO Invest').click()
			cy.get('[ng-if="vm.showInfo"]').click()
			cy.get(':nth-child(5) > :nth-child(2) > .ng-pristine > .relative > .wid-100 > .ml-auto').click()
			cy.get('.absolute > :nth-child(1) > .wid-100').type('Pluto finace')
			cy.get('.scroll-y > :nth-child(1) > .mr10').click()
			cy.get('[ng-if="vm.showInfo"]').click()
			//Adding Entity
			cy.get(':nth-child(1) > :nth-child(6) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(6) > :nth-child(2) > .ng-invalid > .wid-100 > .ui-select-dropdown').contains('CCL').click()
			cy.get(':nth-child(1) > :nth-child(6) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(6) > :nth-child(2) > .ng-valid-required > .wid-100 > .ui-select-dropdown > .search-container > .ui-select-search').type('CCL')
			cy.get('#ui-select-choices-row-1-0 > .select2-result-label').click()
			//Adding Fund
			cy.get(':nth-child(1) > :nth-child(7) > :nth-child(2) > .ng-invalid > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(1) > :nth-child(7) > :nth-child(2) > .ng-invalid > .wid-100 > .ui-select-dropdown > .ui-select-choices').contains('UKMMKT').click()
			cy.get(':nth-child(7) > :nth-child(2) > .ng-valid-required > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(7) > :nth-child(2) > .ng-valid-required > .wid-100 > .ui-select-dropdown > .search-container > .ui-select-search').type('UKMMKT')
			cy.get('.select2-result-label > div').click()
			//Adding Deal Status
			cy.get(':nth-child(8) > :nth-child(2) > .ng-valid-required > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(8) > :nth-child(2) > .ng-valid-required > .wid-100 > .ui-select-dropdown').contains('Sold').click()
			cy.get(':nth-child(8) > :nth-child(2) > .ng-valid-required > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(1) > :nth-child(8) > :nth-child(2) > .ng-untouched > .wid-100 > .ui-select-dropdown > .search-container > .ui-select-search').type('Active')
			cy.get('.select2-result-label > div').click()
			//Adding Reason for Status
			cy.get(':nth-child(1) > :nth-child(9) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(1) > :nth-child(9) > :nth-child(2) > .ng-untouched > .wid-100 > .ui-select-dropdown > .ui-select-choices').contains('Special Servicing').click()
			cy.get(':nth-child(1) > :nth-child(9) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(1) > :nth-child(9) > :nth-child(2) > .ng-untouched > .wid-100 > .ui-select-dropdown > .search-container > .ui-select-search').type('Management')
			cy.get('#ui-select-choices-row-4-0 > .select2-result-label > div').click()
			//Adding Deal Owner
			cy.get(':nth-child(10) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(10) > :nth-child(2) > .ng-untouched > .wid-100 > .ui-select-dropdown').contains('Anmol Sahi').click()
			cy.get(':nth-child(10) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(10) > :nth-child(2) > .ng-untouched > .wid-100 > .ui-select-dropdown > .search-container > .ui-select-search').type('Anmol Sahi')
			cy.get('.select2-result-label > div').click()
			//Adding Seller from the Dropdown
			cy.get(':nth-child(11) > .input-group > select-box.ng-pristine > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(11) > .input-group > .ng-untouched > .wid-100 > .ui-select-dropdown').contains('Augusta Ventures').click()
			cy.get(':nth-child(11) > .input-group > select-box.ng-pristine > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(11) > .input-group > select-box.ng-pristine > .wid-100 > .ui-select-dropdown > .search-container > .ui-select-search').type('AGRO Invest')
			cy.get('.select2-result-label > div').click()
			cy.get(':nth-child(11) > .input-group > .vCenter').click()
			cy.get('.input-form > :nth-child(1) > :nth-child(2) > .ng-pristine').type(compn)
			cy.get('.ng-invalid.ng-dirty > .input-form > :nth-child(2) > :nth-child(2) > .ng-pristine').type(compalias)
			cy.get(':nth-child(3) > :nth-child(2) > .fr > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.select2-container-active > .ui-select-dropdown').contains('Broker').click()
			cy.get('.fr > .relative > .wid-100 > .ellipsis').click()
			cy.get('.ng-invalid.ng-dirty > .input-form > :nth-child(4)').contains('Broker Sub 1').click()
			cy.get('.absolute > :nth-child(1) > .fr').click()
			cy.get('.ng-invalid.ng-valid-maxlength > .input-form > :nth-child(5) > :nth-child(2) > .ng-pristine').type(compph)
			cy.get('.ng-invalid.ng-valid-maxlength > .input-form > :nth-child(6) > :nth-child(2) > .ng-pristine').type(compwebsite)
			cy.get('.ng-invalid.ng-valid-maxlength > .input-form > :nth-child(7) > :nth-child(2) > .ng-invalid > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.select2-container-active > .ui-select-dropdown').contains('Tanmaya Sanghvi').click()
			cy.contains('.btn', 'Save').click()
			cy.get(':nth-child(11) > .input-group > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(11) > .input-group > .ng-untouched > .wid-100 > .ui-select-dropdown').contains(compn).click()
			//Adding Sponsor
			cy.get(':nth-child(12) > .input-group > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(12) > .input-group > .ng-untouched > .wid-100 > .ui-select-dropdown').contains('AGRO Invest').click()
			//Adding Borrower
			cy.get(':nth-child(1) > :nth-child(13) > :nth-child(2) > .ng-pristine').type('Augusta Ventures')
			//cy.get(':nth-child(13) > .input-group > select-box.ng-pristine > .wid-100 > .ui-select-dropdown').contains('Augusta Ventures').click()
			//Adding Borrower Contact
			cy.get(':nth-child(1) > :nth-child(14) > :nth-child(2) > .ng-pristine').type('Kajal Kumari')
			//cy.get(':nth-child(14) > .input-group > select-box.ng-pristine > .wid-100 > .select2-choice > .select2-arrow > b').click()
			//cy.get(':nth-child(14) > .input-group > select-box.ng-pristine > .wid-100 > .ui-select-dropdown').contains('Gaurav Agarwal').click()
			//Adding Exclusivity
			cy.get(':nth-child(15) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice').contains('No')
			cy.get(':nth-child(15) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(15) > :nth-child(2) > .ng-untouched > .wid-100 > .ui-select-dropdown').contains('Yes').click()
			//Adding Transaction Size
			cy.get('.fl > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.fl > .wid-100 > .ui-select-dropdown').contains('EUR').click()
			cy.get('[style="margin: 0 5%;"] > :nth-child(2) > :nth-child(2) > .fr').type(tvalue)
			//Adding Loan Type
			cy.get('[style="margin: 0 5%;"] > :nth-child(3) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('[style="margin: 0 5%;"] > :nth-child(3) > :nth-child(2) > select-box.wid-100 > .wid-100 > .ui-select-dropdown').contains('Senior').click()
			//Adding LTV
			cy.get('[style="margin: 0 5%;"] > :nth-child(4) > :nth-child(2) > .ng-pristine').type(tltv)
			//Adding Country
			cy.get(':nth-child(5) > :nth-child(2) > .ng-valid-required > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(5) > :nth-child(2) > .ng-valid-required > .wid-100 > .ui-select-dropdown').contains('Belgium').click()
			//Adding #Properties
			cy.get('[style="margin: 0 5%;"] > :nth-child(6) > :nth-child(2) > .ng-pristine').type(tproperties)
			//Adding Property Type
			cy.get('.ng-invalid > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.ng-invalid > .wid-100 > .ui-select-dropdown').contains('Residential').click()
			//Adding Total Area
			cy.get(':nth-child(8) > :nth-child(2) > .fl').type(tarea)
			cy.get('.fr > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.fr > .wid-100 > .ui-select-dropdown > .ui-select-choices').contains('sqft').click()
			//Adding Market Value
			cy.get('[style="margin: 0 5%;"] > :nth-child(9) > :nth-child(2) > .ng-pristine').type(mvalue)
			//Adding Occupancy
			cy.get('[style="margin: 0 5%;"] > :nth-child(10) > :nth-child(2) > .ng-pristine').type(toccupancy)
			//Adding GRI
			cy.get('[style="margin: 0 5%;"] > :nth-child(11) > :nth-child(2) > .ng-pristine').type(tgri)
			//Adding Net Yield
			cy.get('[style="margin: 0 5%;"] > :nth-child(12) > :nth-child(2) > .ng-pristine').type(tyield)
			//Adding # Connections
			cy.get('[style="margin: 0 5%;"] > :nth-child(13) > :nth-child(2) > .ng-pristine').type(tconnections)
			//Adding Closing Date
			cy.get('.vCenter.flex > .flex > .vCenter > .icon-calendar').click()
			cy.get(':nth-child(5) > :nth-child(3) > .ui-state-default').click()
			//Adding Date Listed
			//cy.get('#dp1527841406966').type('31-May-2018')
			//Adding Origination Source
			cy.get('.input-form.fr > :nth-child(2) > :nth-child(2) > .ng-valid-required > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.input-form.fr > :nth-child(2) > :nth-child(2) > .ng-valid-required > .wid-100 > .ui-select-dropdown').contains('Broker').click()
			//Adding Source Name
			cy.get(':nth-child(3) > .input-group > select-box.ng-pristine > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(3) > .input-group > select-box.ng-pristine > .wid-100 > .ui-select-dropdown').contains('AGRO Invest').click()
			//Adding Primary Contact
			cy.get(':nth-child(4) > .input-group > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(4) > .input-group > .ng-untouched > .wid-100 > .ui-select-dropdown').contains('Eddie mikelson').click()
			//Adding Strategy Head
			cy.get('.input-form.fr > :nth-child(5) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.input-form.fr > :nth-child(5) > :nth-child(2) > .ng-untouched > .wid-100 > .ui-select-dropdown').contains('Anmol Sahi').click()
			//Adding Office
			cy.get('.input-form.fr > :nth-child(6) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.input-form.fr > :nth-child(6) > :nth-child(2) > select-box.wid-100 > .wid-100 > .ui-select-dropdown').contains('Lisbon').click()
			//Adding NDA signed information
			cy.get('.input-form.fr > :nth-child(9) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.input-form.fr > :nth-child(9) > :nth-child(2) > select-box.wid-100 > .wid-100 > .ui-select-dropdown').contains('Yes').click()
			//Adding Origination Fees
			cy.get(':nth-child(11) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(11) > :nth-child(2) > select-box.wid-100 > .wid-100 > .ui-select-dropdown').contains('TBD').click()
			//Adding Advisory Fee
			cy.get(':nth-child(12) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(12) > :nth-child(2) > select-box.wid-100 > .wid-100 > .ui-select-dropdown').contains('No').click()
			//Adding Management Fee
			cy.get(':nth-child(13) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(13) > :nth-child(2) > select-box.wid-100 > .wid-100 > .ui-select-dropdown').contains('TBD').click()
			//Adding Success Fee
			cy.get(':nth-child(14) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(14) > :nth-child(2) > select-box.wid-100 > .wid-100 > .ui-select-dropdown').contains('Yes').click()
			//Adding Current EST. Revenue
			cy.get('.input-form.fr > :nth-child(15) > :nth-child(2) > .ng-pristine').type(tcestrev)
			//Adding Total Est. Revenue
			cy.get(':nth-child(16) > :nth-child(2) > .ng-pristine').type(ttestrev)
			//Adding Deal Description
			cy.get('.mb10 > .ng-pristine').type('Portoflio of residential properties originally developed as social housing and acquired by Apollo Leases are now close to their end and the properties cna be sold or let at market levels Apollo interested in disposing this portoflio the strategy would be either letting to sell or selling individual units Pending reception of detailed information')
			//Saving the Transaction
			cy.contains('.btn', 'Save').click()
			cy.wait(2000)
			//Searching the Saved Transaction on the Blotter Screen
			cy.get('.fr.mr10 > .flex > .flex-1')
				  .should('be.visible').type(tname)
			  cy.get('.clickable').click()
			  cy.wait(2000)
			  //Setting up Transaction 
			  cy.get(':nth-child(3) > .wid-100 > .icon-downArrow').click()
			  cy.get(':nth-child(3) > .noStyle > .m0 > .wid-100').click()
			  cy.contains('.nav_three_link', 'Manage Permissions').click()
			  cy.get('.mt5').click()
			  cy.get('.right > .btn').click()
			  cy.get('.main-menu > :nth-child(1) > .wid-100').click()
			  //Navigation to Pipeline Module
			  cy.visit('fund#!/pipeline/report')
			  cy.wait(5000)
			  cy.get('.mr10 > .flex > .flex-1')
				  .should('be.visible').type(tname)
			  cy.wait(2000)
			  cy.get('.clickable').click()
			  cy.get('.btn').click()
			  cy.get('.flex > .icon-menu').click()
			 //Saving Transaction Again 
			  cy.contains('.btn', 'Save').click()
			  cy.wait(2000)
			})
		})
	})
})