

const productNames = ["Golden Panjeeri", "Nutty Makhana", "Granola bars"];

// Multiplied for seamless looping
const scrollList = [...productNames, ...productNames, ...productNames, ...productNames];
function InfiniteAnimation() {
    return (
        <div className="relative w-full py-8 lg:py-12 bg-secondary overflow-hidden">
            <div className="animate-infinite-scroll">
                {scrollList.map((name, index) => (
                    <div key={index} className='flex items-center'>
                        <span className="text-3xl md:text-4xl lg:text-5 font-Fredoka font-semibold text-white mx-12 whitespace-nowrap">
                            {name}
                        </span>
                        {/* Dot Separator */}
                        <div className="lg:w-6 lg:h-6 w-4 h-4 mt-1 rounded-md lg:rounded-lg bg-white" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InfiniteAnimation