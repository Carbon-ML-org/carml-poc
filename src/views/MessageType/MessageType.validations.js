import { boolean, date, number, object, string } from "yup";

export default object({
  messageType: object({
    name: string(),
    isVerified: boolean(),
    hasCarbonCredit: boolean(),
    id: string(),
    uniqueId: object({
      uniqueIdSource: string(),
      type: string(),
      id: string(),
    }),
    amount: object({
      amount: number(),
      declaredTrait: string(),
      units: string(),
    }),
    declaredTraitDataSource: object({
      declaredTraitDataSource: string(),
    }),
    declaredTraitMeasurementMethodology: object({
      date: date(),
      declaredTraitMeasurementMethod: string(),
      origin: string(),
      methodology: string(),
      calculation: string(),
    }),
    location: object({
      address: string(),
      locationType: string(),
      location: object({
        lat: number(),
        lng: number(),
      }),
    }),
    verifyingEntity: object({
      declaredTraitVerifyingEntity: string(),
      origin: string(),
      company: string(),
      credentials: string(),
      credentialsExpirationDate: string(),
    }),
    carbonCredit: object({
      vintageYear: date(),
      id: string(),
      carbonOffsetAmount: number(),
    }),
  }),
});
