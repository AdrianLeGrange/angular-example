# API Specification
NOTE: Simlelink C32xx DON't support a body in the response for put & post  	See. SWRU455M pg.185 9.7.3 "POST" and 9.7.3 "PUT"

## "/modules" endpoint  (post/put (cc32xx don's support a body in response))

| Method | Endpoint | Query Params | Body (request)                                  | Body (responce)      | Responce | Description                                            |
| -------|:--------:| :----------- |:------------------------------------------------|:---------------------|:---------|--------------------------------------------------------|
| GET    | /modules | -            | -                                               | Module list          | 200/     | Returns a list of module descriptions (id, types)      |
| GET    | /modules | ?id=2        | -                                               | Module specification | 200/     | Returns a specific module object                       |
| POST   | /modules | -            | Object{action:0, type:2}                        | - (Not supported)    | 200/     | INSERT - Request body contain new object with action & type|
| POST   | /modules | -            | Object{action:1, id:2, name:fan, speed:50, ...} | - (Not supported)    | 200/     | UPDATE - Request body contain updated object with action, id and parameters|
| POST   | /modules | -            | Object{action:2, id:2}                          | - (Not supported)    | 200/     | Delete-  Request body contain object with action & id  |

<br>

"INSET" Body:
```JSON 
{
    "action":0,
    "name":"new module",
    "description":"My garden temperature",
    "type":0,
    ......
} 
```
"UPDATE" Body:
```JSON

{
    "action":1,
    "id":2,
    "name":"Temperature model",
    "description":"My garden temperature",
    ......
} 
```
"DELETE" Body:
```JSON

{
    "action":2,
    "id":2,
} 
```


***

## "/rules" endpoint
Every rule can have up to xx modules (eg. thermostat -> condition); 
| Method   | Endpoint      | Query Parameters | Body request        | Description                                                     |
| -------- |:-------------:| :--------------- |:--------------------|:----------------------------------------------------------------|
| GET      | /rules        |                  |                     | Returns a list of rule descriptions                             |
| GET      | /rules        | ?id=2            |                     | Returns a specific rule                                         |
| POST     | /rules        |                  | {action:0, rule:0)  | INSERT a rule specification in body to INSET new rule           |
| POST     | /rules        |                  | Body where id: 2    | UPDATE a rule specification in body to UPDATE rule (id:2)       |
| POST     | /rules        |                  | Body action:2, id:2 | DELETE a rule specified (id:2)                                  |

***
## "/status" endpoint
| Method   | Endpoint      | Query Parameters | Body                | Description                                                     |
| -------- |:-------------:| :--------------- |:--------------------|:----------------------------------------------------------------|
| GET      | /status       |                  |                     | Returns a list of status descriptions                           |
| GET      | /status       | ?id=2            |                     | Returns a specific status                                       |
***
## "/register" endpoint
post only

Registering Notes: 
* Registering will consist of username & password pairs.
* No Users (new system) - Default to register page so that the admin user (first user) can be registered (no token needed as no users exists).
* Adding additional users - Log in as admin user, then add user/s.

User/passwords pairs will be stored as a SHA256 hash value.
***
## "/login" endpoint
post only

Require a Username/password pair, backend will calculate SHA256 and check current SHA256 table for validity. a Token will be generated to allow user to continue.
Token will expire in xxx minutes.

***
## "/logs" endpoint

***

***
Links:
[Learn mode about markdown (.md)](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)