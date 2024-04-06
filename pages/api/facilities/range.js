import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

export async function handler(req, res) {
    if (req.method == "GET") {
        connectDB();
        const hotels = await Hotel.find({ price: { $lte: req.query.price } });
        res.status(200).json(({ msg: "Range Filters", hotels }));
    }
}