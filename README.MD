# API Description

## Base URL
`BASE_URL`: Your API base URL here

---

### Get Waitlist Users [GET]

#### Description
Retrieve a list of users on the waitlist.

#### Endpoint
`/api/v1/getusers`

#### Request Method
- `GET`

#### Response
- Status: `200 OK`
- Body: JSON object containing a list of users.

### Add Users to Waitlist [POST]

#### Description
Add a user to the waitlist with the provided information.

#### Endpoint
`/api/v1/adduser`

#### Request Body (JSON)

- `email` (string, required): The email address of the user.

#### Response
- Status: `201 Created`
- Body: JSON object with user information.

#### Example
```json
{
    "success": true,
    "message": "You are added to the waitlist. See you at launch!",
    "data": {
        "newUser": {
            "email": "info@akoringbade.com.ng",
            "createdAt": "2024-11-04T21:35:07.238Z",
            "_id": "67293e3266e1ff1be1c2cdd6",
            "__v": 0
        }
    }
}


