
const CallToActionCard = () => {
  return (
    <>
        <Link href="/projects" className="group">
        <div className="p-6 rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Command className="w-6 h-6 text-green-500" />
                <span className="text-xl">What I built</span>
            </div>
            <span className="text-yellow-500 group-hover:translate-x-2 transition-transform duration-300">
                Projects →
            </span>
        </div>
        </Link>
    </>
  );
};

export default CallToActionCard;