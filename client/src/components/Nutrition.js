import { data } from "autoprefixer";

export default function Nutrition( {info}) {
    console.log(info);

    return(
        <div>
            {info.data==='loading' ? (
                <>
                </>
            ) : (
                <div>
                    {info.data.hints[0].food.category==='Generic meals' ? (
                        <div>
                            {info.data.hints[0].food.category}
                        </div>
                    ) : info.data.hints[0].food.category==='Generic foods' ? ( 
                        <div>
                            {info.data.hints[0].food.category}
                        </div>
                    ) : info.data.hints[0].food.category==='packaged foods' ? ( 
                        <div>
                            {info.data.hints[0].food.category}
                        </div>
                    ) : info.data.hints[0].food.category==='Fast foods' ? ( 
                        <div>
                            {info.data.hints[0].food.category}
                        </div>
                    ) : (
                        <div>
                            {info.data.hints[0].food.category}
                        </div>
                    )}
                    {info.data.hints[0].food.image ? (
                        <img src={info.data.hints[0].food.image}></img>
                    ) : (
                        <></>
                    )}
                </div>
            )}            
        </div>
    )
}