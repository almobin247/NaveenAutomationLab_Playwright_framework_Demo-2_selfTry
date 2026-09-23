
import { test, expect, APIResponse } from '@playwright/test';


let apiHeader = {
    Authorization: 'Bearer 8dff4cb3861f272bc1f8cf5a18050a2e15415162e8ebc4bba6c0b992a239d153'
};

let id;


test('get users api test', async({ request })=>{
    let apiResponse: APIResponse = await request.get('https://gorest.co.in/public/v2/users', {
        headers: apiHeader
    })

    let res = await apiResponse.json();
    console.log(res);
    console.log(apiResponse.status());
    console.log(apiResponse.statusText());

    expect(apiResponse.status()).toBe(200);
})


test('create user api test', async({ request })=>{

    //User JS Object: 
    let reqBody = {
 
        name: `Abdullah1_${Date.now()}`,
        email: `abdullah_${Date.now()}@pwautomation.test`,
        gender: "male",
        status: "active"
    }

    let apiResponse: APIResponse = await request.post('https://gorest.co.in/public/v2/users', {
        headers: apiHeader,
        data: reqBody
    })

    let res = await apiResponse.json();
    console.log(res);
    console.log(apiResponse.status()+" "+apiResponse.statusText());
    

    this.id = await res.id;

    console.log('new ID is : ', id);

    expect(apiResponse.status()).toBe(201);
});




test('update user api test', async({ request })=>{

    //User JS Object: 
    let reqBody = {
 
        email: `abdullah_${Date.now()}@pwautomation.test`,
        status: "inactive"
    }

    //let url = `https://gorest.co.in/public/v2/users/`+id.toString();

    console.log("hello!!!!! " + id);

    // let apiResponse: APIResponse = await request.put(url, {
    //     headers: apiHeader,
    //     data: reqBody
    // })

    // let res = await apiResponse.json();
    // console.log(res);
    // console.log(apiResponse.status()+" "+apiResponse.statusText());
    // console.log();

    // expect(apiResponse.status()).toBe(200);
});



test('delete user api test', async({ request })=>{


    let apiResponse: APIResponse = await request.delete('https://gorest.co.in/public/v2/users/8617052', {
        headers: apiHeader
  
    })

    // let res = await apiResponse.json();
    // console.log(res);
    console.log(apiResponse.status()+" "+apiResponse.statusText());
    console.log();

    expect(apiResponse.status()).toBe(204);
});
