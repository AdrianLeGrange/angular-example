# API Specification

## "/modules" endpoint

| Method   | Endpoint      | Query Parameters | Body                | Description                                                     |
| -------- |:-------------:| :--------------- |:--------------------|:----------------------------------------------------------------|
| GET      | /modules      |                  |                     | Returns a list of module descriptions (id, types)               |
| GET      | /modules      | ?id=2            |                     | Returns a specific module object                                |
| POST     | /modules      |                  | Body where id:-1    | INSERT Request body contain new object with id:-1 <br>Response body contain result of post (error description)|
| POST     | /modules      |                  | Body where id: 2    | UPDATE Request body contain updated object with id: 2<br>Response body contain result of post (error description)|
| DELETE   | /modules      | ?id=2            |                     | Delete  specified module (id:2)                                 |

<br>


"INSET" Body:
```JSON 
{
    "id":-1,
    "name":"new module",
    "description":"My garden temperature",
    "type":0,
    ......
} 
```
"UPDATE" Body:
```JSON

{
    "id":2,
    "name":"Temperature model",
    "description":"My garden temperature",
    "type":0,
    ......
} 
```

POST Response Body:
```JSON

{
    "result":0
} 
```


***

## "/rules" endpoint
| Method   | Endpoint      | Query Parameters | Body                | Description                                                     |
| -------- |:-------------:| :--------------- |:--------------------|:----------------------------------------------------------------|
| GET      | /rules        |                  |                     | Returns a list of rule descriptions                             |
| GET      | /rules        | ?id=2            |                     | Returns a specific rule                                         |
| POST     | /rules        |                  | Body where id:-1    | Adds a rule specification in body to INSET new rule (id:-1)     |
| POST     | /rules        |                  | Body where id: 2    | Adds a rule specification in body to UPDATE rule (id:2)         |
| DELETE   | /rules        | ?id=2            |                     | Delete specified rule (id:2)                                    |

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