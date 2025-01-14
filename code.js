{
  users: {
    _id: { type: "ObjectId" },
    name: { type: "String" },
    email: { type: "String" },
    role: { type: "String" }
  },
  orders: {
    _id: { type: "ObjectId" },
    product: { type: "String" },
    userId: { type: "ObjectId", ref: "users" },
    quantity: { type: "Number" }
  }
}
