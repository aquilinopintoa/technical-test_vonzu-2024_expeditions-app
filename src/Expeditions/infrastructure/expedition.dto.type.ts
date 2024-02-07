type ClientDTO = {
  username: string,
  profile: {
    emails: string[]
    phones: string[]
    name: string
  }
}

export type ExpeditionDTO = {
  id: number
  reference: string
  type: string
  date: number
  statusCode: string // toReview: With more information we could limit more the type. 
  street: string
  postalCode: string
  city: string
  country: string
  createdAt: string
  updatedAt: string
  client: ClientDTO
  description?: string
  barcodes?: string[]
}