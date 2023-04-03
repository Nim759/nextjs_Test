import { NextPage } from "next"
import {useRouter} from "next/router"


const Details : NextPage = () => {
    const router = useRouter()
    const productId = router.query.productId
  return (
    <div>index {productId}</div>
  )
}

export default Details