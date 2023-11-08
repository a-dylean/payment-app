import { Token } from "@prisma/client";
import { prisma } from "../../../prisma/prisma";

export type TokenCreationParams = Pick<Token, "userId" | "token">;

export class AuthModel {
  async createToken(data: TokenCreationParams): Promise<Token> {
    const { userId } = data;
    return await prisma.token.upsert({
        where: {
            userId: userId
        },
        update: {
            ...data
        },
        create: {
            ...data
        }
    })
  }
}
