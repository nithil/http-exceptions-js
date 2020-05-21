const { HttpException } = require('./http.exception');

const HttpStatus = require('../constants/httpStatusCodes');

/**
 * Defines an HTTP exception for *Gateway Timeout* type errors.
 */
class GatewayTimeoutException extends HttpException {
  /**
   * Instantiate a `GatewayTimeoutException` Exception.
   *
   * @example
   * `throw new GatewayTimeoutException()`
   *
   * @usageNotes
   * The HTTP response status code will be 504.
   * - The `objectOrError` argument defines the JSON response body or the message string.
   *
   * By default, the JSON response body contains three properties:
   * - `status`: this will be the value 504.
   * - `error`: the string `'Gateway Timeout'` by default.
   * - `message`: the string `'Gateway Timeout'` by default; override this by supplying a string in the `objectOrError` parameter.
   *
   * @param objectOrError string or object describing the error condition.
   */
  constructor(objectOrError) {
    super(HttpException.createBody(objectOrError, 'Gateway Timeout'), HttpStatus.GATEWAY_TIMEOUT);
  }
}

module.exports = { GatewayTimeoutException };
