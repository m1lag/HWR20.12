export default function IngredientItem({ name, amount }) {
    return (
        <li className="py-2 flex justify-between text-gray-800">
            <span className="font-medium">{name}</span>
            <span className="text-gray-600">{amount}</span>
        </li>
    );
}
