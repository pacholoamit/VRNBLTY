import { Stack, Text, Button, Collapse, List, Center, Title } from "@mantine/core"
import React from "react"
import { Ce, Database } from "tabler-icons-react"
import type { Breach, styles } from "../types"

const styles: styles = {
    img: {
        backgroundColor: 'snow',
        marginRight: 10
    },
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
            <Center>
                <img src={breach.LogoPath} alt={breach.Name} height='30' width={'30'} style={styles.img} />
                <Title style={styles.text} order={5}>{breach.Name} Breaches</Title>
            </Center>
            <Button leftIcon={<Database />} color={'red'} variant={'light'} onClick={onClick}>Date: {breach.BreachDate} </Button>
            <Collapse in={opened}>
                <List style={styles.text}>
                    <List.Item>Domain: {breach.Domain}</List.Item>
                    <List.Item>Users: {breach.PwnCount.toLocaleString()}</List.Item>
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