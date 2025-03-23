# CohortExpress

CohortExpress is a simple, lightweight, custom-built HTTP server inspired by Express.js. It provides basic routing capabilities to handle HTTP requests.

## Features
- Support for HTTP Methods: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`
- Simple route management
- Custom callback handlers

## Installation
Ensure you have Node.js installed.

1. Clone or download the CohortExpress code.
2. Create your own `server.js` file to implement it.

```bash
npm init -y
```

## Usage

### Import CohortExpress
```javascript
import CohortExpress from './CohortExpress.js';

const app = new CohortExpress();
```

### Define Routes
You can define routes using the built-in methods: `get`, `post`, `put`, `patch`, and `delete`.

```javascript
app.get('/hello', (req, res) => {
  res.end('Hello, GET Request!');
});

app.post('/data', (req, res) => {
  res.end('Data received with POST Request!');
});

app.put('/update', (req, res) => {
  res.end('Data updated with PUT Request!');
});

app.patch('/modify', (req, res) => {
  res.end('Data modified with PATCH Request!');
});

app.delete('/delete', (req, res) => {
  res.end('Data deleted with DELETE Request!');
});
```

### Start the Server
```javascript
app.chaiListen({
  port: 3000,
  host: '127.0.0.1',
  cb: () => console.log('Server is running on http://127.0.0.1:3000')
});
```

## Explanation
- `app.get()` - Handles GET requests
- `app.post()` - Handles POST requests
- `app.put()` - Handles PUT requests
- `app.patch()` - Handles PATCH requests
- `app.delete()` - Handles DELETE requests
- `chaiListen()` - Starts the server on the specified port and host

## Example Response
When making a GET request to `http://127.0.0.1:3000/hello`, the response will be:
```
Hello, GET Request!
```

## Error Handling
- If the method is invalid: `Invalid method.`
- If the route is not found: `undefined not found`

## Contribution
Feel free to submit issues or contribute to the project by opening a pull request.

## License
This project is licensed under the MIT License.

