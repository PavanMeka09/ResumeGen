import { Navbar } from "../components/Navbar.jsx"
import { Form } from "../components/Form.jsx"
import { Card } from "../components/Card.jsx"

export const Generate = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col flex-wrap">
        <h1 className="text-2xl m-6">Select a template</h1>
        <div className="flex justify-center items-center gap-4">
            <Card title='Vertical' image="vertical.jpg"/>
            <Card title='Horizontal' image="horizontal.jpeg"/>
        </div>
      </div>
    </>
  )
}