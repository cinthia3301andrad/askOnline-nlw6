import {useHistory, useParams} from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
import { Button } from '../../components/Button';
import { Question } from '../../components/question';
import {RoomCode} from '../../components/roomCode';
import { useRoom } from '../../hooks/useRoom';

import ReactTooltip from 'react-tooltip';

import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

import {ContainerRoom} from './styles';
import { database } from '../../services/firebase';

type RoomParams = {
    id: string;
}
export function AdminRoom() {
    // const {user} = useAuth();
    const params = useParams<RoomParams>();
    const roomId = params.id;

    const history  = useHistory();

    const {title, questions} = useRoom(roomId);

    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date(),
        });

        history.push('/')
        
    }

    async function handleDeleteQuestion(questionId: string) {
        if(window.confirm("Deseja realmente remover essa pergunta?")) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    async function handleCheckQuestion(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true,
        })
    }
    async function handleHighlightQuestion(questionId: string) {
       
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighlighted: true,
        })
    }
    return (
       <ContainerRoom>
           <header>
               <div className="content">
                   <img src={logoImg} alt="logo da aplicação" />
                   <h1>Gerencie suas perguntas</h1>
                  <div><RoomCode  code={roomId}/>
                  <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button></div>
               </div>
           </header>

           <main>
               <div className="room-title">
                   <h1>Sala {title}</h1>
                   {
                       questions.length > 0 && <span>{questions.length} pergunta(s)</span>
                   }

               </div>

               <div className="question-list">
               {
                   questions.map(question => {
                       return (
                           <Question 
                                key={question.id} 
                                content={question.content} 
                                author={question.author}
                                isAnswered={question.isAnswered}
                                isHighlighted={question.isHighlighted}
                            >
                              {
                                  !question.isAnswered && (
                                      <>
                                          <button
                                                data-tip data-for={`${question.id}respondida`}
                                                type="button"
                                                onClick={()=> handleCheckQuestion(question.id)}
                                            >
                                                <img src={checkImg} alt="Marcar pergunta como respondida" />

                                            </button>
                                            <button
                                                data-tip data-for={`${question.id}destaque`}
                                                type="button"
                                                onClick={()=> handleHighlightQuestion(question.id)}
                                            >
                                                <img src={answerImg} alt="Dar destaque à pergunta" />

                                            </button>
                                            <ReactTooltip id={`${question.id}respondida`}
                                                place="top" 
                                                backgroundColor="#50BEF7"
                                                effect="solid">
                                                Marcar como respondida
                                            </ReactTooltip>
                                            <ReactTooltip id={`${question.id}destaque`}
                                                place="top" 
                                                backgroundColor="#50BEF7"
                                                effect="solid">
                                                Destacar pergunta
                                            </ReactTooltip>
                                      </>
                                  )
                              }
                                <button
                                data-tip data-for={`${question.id}remove`}
                                    type="button"
                                    onClick={()=> handleDeleteQuestion(question.id)}
                                >
                                    <img src={deleteImg} alt="Remover pergunta" />

                                </button>
                                <ReactTooltip id={`${question.id}remove`}
                                            place="top" 
                                            backgroundColor="#50BEF7"
                                            effect="solid">
                                            Remover pergunta
                                        </ReactTooltip>
                                
                            </Question>
                       )
                   })
               }
               </div>
           </main>

       </ContainerRoom>
    )
}