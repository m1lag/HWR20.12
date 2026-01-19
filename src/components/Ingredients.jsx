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
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">Інгредієнти</h2>
            <ul className="bg-green-50 rounded-xl shadow-md p-4 divide-y divide-green-200">
                {list.map((item, i) => (
                    <IngredientItem key={i} name={item.name} amount={item.amount} />
                ))}
            </ul>
        </section>
    );
}
