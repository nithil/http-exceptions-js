const { HttpException } = require('./http.exception');

const HttpStatus = require('../constants/httpStatusCodes');

/**
 * Defines an HTTP exception for *Conflict* type errors.
 */
class ConflictException extends HttpException {
  /**
   * Instantiate a `ConflictException` Exception.
   *
   * @example
   * `throw new ConflictException()`
   *
   * @usageNotes
   * The HTTP response status code will be 409.
   * - The `objectOrError` argument defines the JSON response body or the message string.
   *
   * By default, the JSON response body contains three properties:
   * - `status`: this will be the value 409.
   * - `error`: the string `'Conflict'` by default.
   * - `message`: the string `'Conflict'` by default; override this by supplying a string in the `objectOrError` parameter.
   *
   * @param objectOrError string or object describing the error condition.
   */
  constructor(objectOrError) {
    super(HttpException.createBody(objectOrError, 'Conflict'), HttpStatus.CONFLICT);
  }
}

module.exports = { ConflictException };
