const { BadGatewayException } = require('./exceptions/bad-gateway.exception');
const { BadRequestException } = require('./exceptions/bad-request.exception');
const { ConflictException } = require('./exceptions/conflict.exception');
const { ForbiddenException } = require('./exceptions/forbidden.exception');
const { GatewayTimeoutException } = require('./exceptions/gateway-timeout.exception');
const { InternalServerErrorException } = require('./exceptions/internal-server-error.exception');
const { MethodNotAllowedException } = require('./exceptions/method-not-allowed.exception');
const { NotFoundException } = require('./exceptions/not-found.exception');
const { PayloadTooLargeException } = require('./exceptions/payload-too-large.exception');
const { RequestTimeoutException } = require('./exceptions/request-timeout.exception');
const { ServiceUnavailableException } = require('./exceptions/service-unavailable.exception');
const { UnauthorizedException } = require('./exceptions/unauthorized.exception');
const { UnprocessableEntityException } = require('./exceptions/unprocessable-entity.exception');

module.exports = {
  BadGatewayException,
  BadRequestException,
  ConflictException,
  ForbiddenException,
  GatewayTimeoutException,
  InternalServerErrorException,
  MethodNotAllowedException,
  NotFoundException,
  PayloadTooLargeException,
  RequestTimeoutException,
  ServiceUnavailableException,
  UnauthorizedException,
  UnprocessableEntityException,
};
