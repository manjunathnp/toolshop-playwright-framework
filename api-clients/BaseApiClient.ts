import { APIRequestContext } from "@playwright/test";

export class BaseApiClient {
    constructor(protected request: APIRequestContext){}
}
