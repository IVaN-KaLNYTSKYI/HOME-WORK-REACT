export default function List ({item,remove,index}) {
  return(
      <div>
        <div>{item}--{index}</div>

          <button onClick={()=>{remove(index)}}>remove</button>
      </div>
  )
}