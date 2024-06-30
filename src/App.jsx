import { Header } from "./components/header/component"
import { MainContent } from "./components/main-content/component"
import { Main } from "./components/main/component"

import "./styles/app.css"

export function App() {
  return (<div className="app">
    <Header title="Фильмопоиск" />
    <Main />
  </div>
  )
};
