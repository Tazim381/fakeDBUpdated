import React, { useState } from "react";
import InputHero from "./inputHero";
import HeroConrol from "./HeroControl";
import { AiFillPlusCircle } from "react-icons/ai";

const HeroSection = () => {
  const [fields, setFields] = useState([{ id: Math.random(), some: "some" }]);

  const handleAddField = () => {
    setFields([...fields, { id: Math.random(), some: "some" }]);
  };

  const handleDeleteField = (id) => {
    setFields((prevFields) => prevFields.filter((field) => field.id !== id));
  };

  return (
    <div className="absolute top-20 ml-48">
    <div className="flex gap-4">
      <div className="bg-[#F5F5F5] shadow-md backdrop-blur-md shadow-slate-400 w-70 h-72 overflow-y-scroll overflow-hidden">
        <button className="bg-blue-600 rounded-md text-white px-3 py-2 mx-4 mt-3 flex gap-2 items-center" onClick={handleAddField}>
          <AiFillPlusCircle />
          Add Field 
        </button>
        {
           fields.map((field, index) => (
           <InputHero key={field.id} index={field.id} handleDeleteField={handleDeleteField} />
           ))}
         </div>
         <div className="p-2 bg-[#F5F5F5] shadow-md backdrop-blur-md shadow-slate-400 w-31 mr-3 h-72">
           <HeroConrol />
         </div>
       </div>
       <div>Table</div>
     </div>
  );
};
export default HeroSection;