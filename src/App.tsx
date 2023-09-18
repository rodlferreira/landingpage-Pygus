import './App.css'
import fundo from "./assets/fundo_.png"

export function App() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">Restart</h1>
      <div className="flex bg-cover">
        <img className="flex w-2 h-2 md:w-32 lg:w-48" src={fundo}/>
      </div>

    </>
  )
}
