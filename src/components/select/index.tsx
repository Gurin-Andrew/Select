import React, { MutableRefObject, useRef, useState } from 'react'
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

    const inputEl = useRef() as MutableRefObject<HTMLInputElement>
    const clearInput = () => {
        inputEl.current.value = ''
    }
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
            <div className="select-box">
                <div className={`options-container ${active ? 'active' : ''}`}>
                    {filtredData.map((filredItem) => (
                        <div
                            className={`option ${
                                selectedOptions.some(
                                    (item: string) => item === filredItem.value
                                )
                                    ? 'isSelected'
                                    : ''
                            }`}
                            key={filredItem.id}
                            onClick={() => {
                                const selectedOption = filredItem.value
                                toggleOption(selectedOption)
                            }}
                        >
                            <input
                                type="radio"
                                className="radio"
                                id={filredItem.value}
                                name="category"
                            />
                            <label htmlFor={filredItem.value}>
                                {filredItem.value}
                            </label>
                        </div>
                    ))}
                </div>
                <div
                    className="selected"
                    onClick={() => {
                        setActive(!active)
                        clearInput()
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
                        ref={inputEl}
                        onChange={(event) => {
                            setSearchValue(event.target.value)
                        }}
                        placeholder="Start Typing..."
                    />
                </div>
            </div>
        </div>
    )
}
