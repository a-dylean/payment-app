import { Decimal } from "@prisma/client/runtime";

export const getStripeValue = (value: string | Decimal) => {
  return Math.trunc(Number(value) * 100);
};

export const getValueFromStripe = (value: any) => {
  return Number(value / 100);
};
