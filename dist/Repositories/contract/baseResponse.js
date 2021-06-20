"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeResponse = void 0;
const constants_1 = require("../../constant/constants");
function makeResponse(data, statusCode = constants_1.HttpStatusCode.OK, message = null) {
    return { data, statusCode, message };
}
exports.makeResponse = makeResponse;
//# sourceMappingURL=baseResponse.js.map