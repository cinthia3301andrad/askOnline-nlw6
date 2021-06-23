import {useHistory} from 'react-router-dom'

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'

import {Button} from '../../components/Button'

import {ContainerHome, MainContent} from './styles'

import { useAuth } from '../../hooks/useAuth'

export function Home() {
    const history = useHistory();
    const {user, signInWithGoogle} = useAuth();


   async function handleCreateRoom() {
       if(!user) {
        await signInWithGoogle()
       }
       history.push('/rooms/new')
    }
    return (
        <ContainerHome>
            <aside>
                <img src={illustrationImg} alt="ilustração perguntas e respostas" />
                <strong>Crie salas de Q&amp; A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>

            <main>
                <MainContent>
                    <img src={logoImg} alt="skOnline" />
                
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="logo da google" />
                        Crie sua sala com o google
                    </button>
                    <div className="separation">ou entre em uma sala</div>

                    <form >
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit"> Entrar na sala</Button>
                    </form>
                </MainContent>
            </main>

        </ContainerHome>
    )
}