import { Container, Button } from "@mui/material"
import { TopFooterBody, TopFooterBrow, TopFooterWrapper, TopFooterCta, TopFooterButton, TopFooterCounter } from "./footer.styles";

const FooterTop = () => {
    return (
        <Container style={TopFooterWrapper} disableGutters={true} maxWidth={false}>
            <Container style={TopFooterBody}>
                <Container style={TopFooterBrow}>
                <h4 style={TopFooterCounter}>3 STRONG AND COUNTING</h4>
                </Container>
                <h2>JOIN MY FREE FAN CLUB TO BECOME A 5TH MEMBER OF METALLICA</h2>
                <Container style={TopFooterCta}>
                    <Button size={"large"} variant={"outlined"} style={TopFooterButton}>Sign Up Today</Button>
                </Container>
            </Container>

        </Container>
    )
}

export default FooterTop;