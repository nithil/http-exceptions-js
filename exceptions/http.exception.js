const { isString, isObject } = require('../utils/shared.utils');

/**
 * Exceptions Handler
 */
class HttpException extends Error {
  /**
   * Instantiate a plain HTTP Exception.
   *
   * @example
   * `throw new HttpException()`
   *
   * @usageNotes
   * The constructor arguments define the response and the HTTP response status code.
   * - The `response` argument (required) defines the JSON response body.
   * - The `status` argument (required) defines the HTTP Status Code.
   *
   * @param response string or object describing the error condition.
   * @param {number} status HTTP response status code.
   */
  constructor(response, status) {
    super();
    this.status = status;
    this.setMessage(response);
    this.setError(response);
    this.setExtraResponse(response);
  }

  setMessage(response) {
    if (isString(response)) {
      this.message = response;
    } else if (isObject(response) && isString(response.message)) {
      this.message = response.message;
    } else if (this.constructor) {
      this.message = this.constructor.name.match(/[A-Z][a-z]+|[0-9]+/g).join(' ');
    }
  }

  setError(response) {
    if (isObject(response) && isString(response.error)) {
      this.error = response.error;
    } else if (this.constructor) {
      this.error = this.constructor.name.match(/[A-Z][a-z]+|[0-9]+/g).join(' ');
    }
  }

  setExtraResponse(response) {
    // TODO:
  }

  getResponse() {
    return this.response;
  }

  getStatus() {
    return this.status;
  }

  static createBody(objectOrError, message) {
    if (!objectOrError) {
      return { message, error: message };
    }
    return isObject(objectOrError) ? { ...objectOrError, error: message } : { message: objectOrError, error: message };
  }
}

module.exports = { HttpException };
