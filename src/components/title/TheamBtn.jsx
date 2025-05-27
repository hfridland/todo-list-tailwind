import { useDispatch, useSelector } from 'react-redux'
import { setTheam } from '../../slices/theamSlice'
import { useEffect } from 'react'
import iconMoon from '/icon-moon.svg'
import iconSun from '/icon-sun.svg'

const TheamBtn = () => {
  const dispatch = useDispatch()
  const theam = useSelector((state) => state.theam)
  const toggleTheam = () =>
    dispatch(setTheam(theam === 'light' ? 'dark' : 'light'))

  useEffect(() => {
    if (theam === 'dark') {
      document.body.setAttribute('class', 'dark')
    } else {
      document.body.removeAttribute('class')
    }
  }, [theam])

  const img = theam === 'light' ? iconMoon : iconSun

  return (
    <div className="cursor-pointer">
      <img src={img} alt="Theam swither" onClick={toggleTheam} />
    </div>
  )
}

export default TheamBtn
