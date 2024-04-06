import Filters from "@/components/Filters";
import Header1 from "@/components/Header1"
import Hotel from "@/components/Hotel"
import axios from "axios";
import { useEffect, useState } from "react";


const Hotels = ({ hotels }) => {

    const [list, setList] = useState([]);
    const [price, setPrice] = useState(3500);
    const [checkList, setCheckList] = useState([]);

    const handleCheckList = async (e) => {
        const { data } = await axios.get(`/api/facilities/search?val=${checkList}`);
        if (data?.hotels) {
            let newArray = data.hotels;
            setList(newArray);
        }
    }

    const handlePrice = async () => {
        const { data } = await axios.get(`/api/facilities/range?price=${price}`);
        if (data?.hotels) {
            setList(data.hotels);
        }
    }

    useEffect(() => {
        if (checkList) {
            handleCheckList();
        }
    }, [checkList]);

    return (
        <>
            <Header1 />
            <div className="grid grid-cols-12">
                <div className="col-span-3">
                    <Filters price={price} setPrice={setPrice} handlePrice={handlePrice} checkList={checkList} setCheckList={setCheckList} />
                </div>
                <div className="col-span-9">
                    {
                        list.length > 0 ? (
                            list.map((e) => (
                                <div className="m-5 " key={e._id}>
                                    <Hotel e={e} />
                                </div>
                            ))
                        ) : hotels ? (
                            hotels.map((e) => (
                                <div className="m-5 " key={e._id}>
                                    <Hotel e={e} />
                                </div>
                            ))
                        ) : (
                            ""
                        )
                    }
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch(`${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`);
    const data = await res.json();

    return {
        props: {
            hotels: data.hotels ? data.hotels : data.allHotels,
        },
    }
}

export default Hotels