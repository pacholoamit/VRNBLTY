import { useState } from "react"
import { useStorage } from "@plasmohq/storage"
import type { Breach } from "../types"

const useBreach = () => {
    const [breaches, setBreaches] = useState<null | Breach[]>(null)
    const [url] = useStorage<null | string>("currentUrl", "")

    const getBreach = async () => {

        const reqBreach = `https://haveibeenpwned.com/api/v3/breaches/?domain=${url}`
        const response = await fetch(reqBreach).then((res) => res.json()) as Breach[]
        console.log(url)
        if (response.length > 0) {
            setBreaches(response)
        }

    }

    return { breaches, getBreach, url }
}

export default useBreach