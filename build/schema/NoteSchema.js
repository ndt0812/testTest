"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNoteSchema = exports.createNoteSchema = void 0;
const zod_1 = require("zod");
exports.createNoteSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, { message: "ten phai nhien hon 1 ki tu!" }),
        description: zod_1.z.string().min(4, { message: "mo ta thong tin nhien hon 4 ky tu!" })
    }),
});
exports.updateNoteSchema = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string() }),
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, { message: "ten phai nhien hon 1 ki tu!" }),
        description: zod_1.z.string().min(4, { message: "mo ta thong tin nhien hon 4 ky tu!" })
    }).partial(),
});
