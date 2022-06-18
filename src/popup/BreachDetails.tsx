import { Stack, Text, Button, Collapse } from "@mantine/core"
import React from "react"
import { Database } from "tabler-icons-react"
import type { Breach, styles } from "../types"

const styles: styles = {}

interface BreachDetailsProps {
    breach: Breach
}

const BreachDetails: React.FC<BreachDetailsProps> = ({ breach }) => {
    const [opened, setOpened] = React.useState<boolean>(false)

    const onClick = () => setOpened(!opened)
    return (
        <>
            <Button leftIcon={<Database />} color={'red'} variant={'light'} onClick={onClick}>Date: {breach.BreachDate} </Button>
            <Collapse in={opened}>
                <Text>Name:{breach.Name}</Text>
                <Text>Verified: {breach.IsVerified}</Text>
                <Text>Breach Date{breach.BreachDate}</Text>
                <Text>Domain:{breach.Domain}</Text>
            </Collapse>
        </>
    )
}

export default BreachDetails