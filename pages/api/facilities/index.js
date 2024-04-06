import Hotel from "@/models/hotel-model";
import connectDB from "@/db";


export default async function handler(req, res) {
    connectDB();
    if (req.method == "GET") {
        const facilities = await Hotel.find({}).distinct('facilities.name');
        res.status(200).json({ msg: "Facilities", facilities });
    }
}