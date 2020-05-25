const { HttpException } = require('./http.exception');

const HttpStatus = require('../constants/httpStatusCodes');

/**
 * Defines an HTTP exception for *Unauthorized* type errors.
 */
class UnauthorizedException extends HttpException {
  /**
   * Instantiate an `UnauthorizedException` Exception.
   *
   * @example
   * `throw new UnauthorizedException()`
   *
   * @usageNotes
   * The HTTP response status code will be 401.
   * - The `objectOrError` argument defines the JSON response body or the message string.
   *
   * By default, the JSON response body contains three properties:
   * - `status`: this will be the value 401.
   * - `error`: the string `'Unauthorized'` by default.
   * - `message`: the string `'Unauthorized'` by default; override this by supplying a string in the `objectOrError` parameter.
   *
   * @param objectOrError string or object describing the error condition.
   */
  constructor(objectOrError) {
    super(HttpException.createBody(objectOrError, 'Unauthorized'), HttpStatus.UNAUTHORIZED);
  }
}

module.exports = { UnauthorizedException };
