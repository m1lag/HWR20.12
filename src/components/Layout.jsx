export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-blue-100 flex flex-col items-center justify-center p-6">
            <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-3xl w-full text-gray-800">
                {children}
            </div>
        </div>
    );
}
