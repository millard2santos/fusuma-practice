
export const Wrong = ({setModal}) => {


    const handleClick = () => {
        setModal(false)
    }
    return (
        <div className=" 
        flex justify-center items-center absolute
         w-[500px] h-[200px] bg-white inset-y-40
          shadow-[0_0_0_50vmax] shadow-[rgba(0,0,0,.5)]
          rounded-md" >
            <p>Email / Contraseña incorrecta</p>
            <div onClick={handleClick} className="cursor-pointer p-3 text-3xl">x</div>
        </div>
    )
}
