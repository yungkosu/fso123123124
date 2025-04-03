import { useState } from 'react'

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const StatisticLine = ({text, value}) => {
 return (
     <td>{text} {value}</td>
 )
}

const Statistics = ({good, neutral, bad, total, average, positive}) => {
    if (good === 0 && bad === 0 && neutral === 0) {
        return (
            <p>No feedback given</p>
        )
    }
    return (
    <table>
        <tbody>
        <tr>
            <StatisticLine text="good" value={good} />
        </tr>
        <tr>
            <StatisticLine text="neutral" value={neutral} />
        </tr>
        <tr>
                <StatisticLine text="bad" value={bad} />
        </tr>
        <tr>
            <StatisticLine text="total" value={total} />

        </tr>
        <tr>
            <StatisticLine text="average" value={average} />

        </tr>
        <tr>
            <StatisticLine text="positive" value={positive} />

        </tr>

        </tbody>
    </table>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const total = good + bad + neutral
    const average = (good - bad) / total
    const percentage = (good / total) * 100

    const goodReviews = () => {
        const updatedGood = good + 1
        setGood(updatedGood)
    }

    const neutralReviews = () => {
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
    }

    const badReviews = () => {
        const updatedBad = bad + 1
        setBad(updatedBad)
    }

    return (
        <div>
            <h1>return feedback</h1>
            <Button handleClick={goodReviews} text={"good"} />
            <Button handleClick={neutralReviews} text={"neutral"} />
            <Button handleClick={badReviews} text={"bad"} />
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} total = {total} average={average} positive={percentage} />
        </div>
    )
}

export default App