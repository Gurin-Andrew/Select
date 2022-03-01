import React, { useState } from 'react'

import './style.css'

type data = {
    id: number
    value: string
    icon?: string
}[]
interface iSelect {
    data: data
    header: string
    multiple: boolean
}

// eslint-disable-next-line no-shadow
export const Select: React.FC<iSelect> = ({ data, header, multiple }) => {
    const [active, setActive] = useState(true)
    const [selectedOptions, setSelectedOptions] = useState<Array<string>>([])
    const [searchValue, setSearchValue] = useState('')
    const toggleOption = (selectedOption: string) => {
        if (multiple) {
            if (selectedOptions.some((option) => option === selectedOption)) {
                setSelectedOptions(
                    [...selectedOptions].filter(
                        (item) => item !== selectedOption
                    )
                )
            } else {
                setSelectedOptions([...selectedOptions, selectedOption])
            }
        } else if (
            selectedOptions.some((option) => option === selectedOption)
        ) {
            setSelectedOptions([])
        } else {
            setActive(!active)
            setSelectedOptions([selectedOption])
        }
    }
    const filtredData = data.filter(
        (item) =>
            String(item.value.toLowerCase()).indexOf(
                searchValue.toLowerCase()
            ) !== -1
    )
    const getInputValue = (
        e: { target: { value: React.SetStateAction<string> } } | undefined
    ) => {
        if (e !== undefined) {
            setSearchValue(e.target.value)
        } else {
            setSearchValue('')
        }
    }
    return (
        <div className="container">
            <h2>{header} </h2>
            <div className="select-box">
                <div className={`options-container ${active ? 'active' : ''}`}>
                    {filtredData.map((filtredItem) => (
                        <div
                            className={`option ${
                                selectedOptions.some(
                                    (item: string) => item === filtredItem.value
                                )
                                    ? 'isSelected'
                                    : ''
                            }`}
                            key={filtredItem.id}
                            onClick={() => {
                                const selectedOption = filtredItem.value
                                toggleOption(selectedOption)
                            }}
                        >
                            <input
                                type="radio"
                                className="radio"
                                id={filtredItem.value}
                                name="category"
                                style={{
                                    backgroundImage: `url(${filtredItem.icon})`,
                                }}
                            />
                            {filtredItem.icon === '' || (
                                <img src={filtredItem.icon} alt=" " />
                            )}
                            <label htmlFor={filtredItem.value}>
                                {filtredItem.value}
                            </label>
                        </div>
                    ))}
                </div>
                <div
                    className="selected"
                    onClick={() => {
                        setActive(!active)
                        setSearchValue('')
                    }}
                >
                    {selectedOptions.length === 0
                        ? header
                        : selectedOptions.join(', ')}
                </div>
                <div className="search-box">
                    <input
                        type="text"
                        value={searchValue}
                        onChange={getInputValue}
                        placeholder="Start Typing..."
                    />
                </div>
            </div>
        </div>
    )
}
