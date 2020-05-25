const { HttpException } = require('./http.exception');

const HttpStatus = require('../constants/httpStatusCodes');

/**
 * Defines an HTTP exception for *Request Timeout* type errors.
 */
class RequestTimeoutException extends HttpException {
  /**
   * Instantiate a `RequestTimeoutException` Exception.
   *
   * @example
   * `throw new RequestTimeoutException()`
   *
   * @usageNotes
   * The HTTP response status code will be 408.
   * - The `objectOrError` argument defines the JSON response body or the message string.
   *
   * By default, the JSON response body contains three properties:
   * - `status`: this will be the value 408.
   * - `error`: the string `'Request Timeout'` by default.
   * - `message`: the string `'Request Timeout'` by default; override this by supplying a string in the `objectOrError` parameter.
   *
   * @param objectOrError string or object describing the error condition.
   */
  constructor(objectOrError) {
    super(HttpException.createBody(objectOrError, 'Request Timeout'), HttpStatus.REQUEST_TIMEOUT);
  }
}

module.exports = { RequestTimeoutException };
