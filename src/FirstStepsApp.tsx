import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string
    quantity: number;
}

const ItemsInCart: ItemInCart[] = [
    { productName: 'Nintendo Switch 2', quantity: 1 },
    { productName: 'Pro Controller', quantity: 2 },
    { productName: 'Super Smash', quantity: 5 },
];


export function FirstStepsApp() {
    return (
    <>
        <h1>Carrito de compras</h1>
        {ItemsInCart.map(( { productName, quantity } ) => (
            <ItemCounter key={productName} name={productName} quantity={quantity} />
        ))}

        {/* <ItemCounter name="Zelda: Tears of Kingdom" quantity={5} />
        <ItemCounter name="Mario Kart 8 Deluxe" quantity={12} />
        <ItemCounter name="Animal Crossing" quantity={7} />
        <ItemCounter name="Pokemon Scarlet" quantity={15} /> */}

    </>
 );
}       




