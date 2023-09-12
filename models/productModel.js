const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    description: {
      type: [String],
      required: [true, "Please enter a product description"],
    },
    imgLink: {
      type: String,
      required: [true, "Please enter an image link"],
    },
    price: {
      type: Number,
      required: [true, "Please enter a product price"],
    },
    isDiscount: {
      type: Boolean,
      required: [true, "Please specify if there's a discount"],
    },
    _discount: {
      type: Number,
      required: [true, "Please enter the discount percentage"],
    },
    platforms: {
      type: [String],
      //required: [true, "Please specify product platforms"],
    },
    genre: {
      type: [String],
      required: [true, "Please enter genres"],
    },
    language: {
      type: [String],
      required: [true, "Please enter the languages"],
    },
    developer: {
      type: String,
      required: [true, "Please enter the developer"],
    },
    features: {
      type: [String],
      required: [true, "Please enter the features"],
    },
    category: {
      type: String,
      required: [true, "Please enter the category"],
    },
    isAdult: {
      type: Boolean,
      required: [true, "Please specify if there are any age restrictions"],
    },
    oldPrice: {
      type: Number,
      required: [true, "Please enter the old price"],
    },
    shortDescription: {
      type: String,
      equired: [true, "Please enter the short description"],
    },
    minSystemReq: {
      operatingSystem: {
        type: String,
        //required: [true, "Please specify the operating system"],
      },
      processor: {
        type: String,
        //required: [true, "Please specify the processor"],
      },
      ram: {
        type: String,
        //required: [true, "Please specify the RAM"],
      },
      videoCard: {
        type: String,
        //required: [true, "Please specify the video card"],
      },
      hardDrive: {
        type: String,
        //required: [true, "Please specify the hard drive"],
      },
    },
  },

  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema, "SubscriptionsList");

module.exports = Product;
