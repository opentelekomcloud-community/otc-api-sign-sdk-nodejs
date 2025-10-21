/**
 * OTC API Sign SDK for Node.js
 * 
 * This module provides functionality for signing API requests for OpenTelekomCloud.
 */

const signer = require('./signer');

// Export the main classes and functions
module.exports = {
  HttpRequest: signer.HttpRequest,
  Signer: signer.Signer,
  urlEncode: signer.urlEncode,
  findHeader: signer.findHeader,
  SignedHeaders: signer.SignedHeaders,
  CanonicalRequest: signer.CanonicalRequest,
  StringToSign: signer.StringToSign
};

// Also export individual components for convenience
module.exports.HttpRequest = signer.HttpRequest;
module.exports.Signer = signer.Signer;
module.exports.urlEncode = signer.urlEncode;
module.exports.findHeader = signer.findHeader;
module.exports.SignedHeaders = signer.SignedHeaders;
module.exports.CanonicalRequest = signer.CanonicalRequest;
module.exports.StringToSign = signer.StringToSign;