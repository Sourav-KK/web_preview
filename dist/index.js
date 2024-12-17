"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT_NO = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "*" }));
app.listen(PORT_NO, () => {
    console.info("server is running on:", PORT_NO);
});
// api
app.get("/api", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("api called");
        if (!req.body.web_url) {
            res.json({ errMsg: "Please enter a URL" });
            return;
        }
        res.status(200).json({ successMsg: "Here is the web preview" });
    }
    catch (error) {
        res.json({ errMsg: "Could not complete the request. Try again later" });
        return;
    }
}));
