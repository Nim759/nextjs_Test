import { NextPage } from "next"
import { useRouter } from "next/router"

const productId: NextPage = () => {

    const router = useRouter()
    const ProductId = router.query.productId

    return (

        <div>productId {ProductId}</div>
    )
}

export default productId