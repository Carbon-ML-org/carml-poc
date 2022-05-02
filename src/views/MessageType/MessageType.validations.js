import { boolean, date, number, object, string } from "yup";

export default object({
  messageType: object({
    name: string(),
    isVerified: boolean(),
    hasCarbonCredit: boolean(),
    volume: object({
      amount: number(),
      descriptor: string(),
      units: string(),
    }),
    measurement: object({
      date: date(),
      address: string(),
      location: object({
        lat: number(),
        lng: number(),
      }),
      source: string(),
      origin: string(),
      method: string(),
      calculation: string(),
    }),
    identifier: object({
      source: string(),
      type: string(),
      id: string(),
    }),
    reporter: object({
      source: string(),
    }),
    verifier: object({
      source: string(),
      origin: string(),
      company: string(),
    }),
    carbonCredit: object({
      vintageYear: date(),
      id: string(),
      carbonOffsetAmount: number(),
    }),
  }),
});
