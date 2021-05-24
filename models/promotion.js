const mongoose = require("mongoose")
const Schema = mongoose.Schema

const promotionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    cost: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)
const Promotion = mongoose.model("Promotion", promotionSchema)

module.exports = Promotion
