import { OAuth2Client } from "google-auth-library";
import User from "../models/User";
import { Request, Response, NextFunction } from "express";

export const googleLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.body;
  const client = new OAuth2Client(process.env.CLIENT_ID);

  if (!token) {
    return res.status(500).json({ message: "No token provided" });
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    });

    const decodedToken = ticket.getPayload();
    const { sub, name, email, picture } = decodedToken;

    let googleUser = await User.findOne({ email });

    if (!googleUser) {
      await User.create({
        id: sub,
        name,
        email,
      });
    }


    return res.status(200).json({ result: { sub, picture }, token });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
