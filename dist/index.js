"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dtos = exports.enums = exports.resources = exports.models = exports.entities = exports.decorators = exports.AddressSchema = exports.AddressModel = exports.BaseService = exports.BaseController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
mongoose_1.default
    .connect(process.env.MONGODB_URI)
    .then(() => {
    console.log("nest-lib-common: - Mongo DB connected");
})
    .catch((err) => {
    console.log(err);
});
var BaseController_1 = require("./Controllers/BaseController");
Object.defineProperty(exports, "BaseController", { enumerable: true, get: function () { return BaseController_1.BaseController; } });
var BaseService_1 = require("./Services/BaseService");
Object.defineProperty(exports, "BaseService", { enumerable: true, get: function () { return BaseService_1.BaseService; } });
var address_model_1 = require("./models/address.model");
Object.defineProperty(exports, "AddressModel", { enumerable: true, get: function () { return address_model_1.AddressModel; } });
Object.defineProperty(exports, "AddressSchema", { enumerable: true, get: function () { return address_model_1.AddressSchema; } });
exports.decorators = __importStar(require("./decorators"));
exports.entities = __importStar(require("./entities"));
exports.models = __importStar(require("./models"));
exports.resources = __importStar(require("./resources"));
exports.enums = __importStar(require("./enums"));
exports.dtos = __importStar(require("./dtos"));
//# sourceMappingURL=index.js.map