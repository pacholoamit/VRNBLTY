import { Center, Container, Group, Loader, Stack, Text, Title } from "@mantine/core"
import React, { useEffect } from "react"
import { ShieldLock } from "tabler-icons-react"

import useBreach from "../hooks/useBreach"
import type { Breach } from "../types"

const BackgroundSvg = require("../../assets/bg.svg") as string


interface localStyles {
    [key: string]: React.CSSProperties
}

const styles: localStyles = {
    container: {
        height: 300,
        width: 300,
        backgroundImage: `url(${BackgroundSvg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
    },
    contents: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8
    },
    title: {
        color: "snow"
    }
}



const Popup = () => {
    const { breaches, getBreach, url } = useBreach()

    useEffect(() => {
        getBreach()
    }, [])

    return (
        <div style={styles.container}>
            <Stack align={"center"} style={styles.contents}>
                <Group position="center" spacing={"xs"}>
                    <ShieldLock size={28} color="snow" />
                    <Title order={3} style={styles.title}>
                        VRNBLTY
                    </Title>
                </Group>
                <Container sx={{ backgroundColor: "#71959A", borderRadius: 25 }}>
                    <Text color={"snow"}>{url}</Text>
                </Container>
            </Stack>
        </div>
    )
}

export default Popup
