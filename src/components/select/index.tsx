import React, { useState } from 'react'

import './style.css'

type size = 'small' | 'medium' | 'large'
type data = {
    id: number
    value: string
    icon?: string
}[]
interface iSelect {
    data: data
    header: string
    multiple: boolean
    selectSize?: size
    background?: string
}

export const Select: React.FC<iSelect> = ({
    // eslint-disable-next-line no-shadow
    data,
    header,
    multiple,
    selectSize = 'medium',
    background = '#2f3640',
}) => {
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
            <div className={`select-box ${selectSize}`}>
                <div
                    className={`options-container ${active ? 'active' : ''}`}
                    style={{ backgroundColor: background }}
                >
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
                            />
                            {filtredItem.icon === '' || (
                                <img src={filtredItem.icon} alt=" " />
                            )}
                            <label>{filtredItem.value}</label>
                        </div>
                    ))}
                </div>
                <div
                    className="selected"
                    onClick={() => {
                        setActive(!active)
                        setSearchValue('')
                    }}
                    style={{
                        backgroundColor: background,
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
                        style={{ border: `8px solid ${background}` }}
                    />
                </div>
            </div>
        </div>
    )
}
