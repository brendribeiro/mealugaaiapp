import { Container, Content } from './styles';
import { E404 } from '../assets/404';

export function NotFound() {
    return (
        <>
            <Container>
                <E404 />

                <Content>
                    <h2>Ops, parece que você <br /> encontrou o espaço 404</h2>
                    <p>Onde as páginas desaparecem para sempre. Retorne para a <br /> página anterior para continuar a navegação</p>
                </Content>
            </Container>
        </>
    )
}