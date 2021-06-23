import {Link} from 'react-router-dom'
import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'

import {ContainerNewRoom, MainContent} from './styles'
import {Button} from '../../components/Button'

import { useAuth } from '../../hooks/useAuth'


export function NewRoom() {

    const {user} = useAuth();
    return (
        <ContainerNewRoom>
            <aside>
                <img src={illustrationImg} alt="ilustração perguntas e respostas" />
                <strong>Crie salas de Q&amp; A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>

            <main>
                <MainContent>
                    <img src={logoImg} alt="skOnline" />
                    <h2>Criar uma nova sala</h2>
                
                    <form >
                        <input 
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to={"/"}>clique aqui</Link></p>
                </MainContent>
            </main>

        </ContainerNewRoom>
    )
}