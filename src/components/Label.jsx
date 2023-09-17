import React from "react";


const LabelInput = ({text, solved, sw}) => {
    return( 
        <>
        <div id={sw == 1 ? "text": "solution"} className="bg-white w-full h-10 p-7 rounded-xl font-medium text-2xl text-slate-400 text-left flex items-center content-end flex-row-reverse">
            {sw == 1 ? text : solved}
        </div>
        </>
    );
}
export default LabelInput;