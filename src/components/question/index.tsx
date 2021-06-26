
import { ReactNode } from 'react'
import {ContainerQuestion} from './styles'

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
    children?: ReactNode;
    isAnswered?:boolean;
    isHighlighted?: boolean,
}
export function Question({content, author, children, isAnswered=false, isHighlighted=false}: QuestionProps) {
    return (
        <ContainerQuestion isAnswered={isAnswered} isHighlighted={isHighlighted}>
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div>
                    {
                        children
                    }
                </div>
            </footer>
        </ContainerQuestion>
    )
}