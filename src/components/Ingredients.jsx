import IngredientItem from "./IngredientItem";

export default function Ingredients() {
    const list = [
        { name: "Борошно", amount: "500 г" },
        { name: "Яйце", amount: "1 шт" },
        { name: "Вода", amount: "200 мл" },
        { name: "Фарш (свинина+яловичина)", amount: "400 г" },
        { name: "Цибуля", amount: "1 шт" },
        { name: "Сіль, перець", amount: "за смаком" },
    ];

    return (
        <section>
            <h2>Інгредієнти</h2>
            <ul>
                {list.map((item, i) => (
                    <IngredientItem key={i} name={item.name} amount={item.amount} />
                ))}
            </ul>
        </section>
    );
}