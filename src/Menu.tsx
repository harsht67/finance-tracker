import React, { useContext } from 'react'
import ThemeContext, { ThemeContextProps } from './ThemeContext'

function Menu() {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <aside>

            <h1>
                Title
            </h1>

            <ul>
                <li>Placeholder 1</li>
                <li>Placeholder 2</li>
                <li>Placeholder 3</li>
            </ul>

            <button onClick={toggleTheme}>
                {theme}
            </button>

        </aside>
    )
}

export default Menu;