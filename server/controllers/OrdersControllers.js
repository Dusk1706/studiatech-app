import { PrismaClient } from "@prisma/client";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51OJOeyHxpVl4H39QW6d4EzwgfRUDe5oKxBI0JANGs8P2hXaEz80tHj6gqVVE2ZVMvFm9YJzqiloqzCUzvcFvenWv00ieeeXSoo"
);

export const addOrder = async (req, res, next) => {
  try {
    if (req.body.gigId) {
      const { gigId } = req.body;
      const prisma = new PrismaClient();
      const gig = await prisma.gigs.findUnique({
        where: { id: parseInt(gigId) },
      });

      const paymentIntent = await stripe.paymentIntents.create({
        amount: gig?.price * 100,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      await prisma.orders.create({
        data: {
          paymentIntent: paymentIntent.id,
          price: gig.price,
          buyer: { connect: { id: req.userId } },
          gig: { connect: { id: parseInt(gigId) } },
        },
      });
      return res
        .status(201)
        .json({ clientSecret: paymentIntent.client_secret });
    }
    return res.status(400).send("GigId should be required.");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};
