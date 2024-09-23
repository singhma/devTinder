# Episode 4

Should we put packages.json and package-lock.json in github?

Recommended - Reasons https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json

# Episode 5

## Order of the routes matters

If you have default/ wildcard root as the <strong>first route</strong> `/ example below` this route handler will handle the request and request wont be sent to other handlers

```code
app.use("/", (req, res) => {
    res.send("Hello from dashboard!!");
});
```

If you have default/ wildcard root as the <strong>last route</strong> `/ example below` this route handler will handle the request only if there is not other route match

```code
app.use("/", (req, res) => {
    res.send("Hello from dashboard!!");
});
```

If you have `/hello` as another route,this route handler will handle the request with `hello or hello/123 and so on but not hello123`

```code
app.use("/hello", (req, res) => {
    res.send("Hello from dashboard!!");
});
```

## HTTP Methods

https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

### `aap.use` 

it will match all the HTTP method API calls with /test, /test/* where as if you use `app.get` it will only match specific calls for that HTTP method

### Use of patterns and regex in routes, examples below

`b is optional  so you can send /ac, /abc`
- app.get("/ab?c")

`so you can send /abc, /abbc, /abbbbc` 
- app.get("/ab+c")

`so you can send /abtestcd, /abbcd, /abbbbcd` 
- app.get("/ab*cd")

`grouping, a(bc)d, bc is optional`
`grouping, a(bc)+d, bc is optional`
`use of regex`
    - app.get("/a/") will match if route contains a

### How to get query params in route handler
in app.http method, use req.query

```code
app.get("/params",(req,rsp)=>{
    console.log(req.query);
    rsp.send({firstName:"test", lastname:"user"});
})
```

### How to handle dynamic url like /params/123
in app.http method, use req.params

```code
app.get("/params/:userID",(req,rsp)=>{
    console.log(req.query);
    rsp.send({firstName:"test", lastname:"user"});
})
```
