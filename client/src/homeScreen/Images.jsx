export default function Images(props){
  return(
    <div>
      <img src={props.url} key={props.key} alt=""></img>
   </div>
  )
}