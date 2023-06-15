import { z } from 'zod';

export const createNoteSchema = z.object({
    body: z.object({
        name: z.string().min(1, { message: "ten phai nhien hon 1 ki tu!" }),
        description: z.string().min(4, { message: "mo ta thong tin nhien hon 4 ky tu!" })
    }),
});

export const updateNoteSchema = z.object({
    params: z.object({ id: z.string() }),
    body: z.object({
        name: z.string().min(1, { message: "ten phai nhien hon 1 ki tu!" }),
        description: z.string().min(4, { message: "mo ta thong tin nhien hon 4 ky tu!" })
    }).partial(),
})