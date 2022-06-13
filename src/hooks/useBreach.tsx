import { useState } from "react"
import { useStorage } from "@plasmohq/storage"
import type { Breach } from "../types"

const useBreach = () => {
    const [breaches, setBreaches] = useState<null | Breach[]>(null)
    const [url] = useStorage<null | string>("currentUrl")

    const getBreach = async () => {
        if (!url) return
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true, lastFocusedWindow: true })
        console.log(tab)
        const reqBreach = `https://haveibeenpwned.com/api/v3/breaches/?domain=${url}`
        const response = await fetch(reqBreach).then((res) => res.json()) as Breach[]

        if (response.length > 0) {
            setBreaches(response)
        }

    }

    return { breaches, getBreach, url }
}

export default useBreach