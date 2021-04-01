
## CURL command line
----

<br>

```
CURL    -v              Verbose  display everything request and response.
        --header        Add to header
        -X POST         Do post
        -d "{\"id\":1}" Data to be send in body
```

-Get from IP \
$ curl http://192.168.1.101/api?th_module=ALL    
```
$ curl http://192.168.1.101/api?th_module=ALL
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   202  100   202    0     0    971      0 --:--:-- --:--:-- --:--:--   971th_module={"th":[{"name":"th1","used":"TRUE","modes":["heating", "cooling"],},{"name":"th2","used":"FALSE","modes":["cooling", "heating"],},{"name":"th3","used":"TRUE","modes":["heating", "cooling"],}]}
```
<br>

-Get from IP verbose \
$ curl -v http://192.168.1.101/api?th_module=ALL    
```
$ curl -v http://192.168.1.101/api?th_module=ALL    
* Expire in 0 ms for 6 (transfer 0x6c48d0)
*   Trying 192.168.1.101...
* TCP_NODELAY set
* Expire in 200 ms for 4 (transfer 0x6c48d0)
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* Connected to 192.168.1.101 (192.168.1.101) port 80 (#0)
> GET /api?th_module=ALL HTTP/1.1
> Host: 192.168.1.101
> User-Agent: curl/7.64.0
> Accept: */*
>
  0     0    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0* HTTP 1.0, assume close after body
< HTTP/1.0 200 OK
< Server: WebServer V1.0
< Content-Type: application/json
< Content-Length: 202
<
{ [202 bytes data]
100   202  100   202    0     0    146      0  0:00:01  0:00:01 --:--:--   146th_module={"th":[{"name":"th1","used":"TRUE","modes":["heating", "cooling"],},{"name":"th2","used":"FALSE","modes":["cooling", "heating"],},{"name":"th3","used":"TRUE","modes":["heating", "cooling"],}]}
* Closing connection 0
```
<br>

-Get from IP but add to header "Access-Control-Allow-Origin: *" (CORS bypass) \
$ curl -v --header 'Access-Control-Allow-Origin: *' http://192.168.1.101/api?th_module=ALL
```
$ curl -v --header 'Access-Control-Allow-Origin: *' http://192.168.1.101/api?th_module=ALL
* Expire in 0 ms for 6 (transfer 0xe548d0)
*   Trying 192.168.1.101...
* TCP_NODELAY set
* Expire in 200 ms for 4 (transfer 0xe548d0)
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* Connected to 192.168.1.101 (192.168.1.101) port 80 (#0)
> GET /api?th_module=ALL HTTP/1.1
> Host: 192.168.1.101
> User-Agent: curl/7.64.0
> Accept: */*
> Access-Control-Allow-Origin: *
>
* HTTP 1.0, assume close after body
< HTTP/1.0 200 OK
< Server: WebServer V1.0
< Content-Type: application/json
< Content-Length: 202
<
{ [202 bytes data]
100   202  100   202    0     0   1052      0 --:--:-- --:--:-- --:--:--  1052th_module={"th":[{"name":"th1","used":"TRUE","modes":["heating", "cooling"],},{"name":"th2","used":"FALSE","modes":["cooling", "heating"],},{"name":"th3","used":"TRUE","modes":["heating", "cooling"],}]}
* Closing connection 0
```

<br>

-Post with data in body\
curl -v -X POST -d "{\"id\":1}" http://192.168.1.101/modules
```
C:\Users\baket>curl -v -X POST -d "{\"id\":1}" http://192.168.1.101/modules
Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying 192.168.1.101...
* TCP_NODELAY set
* Connected to 192.168.1.101 (192.168.1.101) port 80 (#0)
> POST /modules HTTP/1.1
> Host: 192.168.1.101
> User-Agent: curl/7.55.1
> Accept: */*
> Content-Length: 8
> Content-Type: application/x-www-form-urlencoded
>
* upload completely sent off: 8 out of 8 bytes
* HTTP 1.0, assume close after body
< HTTP/1.0 200 OK
< Server: WebServer V1.0
< Content-Type: application/json
< Access-Control-Allow-Origin: *
< Content-Length: 17
<
* transfer closed with 17 bytes remaining to read
* Closing connection 0
curl: (18) transfer closed with 17 bytes remaining to read
```