import Image from "next/image";

const Header = () => {
    
    return(
        <div className={' fixed top-0 left-0 right-0 z-50" p-4 flex justify-between items-center '}>
            <div className="pl-20 flex items-center">
                <Image
                src={'/logo.png'}
                alt={'yaru logo'}
                width={70}
                height={100}/>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    Yaru
                </h1>

            </div>
            
        </div>
    )
}

export default Header;