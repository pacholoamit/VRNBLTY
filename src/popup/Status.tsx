import { vulnerableStatus, secureStatus } from "../constants"
import { Text, Stack, Button, Modal, ScrollArea, Badge, ActionIcon } from '@mantine/core'
import type { Breach, styles } from "../types"
import React from "react"
import { Check, X } from "tabler-icons-react"
import BreachDetails from "./BreachDetails"

const styles: styles = {
    statusText: {
        backgroundColor: "#71959A",
    },
    scrollArea: {
        height: "150px"
    }
}

interface StatusProps {
    breaches: Breach[]
}


const Status: React.FC<StatusProps> = ({ breaches }) => {
    const [opened, setOpened] = React.useState<boolean>(false)
    const imageSrc = breaches ? vulnerableStatus : secureStatus
    const badgeText = breaches ? `${breaches.length} data breach(es) have occured` : "No breaches"
    const badgeColor = breaches ? "red" : "green"
    const leftSection = (
        <ActionIcon size='xs' color={badgeColor} radius={'xl'} variant={'transparent'}>
            {breaches ? <X size={14} /> : <Check size={14} />}
        </ActionIcon>
    )

    const onClick = () => setOpened(!opened)

    return (
        <>
            <img src={imageSrc} width="120" />
            <Badge radius={'xl'} variant={'light'} color={badgeColor} onClick={onClick} leftSection={leftSection}>{badgeText}</Badge>
            <Modal styles={{ modal: { backgroundColor: '#d53867' } }} opened={opened} withCloseButton={false} onClose={() => setOpened(false)}>
                <ScrollArea style={styles.scrollArea}>
                    <Stack>
                        {breaches?.map((breach) => <BreachDetails breach={breach} key={breach.Name} />)}
                    </Stack>
                </ScrollArea>
            </Modal>
        </>
    )
}

export default Status