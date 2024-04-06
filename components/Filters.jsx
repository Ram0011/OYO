"use client"

import axios from "axios";
import { useEffect, useState } from "react"

const Filters = ({ price, setPrice, handlePrice, checkList, setCheckList }) => {

    const [list, setList] = useState([]);

    const fetchFacilities = async () => {
        try {
            const { data } = await axios.get('/api/facilities');
            if (data?.facilities) {
                setList(data.facilities);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleCheckList = (e) => {
        let newList = [];
        if (e.target.checked) {
            newList = [...checkList, e.target.value];
            console.log(e.target.value);
            return;
        }
        newList = newList.filter((el) => el !== e.target.value);
        setCheckList(newList);
    }

    useEffect(() => {
        fetchFacilities();
    }, []);

    return (
        <>
            <div className="border-2 border-red-500 m-3 h-auto py-10 px-3">
                <label htmlFor="price" className="text-xl mr-3 font-bold">Price: </label>
                <input type="range" name="price" id="price" min={450} max={5000} onChange={(e) => setPrice(e.target.value)} defaultValue={price ? price : ""} />
                <span className="ml-10">{price}</span>
                <div>
                    <button className=" w-40 h-10 bg-green-500 cursor-pointer mt-4 rounded-lg  hover:bg-green-600 onClick={handlePrice} ">
                        Search
                    </button>
                </div>
                <div className="my-10">
                    <h3 className="text-xl font-bold my-3">Filter by Facilities: </h3>
                    {
                        list?.map((e) => (
                            <p key={e} className="grid grid-cols-4 my-3">
                                <label htmlFor="checkbox" className=" col-span-2">{e}</label>
                                <input type="checkbox" name="checkbox" id="checkbox" value={e} className="w-5 h-5 ml-3 col-span-1" onChange={handleCheckList} />
                            </p>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Filters