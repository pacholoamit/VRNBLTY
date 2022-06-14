import { useState } from "react"
import type { Breach } from "../types"

const useBreach = () => {
    const [breaches, setBreaches] = useState<null | Breach[]>(null)
    const [domain, setDomain] = useState<string>("")

    const getBreach = async () => {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
        const { hostname } = new URL(tab.url)
        const [_, sld, tld] = hostname.split(".")
        const domain = `${sld}.${tld}`
        setDomain(hostname)
        console.log(domain)
        const reqBreach = `https://haveibeenpwned.com/api/v3/breaches/?domain=${domain}`
        const response = await fetch(reqBreach).then((res) => res.json()) as Breach[]

        if (response.length > 0) {
            setBreaches(response)
        }

    }

    return { breaches, getBreach, domain }
}

export default useBreach