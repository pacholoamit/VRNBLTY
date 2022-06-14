import { useState } from "react"
import type { Breach } from "../types"

const useBreach = () => {
    const [breaches, setBreaches] = useState<null | Breach[]>(null)
    const [domain, setDomain] = useState<string>("")

    const getBreach = async () => {
        const [tab]: chrome.tabs.Tab[] = await chrome.tabs.query({ active: true, currentWindow: true })
        const { hostname }: URL = new URL(tab.url)
        const [_, sld, tld]: string[] = hostname.split(".")
        const domain: string = `${sld}.${tld}`
        setDomain(hostname)
        const reqBreach: string = `https://haveibeenpwned.com/api/v3/breaches/?domain=${domain}`
        const response: Breach[] = await fetch(reqBreach).then((res) => res.json()) as Breach[]
        if (response.length > 0) {
            setBreaches(response)
        }

    }

    return { breaches, getBreach, domain }
}

export default useBreach