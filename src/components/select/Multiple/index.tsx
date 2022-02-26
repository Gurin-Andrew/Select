import React, { MutableRefObject, useRef, useState } from "react";
import "./style.css"

interface iSelect {
    data: Array<string>,

    header: string
}
export const MultipleSelect: React.FC<iSelect> = ({ data, header }) => {
    return (
        <div className="container">
            <h2>{header}</h2>
            <div className="select-box">
                <div className="option-container"></div>
                {data.map((data, index) => (
                    <div className="option">
                        <input type="checkbox" className="check" key={index} id={data} name="category" />
                        <label htmlFor={data}>{data}</label>

                    </div>
                ))}
            </div>

            <div className="">
                {header}
            </div>
        </div>
    )
}