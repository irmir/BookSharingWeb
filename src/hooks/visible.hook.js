import {useState, useEffect, useRef} from 'react'

export const useComponentVisible = (initialVisible) => {
    const [isVisible, setIsVisible] = useState(initialVisible)
    const ref = useRef(null)

    debugger

    const clickOutsideHandler = (event) => {

        if (ref.current && !ref.current.contains(event.target)) {
            setIsVisible(false);
        }
    }
    useEffect(() => {
        document.addEventListener('click', clickOutsideHandler, true)

        return () => document.removeEventListener('click', clickOutsideHandler, true)
    })

    return {ref, isVisible, setIsVisible}

}