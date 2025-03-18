"use client";

import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import { useState } from 'react';

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <main className="bg-slate-950 min-h-screen p-2 flex flex-col">
            <h1 className="text-3xl font-bold text-white mb-4">Shopping List</h1>
            <div className="w-full max-w-md">
                <NewItem onAddItem={handleAddItem} items={items} />
                <ItemList items={items} />
            </div>
        </main>
    );
}
