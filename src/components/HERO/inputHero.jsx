import React from "react";
import InputField from "../INPUT/InputField";

const InputHero = ({ index, handleDeleteField }) => {
  const handleDelete = () => {
    handleDeleteField(index);
  };

  return (
    <div className=" flex items-center gap-5">
      <div className="rounded-sm flex gap-3 mx-2 my-2">
        <InputField type={"text"} name={"fname"} placeHolder={"field Name"} />
        <div>
          <select
            name="ftype"
            id="typename"
            className=" my-2 w-36 mx-2 py-2 rounded-md focus:outline-slate-200"
          >
            <option value="choice">Choose a type</option>
            <option value="Text">Text</option>
            <option value="Image">Image</option>
            <option value="Audio">Audio</option>
            <option value="Video">Video</option>
          </select>
        </div>
        <InputField type={"text"} name={"fcustom"} placeHolder={"BD,IND,ENG"} />

        <div className=" text-red-500 cursor-pointer hover:shadow-md hover:bg-red-200 my-2 text-2xl focus:outline-slate-200 hover:p-1
         hover:transition-all"  onClick={handleDelete}>
          X
        </div>
      </div>
    </div>
  );
};

export default InputHero;
