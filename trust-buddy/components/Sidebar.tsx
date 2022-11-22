

const Sidebar = () => {
    return (
        <aside className='flex-grow border basis-[20%] | '>
            <div className="pt-[97px] |  border-b | pb-10 | grid | gap-y-10">
                <div className="p-3 bg-[#F1F0F0]">Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                
            </div>
            <div className="grid | pt-3 | gap-y-4">
                <div className="grid | gap-y-10">
                    <div>Settings</div>
                    <div>Dark Mode</div>
                </div>
                <div className="grid | gap-y-10">
                    <div>Support</div>
                    <div>Logout</div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar