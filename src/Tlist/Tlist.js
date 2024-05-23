import React from 'react'
import { CloseCircleOutlined} from '@ant-design/icons'


const Tlist = ({list,deleteItem}) => {
  
  return (
    <div >
      {list.map((item,i)=>(
                     <ul  key={item}  >
      <li className="p-2" >
        {item}
        <CloseCircleOutlined onClick={()=>deleteItem(i)} />
 </li>

    </ul>
))}

    </div>
  )
}

export default Tlist