import { FormEvent, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'

import {ContainerNewRoom, MainContent} from './styles'
import {Button} from '../../components/Button'

import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'



export function NewRoom() {
    const history = useHistory();

    const[newRoom, setNewRoom] = useState('');

    const {user} = useAuth();

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        console.log(newRoom);

        if(newRoom.trim() === ''){
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        });

        history.push(`/rooms/${firebaseRoom.key}`)

    }
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
                
                    <form onSubmit={handleCreateRoom}>
                        <input 
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to={"/"}>clique aqui</Link></p>
                </MainContent>
            </main>

        </ContainerNewRoom>
    )
}