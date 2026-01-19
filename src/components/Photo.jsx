export default function Photo() {
    return (
        <section className="text-center">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">Готове фото</h2>
            <img
                src="/pelmeni.jpg"
                alt="Готові пельмені"
                className="rounded-2xl shadow-xl mx-auto transition-transform hover:scale-105 duration-300"
                width="400"
            />
        </section>
    );
}
