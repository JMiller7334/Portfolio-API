# Portfolio-API
A simple RESTful API that handles email submissions for my portfolio website.
This API receives request by using my domain as an endpoint and
directs them to my VPS IP where my PHP services can finish handling them.

*  **⚠ IMPORTANT: See Configuration for information on pointing this API to an IP.**

### Technologies Used:
* JavaScript
* Express.js
* Node.js
* Axios

### Related Projects:
* [Portfolio API PHP](https://github.com/JMiller7334/Portfolio-API-PHP)

## Base URL
```http://jacobjmiller.com```

**Port**
```8081```

## Endpoints
```POST /send-email```
* sends an email with the provided details.

**Request Example (cURL)**
``` sh
curl -X POST http://jacobjmiller.com:8081/send-email \
    -H "Content-Type: application/json" \
    -d '{"name": "John Doe", "email": "john.doe@example.com", "message": "Hello, this is a test message!"}'
```

**Request Body (JSON)**
``` json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "message": "Hello, this is a test message!"
}
```
**Response:**
* Success:
``` json
{
  "success":"Message sent successfully!"
}
```
* Failure:
``` json
{
  "error": "An error occurred while sending the email."
}
```
## Configuration
Adjust the ```const response ``` in ```emailApi.js``` to point to a valid domain or IP:
* ⚠ WARNING: ```response``` must point to a PHP Service at the VPS IP provided.
``` javascript
 const response = await axios.post('http://VPS-SERVER-IP-HERE/portfolio-api/public/email.php', requestData, {
```

