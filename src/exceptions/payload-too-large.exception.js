const { HttpException } = require('./http.exception');

const HttpStatus = require('../constants/httpStatusCodes');

/**
 * Defines an HTTP exception for *Payload Too Large* type errors.
 */
class PayloadTooLargeException extends HttpException {
  /**
   * Instantiate a `PayloadTooLargeException` Exception.
   *
   * @example
   * `throw new PayloadTooLargeException()`
   *
   * @usageNotes
   * The HTTP response status code will be 413.
   * - The `objectOrError` argument defines the JSON response body or the message string.
   *
   * By default, the JSON response body contains three properties:
   * - `status`: this will be the value 413.
   * - `error`: the string `'Payload Too Large'` by default.
   * - `message`: the string `'Payload Too Large'` by default; override this by supplying a string in the `objectOrError` parameter.
   *
   * @param objectOrError string or object describing the error condition.
   */
  constructor(objectOrError) {
    super(
      HttpException.createBody(objectOrError, 'Payload Too Large', HttpStatus.PAYLOAD_TOO_LARGE),
      HttpStatus.PAYLOAD_TOO_LARGE
    );
  }
}
module.exports = { PayloadTooLargeException };
