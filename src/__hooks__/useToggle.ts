import { useState } from "react"

const useToggle = (defaultValue: boolean = false) => {
    const [state, setState] = useState(defaultValue)
    return {
        state,
        toggleState: () => setState(s => !s),
        setState
    }
}

export default useToggle;