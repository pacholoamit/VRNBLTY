import type { PlasmoContentScript } from "plasmo"
import { Storage } from '@plasmohq/storage'


export const config: PlasmoContentScript = {
    matches: ["<all_urls>"],
    all_frames: true,

}

const storage = new Storage();

const checkActiveTabUrl = async () => {
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true })

    await storage.set("currentUrl", tab.url)

}


window.setTimeout(checkActiveTabUrl, 500)







