const { HttpException } = require('./http.exception');

const HttpStatus = require('../constants/httpStatusCodes');

/**
 * Defines an HTTP exception for *Bad Gateway* type errors.
 */
class BadGatewayException extends HttpException {
  /**
   * Instantiate a `BadGatewayException` Exception.
   *
   * @example
   * `throw new BadGatewayException()`
   *
   * @usageNotes
   * The HTTP response status code will be 502.
   * - The `objectOrError` argument defines the JSON response body or the message string.
   *
   * By default, the JSON response body contains three properties:
   * - `status`: this will be the value 502.
   * - `error`: the string `'Bad Gateway'` by default.
   * - `message`: the string `'Bad Gateway'` by default; override this by supplying a string in the `objectOrError` parameter.
   *
   * @param objectOrError string or object describing the error condition.
   */
  constructor(objectOrError) {
    super(HttpException.createBody(objectOrError, 'Bad Gateway'), HttpStatus.BAD_GATEWAY);
  }
}

module.exports = { BadGatewayException };
