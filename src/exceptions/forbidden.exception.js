const { HttpException } = require('./http.exception');

const HttpStatus = require('../constants/httpStatusCodes');

/**
 * Defines an HTTP exception for *Forbidden* type errors.
 */
class ForbiddenException extends HttpException {
  /**
   * Instantiate a `ForbiddenException` Exception.
   *
   * @example
   * `throw new ForbiddenException()`
   *
   * @usageNotes
   * The HTTP response status code will be 403.
   * - The `objectOrError` argument defines the JSON response body or the message string.
   *
   * By default, the JSON response body contains three properties:
   * - `status`: this will be the value 403.
   * - `error`: the string `'Forbidden'` by default.
   * - `message`: the string `'Forbidden'` by default; override this by supplying a string in the `objectOrError` parameter.
   *
   * @param objectOrError string or object describing the error condition.
   */
  constructor(objectOrError) {
    super(HttpException.createBody(objectOrError, 'Forbidden'), HttpStatus.FORBIDDEN);
  }
}

module.exports = { ForbiddenException };
