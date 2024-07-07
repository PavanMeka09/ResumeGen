import { Navbar } from "../components/Navbar.jsx"
import { Form } from "../components/Form.jsx"
import { Card } from "../components/Card.jsx"

export const Generate = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center flex-col flex-wrap bg-zinc-100 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100">
        <h1 className="text-2xl m-6">Select a template</h1>
        <div className="flex justify-center items-center gap-4">
            <Card title='Vertical' image="vertical.jpg"/>
            <Card title='Horizontal' image="horizontal.jpeg"/>
        </div>
      </div>
    </>
  )
}