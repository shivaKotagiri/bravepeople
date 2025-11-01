
export default function FooterLinks({ lists, name }: { lists: string[], name: string }) {
    return (
        <div className="flex flex-col gap-3 text-white">
            <div className="text-xs text-neutral-300 tracking-tighter">{ name }</div>
            <div className="flex flex-col gap-1">
                {lists.map((list, index) => (
                    <div className="text-2xl font-[500] cursor-pointer" key={index}>{ list }</div>
                ))}
            </div>
        </div>
    )
}