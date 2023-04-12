import React, { useState } from "react";


export default function Footer () {

    const [inputValue, setInputValue] = useState("votre email");

    function handleChange (e) {
        setInputValue(e.target.value);
    }

    function onBlur (e) {
        if (!e.target.value.includes("@")) {
            alert("il faut un @ dans votre email")
        }
    }
    return  <footer className="foot flex justify-center items-center">
                <input value={inputValue} onChange={handleChange} onBlur={onBlur} className="w-52 border-2 rounded-md bg-white py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" type="email" />
            </footer>
}