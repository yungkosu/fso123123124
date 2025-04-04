const Course = ({course}) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}


const Header = ({course}) => {
    console.log(course)
    return (
        <h1>{course.name}</h1>
    )
}

const Part = ({part}) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}
const Content = ({course}) => {
    return (
        <>
            {course.parts.map(part => (
                <Part key={part.id} part={part} />
            ))}
        </>
    )
}

const Total = ({course}) => {
    const total = course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0);
    return (
             <p>Total of {total} exercises</p>
    )
}


const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Additional information',
                exercises: 45,
                id: 4
            },
        ]
    }

    return <Course course={course} />
}

export default App
