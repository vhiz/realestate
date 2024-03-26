const { Schema, models, model } = require("mongoose");

const listingSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: String, required: true },
    images: [{ type: String, required: true }],
    bedRooms: { type: Number, required: true },
    bathRooms: { type: Number, required: true },
    userId: { type: String, required: true },
    type: {
      //select between buy and rent using enum
      type: String,
      enum: ["buy", "rent"],
      default: "rent",
    },
    size: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    school: { type: String, required: true },
    bus: { type: String, required: true },
    restaurant: { type: String, required: true },
    desc: { type: String, required: true },
    policies: [
      {
        name: { type: String },
        policy: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const Listing = models.Listing || model("Listing", listingSchema);
export default Listing;
