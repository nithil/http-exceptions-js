const { HttpException } = require('./http.exception');

const HttpStatus = require('../constants/httpStatusCodes');

/**
 * Defines an HTTP exception for *Service Unavailable* type errors.
 */
class ServiceUnavailableException extends HttpException {
  /**
   * Instantiate a `ServiceUnavailableException` Exception.
   *
   * @example
   * `throw new ServiceUnavailableException()`
   *
   * @usageNotes
   * The HTTP response status code will be 503.
   * - The `objectOrError` argument defines the JSON response body or the message string.
   *
   * By default, the JSON response body contains three properties:
   * - `status`: this will be the value 503.
   * - `error`: the string `'Service Unavailable'` by default.
   * - `message`: the string `'Service Unavailable'` by default; override this by supplying a string in the `objectOrError` parameter.
   *
   * @param objectOrError string or object describing the error condition.
   */
  constructor(objectOrError) {
    super(HttpException.createBody(objectOrError, 'Service Unavailable'), HttpStatus.SERVICE_UNAVAILABLE);
  }
}

module.exports = { ServiceUnavailableException };
