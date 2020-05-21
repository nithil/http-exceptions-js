const { HttpException } = require('./http.exception');

const HttpStatus = require('../constants/httpStatusCodes');

/**
 * Defines an HTTP exception for *Method Not Allowed* type errors.
 */
class MethodNotAllowedException extends HttpException {
  /**
   * Instantiate a `MethodNotAllowedException` Exception.
   *
   * @example
   * `throw new MethodNotAllowedException()`
   *
   * @usageNotes
   * The HTTP response status code will be 405.
   * - The `objectOrError` argument defines the JSON response body or the message string.
   *
   * By default, the JSON response body contains three properties:
   * - `status`: this will be the value 405.
   * - `error`: the string `'Method Not Allowed'` by default.
   * - `message`: the string `'Method Not Allowed'` by default; override this by supplying a string in the `objectOrError` parameter.
   *
   * @param objectOrError string or object describing the error condition.
   */
  constructor(objectOrError) {
    super(HttpException.createBody(objectOrError, 'Method Not Allowed'), HttpStatus.METHOD_NOT_ALLOWED);
  }
}

module.exports = { MethodNotAllowedException };
