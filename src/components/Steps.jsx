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
        <section>
            <h2>Приготування</h2>
            <ol>
                {steps.map((s, i) => (
                    <StepItem key={i} text={s} />
                ))}
            </ol>
        </section>
    );
}