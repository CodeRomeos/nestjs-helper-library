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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const common_1 = require("@nestjs/common");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
class BaseController {
    respondBySearchWithPaginatedData() {
        return __awaiter(this, arguments, void 0, function* (query = {}, service, options = {}) {
            // const records = service.fetchAndSortFromSearchQueryWithRelations(query || {}, options);
            //
            const data = yield service.paginate(query, options);
            return this.respondWithPaginatedData(data.data.length + " records fetched", data.data, data.paginationData);
        });
    }
    respondWithPaginatedData(message, data = {}, paginationData) {
        return {
            statusText: "success",
            message: message,
            data: data,
            paginationData: paginationData,
        };
    }
    respondSuccess(message, data = {}) {
        return {
            statusText: "success",
            message: message,
            data: data,
        };
    }
    throwNotFoundException(message) {
        throw new common_1.NotFoundException({
            statusText: "fail",
            message: message,
        });
    }
    throwBadRequestException(message, error) {
        throw new common_1.BadRequestException({
            statusText: "fail",
            message: message,
            error: error,
        }, {
            cause: error,
        });
    }
    throwConflictException(message, error) {
        throw new common_1.ConflictException({
            statusText: "fail",
            message: message,
            errors: error.keyValue,
        }, {
            cause: error,
        });
    }
    throwInternalServerException(message, error = []) {
        throw new common_1.InternalServerErrorException({
            statusText: "fail",
            message: message,
        }, {
            cause: error,
        });
    }
    rootDir() {
        return path.join(__dirname, "..");
    }
    moveToPublic(filePath) {
        const destination = path.join(this.rootDir(), "public", filePath);
        try {
            fs.renameSync(path.join(this.rootDir(), filePath), destination);
            return { path: destination, url: "/" + filePath.toString().replaceAll("\\", "/") };
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=BaseController.js.map