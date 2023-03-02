import React from "react"
import './Son.css'
interface User {
    name: string;
    age: number;
}
const temp = (
    <>
        <h1>temp</h1>
    </>
)
const tmp = React.createElement('span', { className: 'my-son' }, 'react-temp')
function merge(user:User) {
    return '我叫' + user.name + '今年' + user.age
}
function Son() {
    const user: User = {
        name: '大飞',
        age: 30
    }
    return (
        <>
            <div className="my-son">我是子组件.{ merge(user) }</div>
            { temp }
            <br />
            { tmp }
        </>
    )
}
export default Son