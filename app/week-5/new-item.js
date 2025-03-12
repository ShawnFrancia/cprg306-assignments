"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const Increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const Decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const submitFunction = (event) => {
        event.preventDefault();

        const item = {
            name: name,
            category: category,
            quantity: quantity
        };

        console.log(item);

        alert(`Added item: ${name}, quantity ${quantity}, category ${category}`);

        setName("");
        setCategory("produce");
        setQuantity(1);
    }

    return (
        <div className="flex justify-center items-start min-h-screen bg-black-100">
            <form onSubmit={submitFunction} className="bg-purple-600 p-6 rounded-lg shadow-md w-full max-w-md">
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-full">
                        <label htmlFor="name" className="block text-sm font-medium text-white"></label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Item Name"
                            value={name}
                            onChange={(nameEvent) => setName(nameEvent.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black"
                            required
                        />
                    </div>

                    <div className="flex justify-between w-full">
                        <div className="flex items-center bg-purple-700 p-4 rounded-lg shadow-md">
                            <p className="text-2xl font-semibold text-white mr-4">{quantity}</p>
                            <div className="flex gap-2">
                                <button type="button" onClick={Increment} className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-500">+</button>
                                <button 
                                    type="button" 
                                    onClick={Decrement} 
                                    className={`px-4 py-2 rounded ${quantity > 1 ? 'bg-green-800 text-white hover:bg-green-500' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`} 
                                    disabled={quantity <= 1}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                        <div className="w-full ml-4">
                            <label htmlFor="category" className="block text-sm font-medium text-white"></label>
                            <select
                                id="category"
                                value={category}
                                onChange={(categoryEvent) => setCategory(categoryEvent.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black"
                            >
                                <option value="produce">Produce</option>
                                <option value="dairy">Dairy</option>
                                <option value="bakery">Bakery</option>
                                <option value="meat">Meat</option>
                                <option value="frozen foods">Frozen Foods</option>
                                <option value="canned goods">Canned Goods</option>
                                <option value="dry goods">Dry Goods</option>
                                <option value="beverages">Beverages</option>
                                <option value="snacks">Snacks</option>
                                <option value="household">Household</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}