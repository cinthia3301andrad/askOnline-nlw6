import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'

import {Button} from '../../components/Button'
import {ContainerNewRoom, MainContent} from './styles'

export function NewRoom() {
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
                    <p>Quer entrar em uma sala existente? <a href="#">clique aqui</a></p>
                </MainContent>
            </main>

        </ContainerNewRoom>
    )
}