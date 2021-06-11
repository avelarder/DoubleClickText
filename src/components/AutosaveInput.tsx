import React, { useState, MouseEvent } from 'react'


type AutosaveInputProps = {
    initValue: string,
    onChangeDelegate: (value: string) => void
}

function AutosaveInput(props: AutosaveInputProps) {
    const [toggle, setToggle] = useState(false);
    const [initValue, setInitValue] = useState(props.initValue)

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        props.onChangeDelegate(e.currentTarget.value);
    }
    const handleOnDoubleClick = (e: MouseEvent<HTMLParagraphElement | undefined>) => {
        setToggle(prevState => !prevState)
    }
    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" || e.key === "Tab") {
            props.onChangeDelegate(e.currentTarget.value);
            setInitValue(e.currentTarget.value)
            setToggle(prevState => !prevState)
        }
        if (e.key === "Escape") {
            props.onChangeDelegate(props.initValue);
            setToggle(prevState => !prevState)
        }
    }

    return !toggle ?
        (<p onDoubleClick={handleOnDoubleClick}>{initValue}</p>)
        :
        (
            <div>
                <input type="text" placeholder={initValue} onChange={handleOnChange} onKeyDown={handleOnKeyDown} />
            </div>
        )
}

export default AutosaveInput
