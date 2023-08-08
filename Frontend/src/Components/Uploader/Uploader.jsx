import React from "react";

function Uploader() {
  return (
    <div className="h-full w-full flex justify-center items-center bg-red-300/30">
      <div className="w-[350px] border p-2 border-black">
        <img
          className="w-[200px] h-[200px] mx-auto object-contain"
          src="https://images.unsplash.com/photo-1684702321656-adac7d9ac477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        />
        <div>
          <div className="mx-auto w-full mt-10">
            <input className="border" type="file" name="image"/>
            <br />
            <select lassName="text-black mx-auto" name="image" c id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uploader;
