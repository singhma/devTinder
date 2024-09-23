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
