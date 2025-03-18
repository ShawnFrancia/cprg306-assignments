"use client";

import ItemList from './item-list';
import NewItem from './new-item'; 
import itemsData from './items.json';
import MealIdeas from './meal-ideas'; 

import { useState, useEffect } from 'react';

export default function Page()
{
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState(''); 

    useEffect(() => {
        setItems(itemsData);
    }, []);

    const handleAddItem = (newItem) => 
        {
        setItems([...items, newItem]);
        };

    const handleItemSelect = (item) => 
        {
        const cleanedName = item.name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItemName(cleanedName);
        };

    return (
        <main className="bg-slate-950 min-h-screen p-2 flex flex-col">
            <h1 className="text-3xl font-bold text-white mb-4">Shopping List</h1>
            <div className="w-full max-w-4xl flex space-x-8">
                <div className="flex-1">
                    <NewItem onAddItem={handleAddItem} items={items} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex-1">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}