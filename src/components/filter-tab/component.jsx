import "./style.css";

export function FilterTab() {
  return (
    <div className="filter-tab">
      <p className="fiter-tab_title">Фильтр</p>
      <div className="filters">
        <div className="filter-field">
          <p className="filter-label"></p>
            Жанр
            <select className="genre-select">
              <option value="">Выберите жанр</option>
            </select>
        </div>
        <div className="filter-field">
          <p className="filter-label"></p>
            Год выпуска
            <select className="year-select">
              <option value="">Выберите год</option>
            </select>
        </div>
      </div>
    </div>
  );
}
