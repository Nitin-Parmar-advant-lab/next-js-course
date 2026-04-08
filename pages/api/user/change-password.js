import { getSession } from "next-auth/client";
import { connectToDB } from "../../../lib/db";
import { verifyPassword, hashPassword } from "../../../lib/auth";

export default async function handler(req, res) {
    if (req.method !== "PATCH") {
        res.status(405).json({ message: "Method not allowed" });
        return;
    }

    const session = await getSession({ req });

    if (!session) {
        res.status(401).json({ message: "Not authenticated" });
        return;
    }

    const client = await connectToDB();
    const db = client.db();

    const user = await db.collection("users").findOne({ email: session.user.email });

    if (!user) {
        res.status(404).json({ message: "User not found" });
        client.close();
        return;
    }

    const isPasswordValid = await verifyPassword(req.body.password, user.password);

    if (!isPasswordValid) {
        res.status(403).json({ message: "Invalid password" });
        client.close();
        return;
    }

    const hashedPassword = await hashPassword(req.body.newPassword);

    await db.collection("users").updateOne(
        { email: session.user.email },
        { $set: { password: hashedPassword } }
    );

    client.close();
    res.status(200).json({ message: "Password changed successfully" });
}