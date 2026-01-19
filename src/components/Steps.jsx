import StepItem from "./StepItem";

export default function Steps() {
    const steps = [
        "Замісити тісто з борошна, яйця та води.",
        "Приготувати фарш з м’яса та цибулі.",
        "Розкачати тісто та вирізати кружечки.",
        "Викласти фарш, зліпити пельмені.",
        "Варити у підсоленій воді 10-15 хвилин.",
    ];

    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-orange-700 mb-3">Приготування</h2>
            <ol className="list-decimal list-inside bg-orange-50 rounded-xl shadow-md p-4 space-y-2">
                {steps.map((s, i) => (
                    <StepItem key={i} text={s} />
                ))}
            </ol>
        </section>
    );
}
