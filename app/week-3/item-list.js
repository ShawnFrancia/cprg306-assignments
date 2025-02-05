import Item from './item'; 

export default function ItemList() {
    const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
    };
    const item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
    };
    const item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
    };
    const item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
    };
    const item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
    };
    const item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
    };
    const item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
    };
    const item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
    };
    const item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
    };
    const item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
    };
    const item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
    };
    const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
    };

    return (
        <div className="max-w-md">
            <ul className="space-y-4">
                <li className="flex justify-start p-4 border border-yellow-300 bg-yellow-100 rounded text-black">
                    <Item name={<span className="text-2xl font-bold">{item1.name}</span>} quantity={item1.quantity} category={item1.category} />
                </li>
                <li className="flex justify-start p-4 border border-yellow-300 bg-yellow-100 rounded text-black">
                    <Item name={<span className="text-2xl font-bold">{item2.name}</span>} quantity={item2.quantity} category={item2.category} />
                </li>
                <li className="flex justify-start p-4 border border-yellow-300 bg-yellow-100 rounded text-black">
                    <Item name={<span className="text-2xl font-bold">{item3.name}</span>} quantity={item3.quantity} category={item3.category} />
                </li>
                <li className="flex justify-start p-4 border border-yellow-300 bg-yellow-100 rounded text-black">
                    <Item name={<span className="text-2xl font-bold">{item4.name}</span>} quantity={item4.quantity} category={item4.category} />
                </li>
                <li className="flex justify-start p-4 border border-yellow-300 bg-yellow-100 rounded text-black">
                    <Item name={<span className="text-2xl font-bold">{item5.name}</span>} quantity={item5.quantity} category={item5.category} />
                </li>
                <li className="flex justify-start p-4 border border-yellow-300 bg-yellow-100 rounded text-black">
                    <Item name={<span className="text-2xl font-bold">{item6.name}</span>} quantity={item6.quantity} category={item6.category} />
                </li>
                <li className="flex justify-start p-4 border border-yellow-300 bg-yellow-100 rounded text-black">
                    <Item name={<span className="text-2xl font-bold">{item7.name}</span>} quantity={item7.quantity} category={item7.category} />
                </li>
                <li className="flex justify-start p-4 border border-yellow-300 bg-yellow-100 rounded text-black">
                    <Item name={<span className="text-2xl font-bold">{item8.name}</span>} quantity={item8.quantity} category={item8.category} />
                </li>
                <li className="flex justify-start p-4 border border-yellow-300 bg-yellow-100 rounded text-black">
                    <Item name={<span className="text-2xl font-bold">{item9.name}</span>} quantity={item9.quantity} category={item9.category} />
                </li>
                <li className="flex justify-start p-4 border border-yellow-300 bg-yellow-100 rounded text-black">
                    <Item name={<span className="text-2xl font-bold">{item10.name}</span>} quantity={item10.quantity} category={item10.category} />
                </li>
                <li className="flex justify-start p-4 border border-yellow-300 bg-yellow-100 rounded text-black">
                    <Item name={<span className="text-2xl font-bold">{item11.name}</span>} quantity={item11.quantity} category={item11.category} />
                </li>
                <li className="flex justify-start p-4 border border-yellow-300 bg-yellow-100 rounded text-black">
                    <Item name={<span className="text-2xl font-bold">{item12.name}</span>} quantity={item12.quantity} category={item12.category} />
                </li>
            </ul>
        </div>
    );
    
}
