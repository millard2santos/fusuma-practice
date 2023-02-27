import avatar from '../assets/Avatar.png'


export const Cell = ({ prop }) => {

  const { sellPrice, name, promoterCompanyName, shortAddress } = prop

  const converter = (num) => {
    return num.toFixed(2).toString().replace('.', ',')
  }

  return (
    <>
      
      <div className='flex gap-2 px-6 py-4'>
        <img src={avatar} className='w-10 h-10' alt="" />
        <span className='text-[#6B7280]'>{name}</span>
      </div>
      <span className='text-[#6B7280] px-6 py-4'>{promoterCompanyName.toUpperCase()}</span>
      <div className='px-6 py-4'>
        <p>{shortAddress.locality}</p>
        <p className='text-[#6B7280]'>{shortAddress.province},{shortAddress.region}</p>
      </div>
      
        <p className='font-medium px-6 py-4'>0,00</p>
      
      
        <p className='font-medium px-6 py-4'>{converter(sellPrice)}€</p>
      
    </>
  )
}
