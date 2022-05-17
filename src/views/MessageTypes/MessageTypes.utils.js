import { format } from "date-fns";

export function parseMessageTypes(messageTypes) {
  return messageTypes.map((mt) => ({
    id: mt.id,
    name: mt.name,
    amount: `${mt.amount.amount}${mt.amount.units}`,
    calculation: mt.declaredTraitMeasurementMethodology.calculation,
    date: format(
      new Date(mt.declaredTraitMeasurementMethodology.date),
      "MM/dd/yyyy"
    ),
  }));
}
