import { Heart} from "lucide-react";
const Product = () => {
    return (
        <div className="card w-75 bg-base-100 shadow-xl rounded-lg bg-white text-black overflow-hidden">
            <figure>
                <img src="https://res.cloudinary.com/do88eynar/image/upload/v1746891177/ryhgysby9mz1ebgrw48m.webp" alt="Shoes" />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-2xl font-bold latter-spacing ">Shoes!</h2>
                <p className="text-lg mt-3">If a dog chews shoes whose shoes does he choose?</p>
                <p className="text-amber-400">26 $</p>
                <div className="card-actions justify-end flex items-center justify-center gap-3 mt-4">
                    <button className="btn btn-primary bg-amber-400 rounded-lg p-1 text-white w-[80%] hover:bg-amber-500">view product</button>
                    <button className="favurit"><Heart className="stroke-red-600 hover:fill-red-600"/></button>
                </div>
            </div>

        </div>
    );
}

export default Product;
