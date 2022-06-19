import { useState } from "react"
import type { Breach } from "../types"

const useBreach = () => {
    const [breaches, setBreaches] = useState<null | Breach[]>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [domain, setDomain] = useState<string>("")

    const getBreach = async () => {
        setLoading(true)
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
        const { hostname } = new URL(tab.url)
        const [_, sld, tld] = hostname.split(".")
        const domain = `${sld}.${tld}`
        setDomain(hostname)
        const reqBreach = `https://haveibeenpwned.com/api/v3/breaches/?domain=${domain}`
        const response: Breach[] = await fetch(reqBreach).then((res) => res.json()) as Breach[]
        if (response.length > 0) setBreaches(response)
        setLoading(false)
    }

    return { breaches, getBreach, domain, loading }
}

export default useBreach