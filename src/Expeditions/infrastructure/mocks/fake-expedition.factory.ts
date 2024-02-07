
export const generateExpeditionInstance = (id: number, reference: string) => ({
  id,
  reference,
  type: "delivery",
  date: 1659398400000,
  statusCode: "incidence",
  street: "Gran Via de les Corts Catalanes 645",
  postalCode: "Spain",
  city: "08010",
  country: "españa",
  createdAt: "2022-07-27T14:52:14Z",
  updatedAt: "2022-07-27T15:52:22Z",
  description: "Veg It",
  barcodes: ["1018831029UHVH3GWAS001"],
  client: {
    username: "clienttest",
    profile: {
      emails: ["clienttest@vonzu.es"],
      phones: ["637492532"],
      name: "client test"
    }
  }
});