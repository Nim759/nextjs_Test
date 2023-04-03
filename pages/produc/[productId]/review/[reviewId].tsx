import { NextPage } from "next"
import {useRouter} from "next/router"

const review : NextPage = () => {

    const router = useRouter()
    const {productId , reviewId } = router.query
  return (
    <div> reviewId {reviewId} from {productId}</div>
  )
}

export default review