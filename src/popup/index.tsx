import React from "react"
import useBreach from "../hooks/useBreach"
import Status from "./Status"
import { ShieldLock } from "tabler-icons-react"
import { backgroundSvg } from "../constants"
import type { styles } from "../types"
import {
    Center,
    Container,
    Group,
    Loader,
    Stack,
    Text,
    Title
} from "@mantine/core"



const styles: styles = {
    container: {
        height: 300,
        width: 300,
        backgroundImage: `url(${backgroundSvg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
    },
    contents: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    extensionTitleContainer: {
        paddingTop: 16
    },
    title: {
        color: "snow"
    },
    domain: {
        backgroundColor: "#71959A",
        borderRadius: 25
    },
    status: {
        marginTop: 12
    }
}

const ExtensionTitle: React.FC = () => {
    return (
        <Group position="center" spacing={"xs"} style={styles.extensionTitleContainer}>
            <ShieldLock size={28} color="snow" />
            <Title order={3} style={styles.title}>
                VRNBLTY
            </Title>
        </Group>)
}

const DomainComponent: React.FC<{ domain: string }> = ({ domain }) => {
    return (
        <Container style={styles.domain}>
            <Text color={"snow"}>{domain}</Text>
        </Container>
    )
}

const Popup = () => {
    const { breaches, getBreach, domain, loading } = useBreach()

    React.useEffect(() => { getBreach() }, [domain])
    return (
        <div style={styles.container}>
            <Stack align={"center"} style={styles.contents}>
                <ExtensionTitle />
                <DomainComponent domain={domain} />
                {loading ? <Loader size={'xl'} /> : <Status breaches={breaches} />}
            </Stack>
        </div>

    )
}

export default Popup
