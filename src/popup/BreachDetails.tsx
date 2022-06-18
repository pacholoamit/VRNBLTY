import { Stack, Text, Button, Collapse, List } from "@mantine/core"
import React from "react"
import { Database } from "tabler-icons-react"
import type { Breach, styles } from "../types"

const styles: styles = {
    text: {
        color: "snow"
    }
}

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
                <List style={styles.text}>
                    <List.Item>Domain: {breach.Domain}</List.Item>
                    <List.Item>Affected: {breach.PwnCount} users</List.Item>
                    <List.Item>Data Breached: </List.Item>
                    <List style={styles.text} withPadding >
                        {breach?.DataClasses?.map((dataClass) => (
                            <List.Item key={dataClass}>{dataClass}</List.Item>
                        ))}
                    </List>
                </List>
            </Collapse>
        </>
    )
}

export default BreachDetails