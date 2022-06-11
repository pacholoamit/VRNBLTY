import type { PlasmoContentScript } from "plasmo"
import { Storage } from '@plasmohq/storage'


export const config: PlasmoContentScript = {
    matches: ["<all_urls>"],
    all_frames: true,
    run_at: "document_idle"
}

const storage = new Storage();

const checkUrl = async () => await storage.set("currentUrl", document.location.hostname);

window.setTimeout(checkUrl, 500)







