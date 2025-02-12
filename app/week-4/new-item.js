"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

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

    return (
        <div className="flex justify-center items-center ">
            <div className="bg-purple-600 p-4 shadow-lg flex items-center w-48">
                <p className="text-2xl font-semibold text-white mr-4">{quantity}</p>
                
                <div className="flex gap-2">
                    <button onClick={Increment} className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 "> + </button>
                    
                    <button onClick={Decrement} className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 "> - </button>
                </div>
            </div>
        </div>
    );
}
