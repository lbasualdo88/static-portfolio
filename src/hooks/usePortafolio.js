import { useContext } from 'react'
import PortfolioContext from '../context/PortfolioProvider'

const usePortafolio = () => {
    return useContext(PortfolioContext)
}

export default usePortafolio