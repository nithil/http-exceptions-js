# http-exceptions-js

## Example

```js
const {
  BadGatewayException,
  BadRequestException,
  ConflictException,
  ForbiddenException,
  GatewayTimeoutException,
  InternalServerErrorException,
  MethodNotAllowedException,
  NotFoundException,
  PayloadTooLargeException,
  RequestTimeoutException,
  ServiceUnavailableException,
  UnauthorizedException,
  UnprocessableEntityException,
} = require('./src');

* 1
throw new NotFoundException('Record not found');

* 2
const error = new ConflictException('Record already exist with that name');
console.log(error.status); // 409
console.log(error.error); // conflict
console.log(error.message); // Record already exist with that name


| Exception                                |  status  |         error         |   message   |
| ---------------------------------------- | -------- | --------------------- | ----------- |
| throw new BadRequestException('error')   |    400   | Bad Request           |    error    |
| throw new UnauthorizedException()        |    401   | Unauthorized          |             |
| throw new ForbiddenException()           |    403   | Forbidden             |             |
| throw new NotFoundException()            |    404   | Not Found             |             |
| throw new MethodNotAllowedException()    |    405   | Method Not Allowed    |             |
| throw new RequestTimeoutException()      |    408   | Request Timeout       |             |
| throw new ConflictException()            |    409   | Conflict              |             |
| throw new UnprocessableEntityException() |    422   | Unprocessable Entity  |             |
| throw new InternalServerErrorException() |    500   | Internal Server Error |             |
| throw new GatewayTimeoutException()      |    502   | Gateway Timeout       |             |
| throw new ServiceUnavailableException()  |    503   | Service Unavailable   |             |
| throw new BadGatewayException()          |    504   | Bad Gateway           |             |
```
