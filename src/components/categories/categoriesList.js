import { Category } from "./category"

export const CategorisList=({categories})=>{
return(
    categories.map((category)=>{
        return <Category className="category" category={category}/>
    })
)
}