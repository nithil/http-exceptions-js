const responseCodes = require('../constants/httpResponseCodes');

class HttpError extends Error {
  constructor({ message, name, statusCode, data }) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.data = data;
    // Error.captureStackTrace(this, HttpError);
  }
}

class HttpBadRequest extends HttpError {
  constructor(message = 'Bad request', data) {
    super({
      message,
      name: 'HttpBadRequest',
      statusCode: responseCodes.BAD_REQUEST,
      data,
    });
  }
}

class HttpNotFound extends HttpError {
  constructor(message = 'Not Found', data) {
    super({
      message,
      name: 'HttpNotFound',
      statusCode: responseCodes.NOT_FOUND,
      data,
    });
  }
}

class HttpInternalServerError extends HttpError {
  constructor(message = 'Internal server error', data) {
    super({
      message,
      name: 'HttpInternalServerError',
      statusCode: responseCodes.INTERNAL_SERVER_ERROR,
      data,
    });
  }
}

module.exports = {
  HttpError,
  HttpBadRequest,
  HttpNotFound,
  HttpInternalServerError,
};
