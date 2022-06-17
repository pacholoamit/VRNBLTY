import { vulnerableStatus, secureStatus } from "../constants"
import { Modal } from '@mantine/core'
import type { Breach, styles } from "../types"
import React from "react"



const styles: styles = {
    statusText: {
        backgroundColor: "#71959A",

    },

}

interface StatusProps {
    breaches: Breach[]
}

const Status: React.FC<StatusProps> = ({ breaches }) => {
    const src = breaches ? vulnerableStatus : secureStatus
    const [opened, setOpened] = React.useState(false)

    const onMouseOver = () => setOpened(!opened)
    return (
        <>
            <Modal opened={opened} onClose={() => setOpened(false)} title={"Data Breaches"}>

            </Modal>
            <img src={src} width="150" onMouseOver={onMouseOver} />
        </>
    )
}

export default Status