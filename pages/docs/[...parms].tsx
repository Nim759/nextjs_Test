import { NextPage } from "next"
import { useRouter } from "next/router"

const Detail2 : NextPage = () => {

  const router = useRouter();
  const {parms = []} = router.query
  console.log(parms)


  return (
     
    <div>
     {parms?.length === 2 ?  <div>doc</div> : null
      }
      </div>
  )
}

export default Detail2