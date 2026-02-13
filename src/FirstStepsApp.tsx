import { ItemCounter } from "./shopping-cart/ItemCounter";


export function FirstStepsApp() {
    return (
    <>
        <h1>Carrito de compras</h1>

        <ItemCounter name="Nintendo Switch 2" quantity={3}/>
        <ItemCounter name="Pro Controller" quantity={23} />
        <ItemCounter name="Super Smash"  quantity={9}/>
        <ItemCounter name="Super Mario"  quantity={8}/>
    </>
 );
}       