
    import type { CSSProperties } from "react";
    
    const Name = 'Fernando';
    const lastName = 'Herrera';

    const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
    const isActive = true;

    const address = {
        zipCode: 'ABC-123',
        country: 'Canada',
    }

    const myStyles: CSSProperties = {
        backgroundColor: '#fafafaf',
        borderRadius: 20,
        padding: 10,
        marginTop:30,
    }

export const MyAwesomeApp = () => {
    return (
        <>
        <h1> {Name} </h1>
        <h3> {lastName} </h3>

        <p>{favoriteGames.join(', ')}</p>
        <p>{2 + 2}</p>

        <h1>{isActive ? 'Activo' : 'No activo'}</h1>

        <p
        style={myStyles}>{ JSON.stringify(address) }
        </p>
        </>
    );
};