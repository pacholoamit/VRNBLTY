import { useState } from "react"
import { useStorage } from "@plasmohq/storage"
import type { Breach } from "../types"

const useBreach = () => {
    // const [url] = useStorage<null | string>("currentUrl")
    const [breaches, setBreaches] = useState<null | Breach[]>(null)
    const [currentUrl, setCurrentUrl] = useState<string>("")



    const getBreach = async () => {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
        setCurrentUrl(tab.url)
        const reqBreach = `https://haveibeenpwned.com/api/v3/breaches/?domain=${tab.url}`
        const response = await fetch(reqBreach).then((res) => res.json()) as Breach[]

        if (response.length > 0) {
            setBreaches(response)
        }

    }

    return { breaches, getBreach, currentUrl }
}

export default useBreach