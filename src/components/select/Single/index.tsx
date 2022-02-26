import React, { MutableRefObject, useRef, useState } from "react";
import "./style.css"

interface iSelect {
    data: Array<string>,

    header: string
}

export const SingleSelect: React.FC<iSelect> = ({ data, header }) => {

    const optionsData = data
    const [active, setActive] = useState(true)
    const isActive = () => {
        return (
            active ? " active" : ""
        )
    }
    const inputEl = useRef() as MutableRefObject<HTMLInputElement>;
    const clearInput = () => {
        inputEl.current.value = ""
    }
    const [choose, setChoose] = useState(header)
    const [searchValue, setSearchValue] = useState('')
    let filtredData = optionsData.filter(item => String(item.toLowerCase()).indexOf(searchValue.toLowerCase()) != -1)
    return (<div className="container">
        <h2 >{header} </h2>
        < div className="select-box">
            <div className={"options-container" + isActive()}>


                {filtredData.map((data, index) => (
                    <div className="option" onClick={
                        () => {
                            setChoose(data)
                            setActive(!active)
                        }



                    }>
                        <input type="radio" className="radio" key={index} id={data} name="category" />
                        <label htmlFor={data}>{data}</label>

                    </div>
                ))}

            </div>
            <div className="selected" onClick={() => {
                setActive(!active)
                clearInput()
                setSearchValue('')

            }

            }>
                {choose}
            </div>
            <div className="search-box">
                <input type="text" ref={inputEl} onChange={(event) => setSearchValue(event.target.value)} placeholder="Start Typing..." />
            </div>
        </div>


    </div >

    )
}
