import { FormEvent, useState } from 'react'
import {useHistory} from 'react-router-dom'

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'

import {Button} from '../../components/Button'

import {ContainerHome, MainContent} from './styles'

import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'


export function Home() {
    const history = useHistory();
    const {user, signInWithGoogle} = useAuth();

    const[roomCode, setRoomCode] = useState('');


   async function handleCreateRoom() {
       if(!user) {
        await signInWithGoogle()
       }
       history.push('/rooms/new')
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if(roomCode.trim()==='') {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if(!roomRef.exists()) {
            alert("Ops, essa sala não existe!");
            return;
        }

        if(roomRef.val().endedAt) {
            alert("Room already closed.");
            return;
        }
        history.push(`/rooms/${roomCode}`);

        
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

                    <form onSubmit={handleJoinRoom}>
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type="submit"> Entrar na sala</Button>
                    </form>
                </MainContent>
            </main>

        </ContainerHome>
    )
}