export enum HttpMethod {
    GET,
    POST,
    PUT,
    DELETE
}

export const HttpMethodDescriptions = new Map<HttpMethod, string>([
    [HttpMethod.GET, 'GET'],
    [HttpMethod.POST, 'POST'],
    [HttpMethod.PUT, 'PUT'],
    [HttpMethod.DELETE, 'DELETE'],
]);