
import { ReactNode } from 'react'
import {ContainerQuestion} from './styles'

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
    children?: ReactNode;
}
export function Question({content, author, children}: QuestionProps) {
    return (
        <ContainerQuestion>
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