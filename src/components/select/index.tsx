import React, { useState } from 'react'

import './style.css'

type Size = 'small' | 'medium' | 'large'
type Data = {
    id: number
    value: string
    icon?: string
}[]
interface SelectInterface {
    data: Data
    header: string
    multiple: boolean
    selectSize?: Size
    background?: string
}

export const Select: React.FC<SelectInterface> = ({
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
                            <label>{filtredItem.value}</label>
                            {filtredItem.icon && (
                                <img src={filtredItem.icon} alt="Icon" />
                            )}
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
                    {selectedOptions.length
                        ? selectedOptions.join(', ')
                        : header}
                </div>
                <div className="search-box">
                    <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value || '')}
                        placeholder="Start Typing..."
                        style={{ border: `8px solid ${background}` }}
                    />
                </div>
            </div>
        </div>
    )
}
