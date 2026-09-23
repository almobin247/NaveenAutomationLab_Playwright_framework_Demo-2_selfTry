import { APIRequestContext, APIResponse } from "@playwright/test";

export class ApiHelper {

    private readonly request: APIRequestContext;
    private readonly baseURL: string;


    constructor(request: APIRequestContext, baseURL: string){
        this.request = request;
        this.baseURL = baseURL;
    }


    //helper functions

    //GET
    async get(endPoint: string, apiHeaders?: Record<string, string>) {
        let apiResponse: APIResponse = await this.request.get(`${this.baseURL}${endPoint}`, {
            headers: apiHeaders
        });

        console.log(apiResponse.status());
        console.log(await apiResponse.json());
        return {
            status: apiResponse.status(),
            body: await apiResponse.json()
        }
    };


     //POST
    async post(endPoint: string, reqBody: object, apiHeaders?: Record<string, string>) {
        let apiResponse: APIResponse = await this.request.post(`${this.baseURL}${endPoint}`, {
            headers: apiHeaders,
            data: reqBody
        });

        console.log(apiResponse.status());
        console.log(await apiResponse.json());
        return {
            status: apiResponse.status(),
            body: await apiResponse.json()
        }
    };


    //PUT
    async put(endPoint: string, reqBody: object, apiHeaders?: Record<string, string>) {
        let apiResponse: APIResponse = await this.request.put(`${this.baseURL}${endPoint}`, {
            headers: apiHeaders,
            data: reqBody
        });
        console.log(apiResponse.status());
        console.log(await apiResponse.json());
        return {
            status: apiResponse.status(),
            body: await apiResponse.json()
        }
    };


    //DELETE
    async delete(endPoint: string, apiHeaders?: Record<string, string>) {
        let apiResponse: APIResponse = await this.request.delete(`${this.baseURL}${endPoint}`, {
            headers: apiHeaders
           
        });
        console.log(apiResponse.status());

        return {
            status: apiResponse.status()
        }
    };


}