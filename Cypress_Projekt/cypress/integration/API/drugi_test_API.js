/// <reference types = "cypress" />

describe("Wykonywanie zapytania bezpośrednio do API",()=>{
    beforeEach(function(){
        cy.fixture("example").then(data =>{
            this.daneAPI = data;
        })
    })
    it("Autoryzacja + dodawanie nowego wpisu", ()=>{
        const daneAutoryzacja= {
            "user": {
                "email": "karolina.brylowska@test.com",
                "password": "karolina@"
            }
        }
        cy.request("POST", "https://api.realworld.io/api/users/login", daneAutoryzacja)
        .its("body").then(resp =>{
            const authToken= resp.user.token;
            console.log(authToken);

            const daneArt= {
                "article": {
                    "tagList": [], 
                    "title": "Karolina", 
                    "description": "Jestem mistrzem", 
                    "body": "blablabla"
                }
            }

            cy.request({
                method: "POST",
                url: "https://conduit.productionready.io/api/articles/",
                body: daneArt,
                headers: {
                    'Authorization':"Token "+authToken
                }

            }).then(res =>{
                expect(res.status).to.equal(200);
            })
        })
        
        })
    })
