type Client = {
  username: string,
  profile: {
    emails: string[]
    phones: string[],
    name: string
  }
}

export type Expedition = {
  id: number
  reference: string,
  type: string,
  date: Date,
  statusCode: string, // toReview: With more information we could limit more the type. 
  street: string,
  postalCode: string,
  city: string,
  country: string,
  createdAt: Date,
  updatedAt: Date,
  client: Client,
  description?: string
  barcodes?: string[]
}
