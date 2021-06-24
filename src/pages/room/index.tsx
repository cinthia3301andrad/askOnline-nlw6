import { useState } from 'react'
import {useParams} from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import { Button } from '../../components/Button'
import {RoomCode} from '../../components/roomCode'
import { useAuth } from '../../hooks/useAuth'

import {ContainerRoom} from './styles'

type RoomParams = {
    id: string;
}
export function Room() {
    const user = useAuth();
    const params = useParams<RoomParams>();
    const roomId = params.id;

    const[newQuestion, setNewQuestion] = useState('');

    async function handleSendQuestion() {
        if(newQuestion.trim()===""){
            return;
        }
        
    }
    return (
       <ContainerRoom>
           <header>
               <div className="content">
                   <img src={logoImg} alt="logo da aplicação" />
                  <RoomCode  code={roomId}/>
               </div>
           </header>

           <main>
               <div className="room-title">
                   <h1>Sala React</h1>
                   <span>4 perguntas</span>

               </div>

               <form >
                   <textarea 
                        placeholder="O que você quer perguntar?"
                        onChange={event => setNewQuestion(event.target.value)}
                        value={newQuestion}
                   />

                   <div className="form-footer">
                       <span>Para enviar uma pergunta, <button>faça seu login</button></span>
                       <Button type="submit">Enviar pergunta</Button>
                   </div>
               </form>
           </main>

       </ContainerRoom>
    )
}