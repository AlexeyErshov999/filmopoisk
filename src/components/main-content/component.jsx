import { FilterTab } from "../filter-tab/component"
import { SearchBar } from "../search-bar/component"
import { Films } from "../films/component"
import "./main.css";

export function MainContent() {
    return (
        <div className="main">
            <FilterTab />
            <div className="search-and-films_container">
                <SearchBar />
                <Films />
            </div>
        </div>
    )
}