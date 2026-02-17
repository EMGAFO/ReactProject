import { ItemCounter } from "./shopping-cart/ItemCounter";


export function FirstStepsApp() {
    return (
    <>
        <h1>Carrito de compras</h1>
        <ItemCounter name="Zelda: Tears of Kingdom" quantity={5} />
        <ItemCounter name="Mario Kart 8 Deluxe" quantity={12} />
        <ItemCounter name="Animal Crossing" quantity={7} />
        <ItemCounter name="Pokemon Scarlet" quantity={15} />
        <ItemCounter name="Pokemon Violet" quantity={14} />
        <ItemCounter name="Splatoon 3" quantity={6} />
        <ItemCounter name="Metroid Dread" quantity={4} />
        <ItemCounter name="Joy-Con Pair" quantity={20} />
        <ItemCounter name="Carry Case" quantity={30} />
        <ItemCounter name="Screen Protector" quantity={50} />
    </>
 );
}       




