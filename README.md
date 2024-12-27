# NodeJS

understanding of global object

importing modules
- Modules protect their variables and functions from leaking by default in order to avoid conflicts
- we need to export them in order to access them
- whatever is exported in a module, will be returned whenever that module is imported using require()
- destructuring using {}

- Node.js automatically resolves the file extensions

- ES modules are considered better than CommonJS modules 
- ES modules load modules
asynchronously, allowing for more efficient and flexible code execution
- ES
modules enforce stricter parsing and error handling, making them generally
safer and more reliable.
- need package.json configuration
- used in frameworks like React, Angular


-Nested Modules
- We can import entire module folder and app.js would not need to know the structure of that folder

-Synchronized execution of JS code