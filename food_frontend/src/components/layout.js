import Navbar from "./navabr"
const Layout =({children})=>{
    return(
        <div className="h-screen w-screen border border-black back">
            <Navbar />
            {children}
        </div>
    )
}
export default Layout