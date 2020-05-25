const { HttpException } = require('./http.exception');

const HttpStatus = require('../constants/httpStatusCodes');

/**
 * Defines an HTTP exception for *Internal Server Error* type errors.
 */
class InternalServerErrorException extends HttpException {
  /**
   * Instantiate an `InternalServerErrorException` Exception.
   *
   * @example
   * `throw new InternalServerErrorException()`
   *
   * @usageNotes
   * The HTTP response status code will be 500.
   * - The `objectOrError` argument defines the JSON response body or the message string.
   *
   * By default, the JSON response body contains three properties:
   * - `status`: this will be the value 500.
   * - `error`: the string `'Internal Server Error'` by default.
   * - `message`: the string `'Internal Server Error'` by default; override this by supplying a string in the `objectOrError` parameter.
   *
   * @param objectOrError string or object describing the error condition.
   */
  constructor(objectOrError) {
    super(HttpException.createBody(objectOrError, 'Internal Server Error'), HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

module.exports = { InternalServerErrorException };
