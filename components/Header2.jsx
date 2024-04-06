

const Header2 = () => {

    const List = [
        {
            name: "Banglore"
        },
        {
            name: "Kolkata"
        },
        {
            name: "Mumbai"
        },
        {
            name: "Delhi"
        },
        {
            name: "Hyderabad"
        },
    ]

    return (
        <div className="flex px-10 py-1 justify-between items-center bg-gray-200">
            {
                List.map((e) => {
                    return (
                        <span key={e.name}>{e.name}</span>
                    )
                })
            }
        </div>
    )
}

export default Header2