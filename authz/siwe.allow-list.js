function isAuthorized(decoded, request, callback, unauthorized, internalServerError, config) {
    if (config.ALLOW_LIST.split(",").includes(decoded.sub)) {
        callback(null, request);
    } else {
        unauthorized('Unauthorized', 'Address ' + decoded.sub + ' is not permitted.', '', callback);
    }
}

function getSubject(decoded) { return decoded.payload.sub; }

exports.isAuthorized = isAuthorized;
exports.getSubject = getSubject;
