/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useRef, useState } from 'react'

interface Props {
    sentences: JSX.Element[]
    className: string
}

const HomeSentencesComponent: FC<Props> = ({ sentences, className }) => {
    const [randomSentence, setRandomSentence] = useState(<></>)

    const lastRandomSentence = useRef<JSX.Element>(sentences[0])

    useEffect(() => {
        const interval = setInterval(() => {
            const filteredSentences = sentences.filter(
                s => s !== lastRandomSentence.current
            )

            const randomIndex = Math.floor(
                Math.random() * filteredSentences.length
            )
            const newRandomSentence = filteredSentences[randomIndex]

            lastRandomSentence.current = newRandomSentence

            setRandomSentence(newRandomSentence)
        }, 1200)

        return () => clearInterval(interval)
    }, [])

    return <h2 className={className}>{randomSentence}</h2>
}

export default HomeSentencesComponent
