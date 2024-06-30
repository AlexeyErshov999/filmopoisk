import "./style.css"

export function Header(props) {
    return (
        <div className="header">
            <p className="header-title">{props.title}</p>
            <div className="header-navigation">
                <p></p>
                <button type="button" className="header-button">
                    <p className="header-button_text">Войти</p>
                </button>
            </div>
        </div>
    )
}