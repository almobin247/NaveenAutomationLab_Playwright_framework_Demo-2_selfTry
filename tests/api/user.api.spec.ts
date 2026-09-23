import { ApiHelper } from '../../src/api/apiHelper';
import { test, expect } from '../../src/fixtures/apiFixtures';


const TOKEN = process.env.API_TOKEN;

let AUTH_HEADER = {
    Authorization: `Bearer ${TOKEN}`
};

let userID: number;


test.describe.serial('running e2e do rest curd apis test', ()=>{

    //GET Test:
    test('GET API - get all user', async({ apiHelper })=>{
       let response = await apiHelper.get('/public/v2/users', AUTH_HEADER);
       expect(response.status).toBe(200);
       expect(response.body.length).toBeGreaterThan(0);

    });

    //POST Test:

    test('POST API - create a user', async({ apiHelper })=>{

         let reqBody = {
 
        name: `Abdullah_${Date.now()}`,
        email: `abdullah_${Date.now()}@pwautomation.test`,
        gender: "male",
        status: "active"
    }

       let response = await apiHelper.post('/public/v2/users', reqBody, AUTH_HEADER);
       expect(response.status).toBe(201);
        userID = response.body.id;

        console.log('created userID : ', userID);

       //expect(response.body.length).toBeGreaterThan(0);
       
    });


    //PUT Test:
        test('PUT API - update a user', async({ apiHelper })=>{

         let reqBody = {
 
       
        email: `abdullah_${Date.now()}@pwautomation.test`
       
    }

       let response = await apiHelper.put(`/public/v2/users/${userID}`, reqBody, AUTH_HEADER);
       expect(response.status).toBe(200);
       expect(response.body.email).toBe(reqBody.email);
        
    });


    //DELETE Test:
        test('DELETE API - delete a user', async({ apiHelper })=>{


       let response = await apiHelper.delete(`/public/v2/users/${userID}`, AUTH_HEADER);
       expect(response.status).toBe(204);
      
        
    });

})